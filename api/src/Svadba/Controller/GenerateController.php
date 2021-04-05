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
        $link = '<a href="' . $url . '">' . $url . '</a>';
        /** @var Translations $translations */
        $translations = $this->translationsPerLanguage[$invitation->getLanguage()];
        return '
<div class="sticker-wrapper">
    <div class="sticker">
        <img src="/images/deco_01.png" class="deco-01">
        <img src="/images/deco_01.png" class="deco-02">
        
        <div class="sticker__body">
            <p class="paragraph sticker__paragraph">
            ' . $translations->translate("sticker_text", [$invitation->getGroupName(), $link]) . '
            </p>
            <img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='.$url.'&choe=UTF-8" alt="QR-code" class="sticker__image" />
        </div>
        
        <img src="/images/deco_01.png" class="deco-03">
        <img src="/images/deco_01.png" class="deco-04">
    </div>
</div>
        ';
    }

    private function generateHtml(string $content) {
        return '
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Generated QR codes</title>
        <style>
            body {
                color: #0f7d40;
                font: italic 18px Calmius, Garamond, "Times New Roman", serif;
                padding: 0;
            }
            
            a {
                color: #0e468a;
            }
            
            abbr {
                outline: 0;
                text-decoration: none;
            }
            
            em {
                font-style: normal;
                font-weight: bold;
            }
            
            strong {
                display: block;
                margin-bottom: 8px;
            }
            
            .paragraph {
                line-height: 1.4;    
            }
            
            .sticker-wrapper {
                border: 1px solid red;
                margin-bottom: 4cm;
                width: 12cm;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                padding: 0.5cm 0.25cm;
            }
            
            .sticker {
                border: 1px solid #0e468a;
                width: 11cm;
                position: relative;
                padding: 30px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
            }
            
            .sticker__body {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 10px 1px 9px;
                text-align: center;
            }
            
            .sticker__paragraph {
                flex: 0 0 100%;
            }
            
            .sticker__image {
                height: 120px;
                margin: 10px;
                width: 120px;
            }
            
            .deco-01,
            .deco-02,
            .deco-03,
            .deco-04 {
                border: 8px solid #fff;
                height: auto;
                width: 60px;
                position: absolute;
            }
            
            .deco-01 {
                top: -6px;
                left: -6px;
            }
            
            .deco-02 {
                top: -6px;
                right: -6px;
                transform: scaleX(-1);
            }
            
            .deco-03 {
                bottom: -6px;
                left: -6px;
                transform: scaleY(-1);
            }
            
            .deco-04 {
                bottom: -6px;
                right: -6px;
                transform: scaleX(-1) scaleY(-1);
            }
        </style>
    </head>
    <body>
        ' . $content . '
    </body>
</html>        
';
    }
}