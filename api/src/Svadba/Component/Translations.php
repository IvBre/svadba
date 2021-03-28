<?php
namespace Svadba\Component;

class Translations {
    private static $translations = [
        "en" => [
            "field_code_required" => "The field `Code` is required.",
            "error_missing_guests" => "Somehow you're missing the list of invited guests.",
            "code_doesnt_exist" => "The provided code does not exist. Please check your invitation card again.",
            "field_name_required" => "Field `Name` is required for each guest.",
            "num_guests_violation" => "This invitation can only have maximum of :?: guest(s) in total, but you've added :?:. Please add :?: or less invitees.",
            "system_error_invalid_code" => "Somehow there are no guests invited for this code. Please contact us at: petrovivana@gmail.com or by phone: +491702881385",
            "system_error_num_guests" => "Somehow the number of invited guests doesn't match.",
            "system_error_invalid_guest_id" => "Somehow the provided guest ID :?: for the code is not valid.",
            "sticker_text" => "Hey :?:! Please respond to our invitation latest until 30st of June by following to URL: :?: or by scanning the QR code:",
        ],
        "de" => [
            "field_code_required" => "The field `Code` is required.",
            "error_missing_guests" => "Somehow you're missing the list of invited guests.",
            "code_doesnt_exist" => "The provided code does not exist. Please check your invitation card again.",
            "field_name_required" => "Field `Name` is required for each guest.",
            "num_guests_violation" => "This invitation can only have maximum of :?: guest(s) in total, but you've added :?:. Please add :?: or less invitees.",
            "system_error_invalid_code" => "Somehow there are no guests invited for this code. Please contact us at: petrovivana@gmail.com or by phone: +491702881385",
            "system_error_num_guests" => "Somehow the number of invited guests doesn't match.",
            "system_error_invalid_guest_id" => "Somehow the provided guest ID :?: for the code is not valid.",
            "sticker_text" => "Hey :?:! Please respond to our invitation latest until 30st of June by following to URL: :?: or by scanning the QR code:",
        ],
        "sr" => [
            "field_code_required" => "Polje `Code` je obavezno.",
            "error_missing_guests" => "Nekako se dogodilo da ti fali lista gostiju. Osveži stranu i probaj ponovo.",
            "code_doesnt_exist" => "Kod koji ste uneli nepostoji. Molimo da proverite kod na pozivnici i probate opet.",
            "field_name_required" => "Polje `Ime` je obavezno za svakog gosta.",
            "num_guests_violation" => "Pozivnica obuhvata ukupno :?: gostiju, ali Vi ste uneli :?:. Molimo da dodajte :?: ili manje ljudi.",
            "system_error_invalid_code" => "Iz nekog razloga ovaj kod pozivnice nije validan. Molimo da nas kontaktirante na: petrovivana@gmail.com ili telefonom: +491702881385",
            "system_error_num_guests" => "Iz nekog razloga, broj pozvanih gostiju se ne slaže sa našim podacima.",
            "system_error_invalid_guest_id" => "Somehow the provided guest ID :?: for the code is not valid.",
            "sticker_text" => "Zdravo :?:! Molimo da odgovorite na pozivnicu, najkasnije do 30og Juna, prateći sledeći link: :?: ili skeniranjem QR koda:",
        ]
    ];

    private $language;

    private static $allowedLanguages = [
        "en", "de", "sr"
    ];

    private static $defaultLanguage = "en";

    function __construct(string $language) {
        $this->setLanguage($language);
    }

    function copy(string $language): Translations {
        $clone = clone $this;
        $clone->setLanguage($language);

        return $clone;
    }

    function translate(string $key, array $placeholders = []): string {
        if (isset(self::$translations[$this->language][$key]))
            return $this->replacePlaceholders(self::$translations[$this->language][$key], $placeholders);

        if (isset(self::$translations[self::$defaultLanguage][$key]))
            return $this->replacePlaceholders(self::$translations[self::$defaultLanguage][$key], $placeholders);

        return $key;
    }

    private function setLanguage(string $language) {
        if (!in_array($language, self::$allowedLanguages))
            $language = self::$defaultLanguage;

        $this->language = $language;
    }

    private function replacePlaceholders(string $translation, array $placeholders = []): string {
        foreach ($placeholders as $placeholder) {
            $translation = $this->strReplaceFirst(":?:", $placeholder, $translation);
        }

        return $translation;
    }

    private function strReplaceFirst($from, $to, $content) {
        $from = '/'.preg_quote($from, '/').'/';

        return preg_replace($from, $to, $content, 1);
    }
}