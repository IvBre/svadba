<?php
namespace Svadba\Controller;

use Gridonic\JsonResponse\SuccessJsonResponse;
use Svadba\Component\Translations;
use Svadba\Model\Guest;
use Svadba\Repository\GuestRepositoryInterface;
use Svadba\Repository\InvitationRepositoryInterface;

class IndexController
{
    private InvitationRepositoryInterface $invitationRepository;

    private GuestRepositoryInterface $guestRepository;

    private Translations $translations;

    public function __construct(
        InvitationRepositoryInterface $invitationRepository,
        GuestRepositoryInterface $guestRepository,
        Translations $translations
    ) {
        $this->invitationRepository = $invitationRepository;
        $this->guestRepository = $guestRepository;
        $this->translations = $translations;
    }

    public static function index() {
        $response = new SuccessJsonResponse();

        return $response->send();
    }

    public function getInvitation(string $code) {
        if (empty($code)) throw new \InvalidArgumentException($this->translations->translate("field_code_required"));

        $invitation = $this->invitationRepository->findWithGuests($code);

        $response = new SuccessJsonResponse($invitation->serialize());

        return $response->send();
    }

    public function updateInvitation(string $code) {
        $data = json_decode(file_get_contents('php://input'), true);

        if (empty($code)) throw new \InvalidArgumentException($this->translations->translate("field_code_required"));

        if (!isset($data["guests"])) throw new \InvalidArgumentException($this->translations->translate("error_missing_guests"));

        $guests = $data["guests"];
        $email = isset($data["email"]) ? $data["email"] : "";

        $numOfGuests = 0;
        $updateGuestsData = [];
        $insertGuestData = [];
        foreach ($guests as $guest) {
            if (!isset($guest["name"])) throw new \InvalidArgumentException("Field <b>Name</b> is required for each guest.");

            $name = $guest["name"];
            $isComing = isset($guest["isComing"]) ? (bool)$guest["isComing"] : false;

            if ($isComing) $numOfGuests++;

            $isVegetarian = isset($guest["isVegetarian"]) ? (bool)$guest["isVegetarian"] : false;

            if (isset($guest['guestId']) && $guest['guestId'] > 0) {
                $guestId = (int)$guest['guestId'];

                $updateGuestsData[$guestId] = new Guest(
                    $guestId,
                    $code,
                    $isComing,
                    $isVegetarian,
                    $name
                );
            } else {
                $insertGuestData[] = new Guest(
                    0, // zero means non existing.
                    $code,
                    $isComing,
                    $isVegetarian,
                    $name
                );
            }
        }

        $this->guestRepository->verify(array_keys($updateGuestsData), $code);

        $invitation = $this->invitationRepository->find($code);

        if ($invitation->getMaxGuests() < $numOfGuests) {
            throw new \InvalidArgumentException("This invitation can only have maximum of " . $invitation->getMaxGuests() .
                " guest(s) in total, but you've added " . $numOfGuests . ". Please add " . $invitation->getMaxGuests() .
                " or less invitees.");
        }

        $this->invitationRepository->update($invitation->with($email));

        foreach ($updateGuestsData as $guestId => $guestData) {
            $this->guestRepository->update($guestData);
        }

        if (count($insertGuestData) > 0) {
            $this->guestRepository->insert($insertGuestData);
        }

        $response = new SuccessJsonResponse();

        return $response->send();
    }
}

