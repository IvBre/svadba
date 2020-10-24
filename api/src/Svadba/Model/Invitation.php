<?php

namespace Svadba\Model;

class Invitation
{
    private string $code;

    private string $email;

    private int $maxGuests;

    private string $updatedDatetime;

    /**
     * @var array [Guest]
     */
    private array $guests;

    public function __construct(
        string $code,
        string $email,
        int $maxGuests,
        string $updatedDatetime,
        array $guests = []
    )
    {
        $this->code = $code;
        $this->email = $email;
        $this->maxGuests = $maxGuests;
        $this->updatedDatetime = $updatedDatetime;
        $this->guests = $guests;
    }

    public function getCode(): string {
        return $this->code;
    }

    public function getMaxGuests(): int {
        return $this->maxGuests;
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