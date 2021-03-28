<?php

namespace Svadba\Model;

class Invitation
{
    private $code;

    private $email;

    private $groupName;

    private $maxGuests;

    private $updatedDatetime;

    private $language;

    /**
     * @var array [Guest]
     */
    private $guests;

    public function __construct(
        string $code,
        string $email,
        string $groupName,
        int $maxGuests,
        string $language,
        string $updatedDatetime,
        array $guests = []
    )
    {
        $this->code = $code;
        $this->email = $email;
        $this->groupName = $groupName;
        $this->maxGuests = $maxGuests;
        $this->language = $language;
        $this->updatedDatetime = $updatedDatetime;
        $this->guests = $guests;
    }

    public function getCode(): string {
        return $this->code;
    }

    public function getGroupName(): string {
        return $this->groupName;
    }

    public function getMaxGuests(): int {
        return $this->maxGuests;
    }

    public function getLanguage(): string {
        return $this->language;
    }

    public function withGuests(array $guests): self {
        $self = $this;
        $self->guests = $guests;

        return $self;
    }

    public function with(string $email): self {
        $self = $this;
        $self->email = $email;
        $this->updatedDatetime = date("Y-m-d H:i:s");

        return $self;
    }

    public function toArray(): array {
        return [
            "email" => $this->email,
            "updatedDatetime" => $this->updatedDatetime
        ];
    }

    public function serialize(): array {
        $serializedGuests = [];
        foreach ($this->guests as $guest) {
            /** @var $guest Guest */
            $serializedGuests[] = $guest->serialize();
        }

        return [
            "email" => $this->email,
            "maxGuests" => $this->maxGuests,
            "updatedDatetime" => $this->updatedDatetime,
            "guests" => $serializedGuests
        ];
    }
}