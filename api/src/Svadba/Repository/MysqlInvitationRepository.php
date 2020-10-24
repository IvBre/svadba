<?php
namespace Svadba\Repository;

use Simplon\Mysql\Mysql;
use Svadba\Model\Invitation;

class MysqlInvitationRepository implements InvitationRepositoryInterface
{
    private Mysql $dbConn;

    private GuestRepositoryInterface $guestRepository;

    public function __construct(
        Mysql $dbConn,
        GuestRepositoryInterface $guestRepository
    ) {
        $this->dbConn = $dbConn;
        $this->guestRepository = $guestRepository;
    }

    public function find(string $code): Invitation {
        $condition = ['code' => $code];

        $dbResult = $this->dbConn->fetchRow("SELECT * FROM invitations WHERE code = :code", $condition);

        if ($dbResult == null) {
            throw new \InvalidArgumentException("The provided code does not exist. Please check your invitation card again.");
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