<?php
namespace Svadba\Repository;

use Simplon\Mysql\Mysql;
use Svadba\Component\Translations;
use Svadba\Model\Guest;

class MysqlGuestRepository implements GuestRepositoryInterface
{
    private $dbConn;

    private $translations;

    public function __construct(Mysql $dbConn, Translations $translations) {
        $this->dbConn = $dbConn;
        $this->translations = $translations;
    }

    public function findAll(string $code): array {
        $dbResult = $this->dbConn->fetchRowMany('SELECT * FROM guests WHERE code = :code', ['code' => $code]);

        if ($dbResult == null) throw new \InvalidArgumentException($this->translations->translate("system_error_invalid_code"));

        $guests = [];
        foreach ($dbResult as $guest) {
            $guests[] = new Guest(
                (int)$guest["guestId"],
                $guest["code"],
                (bool)$guest["isComing"],
                (bool)$guest["isVegetarian"],
                $guest["name"]
            );
        }

        return $guests;
    }

    public function verify(array $guestIds, string $code): bool {
        $condition = ['code' => $code];

        $dbGuestIds = $this->dbConn->fetchColumnMany('SELECT guestId FROM guests WHERE code = :code', $condition);

        if (count($dbGuestIds) != count($guestIds)) throw new \InvalidArgumentException($this->translations->translate("system_error_num_guests"));

        foreach ($guestIds as $guestId) {
            if (!in_array($guestId, $dbGuestIds)) throw new \InvalidArgumentException($this->translations->translate("system_error_invalid_guest_id", [$guestId]));
        }

        return true;
    }

    public function update(Guest $guest): bool {
        return $this->dbConn->update('guests', ["guestId" => $guest->getGuestId()], $guest->toUpdateArray());
    }

    public function insert(array $guests): bool {
        if (count($guests) == 1) {
            /** @var $guest Guest */
            $guest = $guests[0];
            return $this->dbConn->insert('guests', $guest->toInsertArray());
        }

        $insertData = [];
        foreach ($guests as $guest) {
            /** @var $guest Guest */
            $insertData[] = $guest->toInsertArray();
        }

        $result = $this->dbConn->insertMany('guests', $insertData);

        return !$result ?: true;
    }
}