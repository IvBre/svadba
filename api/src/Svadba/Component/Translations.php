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
            "system_error_invalid_code" => "Somehow there are no guests invited for this code. Please contact us at: <a href='mailto:petrovivana@gmail.com'>petrovivana@gmail.com</a> or by phone: <a href='tel:+491702881385'>+49170 28 81 385</a>",
            "system_error_num_guests" => "Somehow the number of invited guests doesn't match.",
            "system_error_invalid_guest_id" => "Somehow the provided guest ID :?: for the code is not valid.",
            "sticker_text" => "<strong>Hey :?:!</strong><br /> Please respond to our invitation <em>latest until 30st of June</em><br> by following to <abbr lang='en' title='Uniform Resource Locator'>URL: :?:</abbr> or by scanning the <abbr lang='en' title='Quick Response'>QR</abbr> code:",
        ],
        "de" => [
            "field_code_required" => "Das Feld `Code` ist ein Pflichtfeld.",
            "error_missing_guests" => "Somehow you're missing the list of invited guests.",
            "code_doesnt_exist" => "Der angebotene Code existiert leider nicht. Bitte prüfe nocheinmal Deine Einladung.",
            "field_name_required" => "Das Feld `Name` ist ein Pflichtfeld für jeden einzelnen Gast.",
            "num_guests_violation" => "Diese Einladung erlaubt nur eine maximale Anzahl von insgesamt :?: guest(s) Gästen. Jedoch hast Du :?:. Gäste hinzugefügt. Bitte füge :?: oder weniger Gäste hinzu",
            "system_error_invalid_code" => "Es sind keine Gäste für diesen Code eingeladen. Bitte kontaktiert uns unter: <a href='mailto:petrovivana@gmail.com'>petrovivana@gmail.com</a> oder per Telefon: <a href='tel:+491702881385'>+491702881385</a>",
            "system_error_num_guests" => "Die Anzahl eingeladener Gäste stimmt nicht überein.",
            "system_error_invalid_guest_id" => "Für diese Gast ID :?: existiert kein valider Code.",
            "sticker_text" => "<strong>Hallo :?:!</strong><br />Bitte antwortet auf unsere Einladung <em>bis spätestens 30. Juni</em><br> entweder mit der folgenden <abbr lang='en' title='Uniform Resource Locator'>URL</abbr>: :?:, oder indem Ihr den folgenden <abbr lang='en' title='Quick Response'>QR</abbr> Code scannt.",
        ],
        "sr" => [
            "field_code_required" => "Поље `Код` је обавезно.",
            "error_missing_guests" => "Некако се догодило да ти фали листа гостију. Освежи страну и пробај поново.",
            "code_doesnt_exist" => "Код који сте унели непостоји. Молимо да проверите код на позивници и пробате опет.",
            "field_name_required" => "Поље `Име` је обавезно за сваког госта.",
            "num_guests_violation" => "Позивница обухвата укупно :?: гостију, али Ви сте унели :?:. Молимо да додате :?: или мање људи.",
            "system_error_invalid_code" => "Из неког разлога овај код позивнице није валидан. Молимо да нас контактирате на: <a href='mailto:petrovivana@gmail.com'>petrovivana@gmail.com</a> или телефоном: <a href='tel:+491702881385'>+491702881385</a>",
            "system_error_num_guests" => "Из неког разлога, број позваних гостију се не слаже са нашим подацима.",
            "system_error_invalid_guest_id" => "Somehow the provided guest ID :?: for the code is not valid.",
            "sticker_text" => "<strong>Здраво :?:!</strong><br />Молимо да одговорите на позивницу, <em>најкасније до 30ог Јуна</em>, пратећи линк: :?: или скенирањем <abbr lang='en' title='Quick Response'>QR</abbr> кода испод.",
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