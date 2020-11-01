<?php
namespace Svadba\Component;

class Translations {
    private static $translations = [
        "en" => [
            "field_code_required" => "The field `Code` is required.",
            "error_missing_guests" => "Somehow you're missing the list of invited guests.",
            "code_doesnt_exist" => "The provided code does not exist. Please check your invitation card again."
        ],
        "de" => [
            "field_code_required" => "The field `Code` is required.",
            "error_missing_guests" => "Somehow you're missing the list of invited guests.",
            "code_doesnt_exist" => "The provided code does not exist. Please check your invitation card again."
        ],
        "sr" => [
            "field_code_required" => "Polje `Code` je obavezno.",
            "error_missing_guests" => "Nekako se dogodilo da ti fali lista gostiju. Osveži stranu i probaj ponovo.",
            "code_doesnt_exist" => "Kod koji ste uneli nepostoji. Molimo da proverite kod na pozivnici i probate opet."
        ]
    ];

    private string $language;

    private static $allowedLanguages = [
        "en", "de", "sr"
    ];

    private static $defaultLanguage = "en";

    function __construct(string $language) {
        if (!in_array($language, self::$allowedLanguages))
            $language = self::$defaultLanguage;

        $this->language = $language;
    }

    function translate(string $key): string {
        if (isset(self::$translations[$this->language][$key]))
            return self::$translations[$this->language][$key];

        if (isset(self::$translations[self::$defaultLanguage][$key]))
            return self::$translations[self::$defaultLanguage][$key];

        return $key;
    }
}