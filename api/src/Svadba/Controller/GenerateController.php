<?php
namespace Svadba\Controller;

use Svadba\Component\Translations;
use Svadba\Model\Invitation;
use Svadba\Repository\GuestRepositoryInterface;
use Svadba\Repository\InvitationRepositoryInterface;

class GenerateController
{
    private $invitationRepository;

    private $guestRepository;

    private $translations;

    private $translationsPerLanguage;

    public function __construct(
        InvitationRepositoryInterface $invitationRepository,
        GuestRepositoryInterface $guestRepository,
        Translations $translations
    ) {
        $this->invitationRepository = $invitationRepository;
        $this->guestRepository = $guestRepository;
        $this->translations = $translations;
        $this->translationsPerLanguage = [
            "sr" => $translations->copy("sr"),
            "de" => $translations->copy("de"),
            "en" => $translations->copy("en")
        ];
    }

    public function downloadStickers() {
        $invitations = $this->invitationRepository->findAll();

        $stickers = "";
        foreach ($invitations as $invitation) {
            $stickers .= $this->generateSticker($invitation);
        }

        echo $this->generateHtml($stickers);
    }

    public function downloadSticker(string $code) {
        if (empty($code)) throw new \InvalidArgumentException($this->translations->translate("field_code_required"));

        $invitation = $this->invitationRepository->findWithGuests($code);

        echo $this->generateHtml($this->generateSticker($invitation));
    }

    private function generateSticker(Invitation $invitation) {
        $url = "http://www.svad.ba/v/" . $invitation->getCode();
        /** @var Translations $translations */
        $translations = $this->translationsPerLanguage[$invitation->getLanguage()];
        return '
<div class="sticker">
    ' . $translations->translate("sticker_text", [$invitation->getGroupName(), $url]) . '
    <img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='.$url.'&choe=UTF-8" alt="QR-code" />
</div>
        ';
    }

    private function generateHtml(string $content) {
        return '
<html lang="en">
    <head>
        <title>Generated QR codes</title>
        <style>
        
        </style>
    </head>
    <body>
        ' . $content . '
    </body>
</html>        
';
    }
}