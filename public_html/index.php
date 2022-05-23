<?php
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require_once '../vendor/autoload.php';

$loader = new FilesystemLoader('/');
$twig = new Environment($loader);

echo $twig->render('index.twig');