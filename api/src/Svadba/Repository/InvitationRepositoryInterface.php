<?php
namespace Svadba\Repository;

use Svadba\Model\Invitation;

interface InvitationRepositoryInterface
{
    function findAll(): array;

    function find(string $code): Invitation;

    function findWithGuests(string $code): Invitation;

    function update(Invitation $invitation): bool;
}