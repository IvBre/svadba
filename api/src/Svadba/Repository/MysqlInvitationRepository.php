<?php
namespace Svadba\Repository;

use Simplon\Mysql\Mysql;
use Svadba\Component\Translations;
use Svadba\Model\Invitation;

class MysqlInvitationRepository implements InvitationRepositoryInterface
{
    private $dbConn;

    private $guestRepository;

    private $translations;

    public function __construct(
        Mysql $dbConn,
        GuestRepositoryInterface $guestRepository,
        Translations $translations
    ) {
        $this->dbConn = $dbConn;
        $this->guestRepository = $guestRepository;
        $this->translations = $translations;
    }

    public function findAll(): array {
        $dbResult = $this->dbConn->fetchRowMany("SELECT * FROM invitations");

        if ($dbResult == null) {
            throw new \InvalidArgumentException($this->translations->translate("code_doesnt_exist"));
        }

        $invitations = [];
        foreach ($dbResult as $invitation) {
            $invitations[] = new Invitation(
                $invitation["code"],
                $invitation["email"],
                $invitation["groupName"],
                (int)$invitation["maxGuests"],
                $invitation["language"],
                $invitation["updatedDatetime"]
            );
        }

        return $invitations;
    }

    public function find(string $code): Invitation {
        $condition = ['code' => $code];

        $dbResult = $this->dbConn->fetchRow("SELECT * FROM invitations WHERE code = :code", $condition);

        if ($dbResult == null) {
            throw new \InvalidArgumentException($this->translations->translate("code_doesnt_exist"));
        }

        return new Invitation(
            $dbResult["code"],
            $dbResult["email"],
            $dbResult["groupName"],
            (int)$dbResult["maxGuests"],
            $dbResult["language"],
            $dbResult["updatedDatetime"]
        );
    }

    public function findWithGuests(string $code): Invitation {
        $invitation = $this->find($code);

        $guests = $this->guestRepository->findAll($code);

        return $invitation->withGuests($guests);
    }

    public function update(Invitation $invitation): bool {
        return $this->dbConn->update('invitations', ["code" => $invitation->getCode()], $invitation->toArray());
    }
}