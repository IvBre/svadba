<?php
namespace Svadba\Model;

class Guest
{
    private int $guestId;

    private string $code;

    private string $name;

    private bool $isComing;

    private bool $isVegetarian;

    public function __construct(
        int $guestId,
        string $code,
        bool $isComing,
        bool $isVegetarian,
        string $name = ""
    )
    {
        $this->guestId = $guestId;
        $this->code = $code;
        $this->isComing = $isComing;
        $this->isVegetarian = $isVegetarian;
        $this->name = $name;
    }

    public function getGuestId(): int {
        return $this->guestId;
    }

    public function toInsertArray(): array {
        return [
            "code" => $this->code,
            "name" => $this->name,
            "originalName" => $this->name,
            "isComing" => $this->isComing,
            "isVegetarian" => $this->isVegetarian
        ];
    }

    public function toUpdateArray(): array {
        return [
            "name" => $this->name,
            "isComing" => $this->isComing,
            "isVegetarian" => $this->isVegetarian
        ];
    }

    public function serialize(): array {
        return [
            "guestId" => $this->guestId,
            "name" => $this->name,
            "isComing" => $this->isComing,
            "isVegetarian" => $this->isVegetarian
        ];
    }
}