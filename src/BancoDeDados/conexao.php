<?php

$host = "root";
$user = "root";
$pass = "";
$dbname = "formprodutos";
$port = 3306;

try {
    $conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);
} catch (PDOException $err) {
}