<?php
namespace Svadba\Repository;

use Simplon\Mysql\Mysql;
use Svadba\Component\Translations;
use Svadba\Model\Invitation;

class MysqlInvitationRepository implements InvitationRepositoryInterface
{
    private Mysql $dbConn;

    private GuestRepositoryInterface $guestRepository;

    private Translations $translations;

    public function __construct(
        Mysql $dbConn,
        GuestRepositoryInterface $guestRepository,
        Translations $translations
    ) {
        $this->dbConn = $dbConn;
        $this->guestRepository = $guestRepository;
        $this->translations = $translations;
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
            (int)$dbResult["maxGuests"],
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