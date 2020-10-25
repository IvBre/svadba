<?php
header("Access-Control-Allow-Origin: *");

require __DIR__ . '/../vendor/autoload.php';

use Svadba\Application;

$app = new Application();

$app->main();