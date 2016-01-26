<?php

$settings = include 'settings.php';
$mapBaseDir = $settings['mapBaseDir'];

$pdo = new PDO('mysql:host='.$settings['mysql']['host'].';dbname='.$settings['mysql']['db'].';charset=utf8',$settings['mysql']['username'],$settings['mysql']['password']);
