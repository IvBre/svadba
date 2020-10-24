<?php
namespace Svadba\Repository;

use Svadba\Model\Guest;

interface GuestRepositoryInterface
{
    function findAll(string $code): array;

    function verify(array $guestIds, string $code): bool;

    function update(Guest $guest): bool;

    function insert(array $guests): bool;
}