<?php
namespace Svadba;

use Gridonic\JsonResponse\ErrorJsonResponse;
use mysql_xdevapi\Exception;
use Steampixel\Route;
use Svadba\Component\Translations;
use Svadba\Controller\IndexController;
use Simplon\Mysql\PDOConnector;
use Simplon\Mysql\Mysql;
use Svadba\Repository\MysqlGuestRepository;
use Svadba\Repository\MysqlInvitationRepository;

class Application
{
    private static array $registry = [];

    public function main() {
        $this->register();

        set_exception_handler([$this, "exceptionHandler"]);

        Route::add('/', function() {
            IndexController::index();
        });

        $index = self::$registry["indexController"];

        Route::add('/v/([0-9a-z]*)', function($code) use($index) {
            /** @var $index IndexController */
            $index->getInvitation($code);
        }, 'get');

        Route::add('/u/([0-9a-z]*)', function($code) use($index) {
            /** @var $index IndexController */
            $index->updateInvitation($code);
        }, 'post');

        Route::run('/');
    }

    private function getDbConnection(): Mysql {
        try {
            $config = json_decode(file_get_contents(__DIR__ . "/../../config/mysql.json"), true);
        } catch (Exception $e) {
            $config = [
                "host" => "localhost",
                "user" => "root",
                "password" => "",
                "database" => "svadba"
            ];
        }

        $pdo = new PDOConnector(
            $config["host"],
            $config["user"],
            $config["password"],
            $config["database"]
        );

        $pdoConn = $pdo->connect('utf8', []);

        return new Mysql($pdoConn);
    }

    private function register() {
        self::$registry["mysql"] = $this->getDbConnection();
        self::$registry["translations"] = new Translations($this->getLanguage());
        self::$registry["guestRepository"] = new MysqlGuestRepository(self::$registry["mysql"], self::$registry["translations"]);
        self::$registry["invitationRepository"] = new MysqlInvitationRepository(
            self::$registry["mysql"],
            self::$registry["guestRepository"],
            self::$registry["translations"]
        );
        self::$registry["indexController"] = new IndexController(
            self::$registry["invitationRepository"],
            self::$registry["guestRepository"],
            self::$registry["translations"]
        );
    }

    private function getLanguage(): string {
        if (isset($_SERVER["HTTP_ACCEPT_LANGUAGE"]))
            return substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2);
        return "en";
    }

    public function exceptionHandler($exception) {
        if ($exception instanceof \InvalidArgumentException) {
            $response = new ErrorJsonResponse($exception->getCode(), $exception->getMessage(), "Bad Request", 400);
        } else {
            $response = new ErrorJsonResponse($exception->getCode(), $exception->getMessage(), "Internal Server Error", 500);
        }

        return $response->send();
    }
}