<?php
$host = "root";
$user = "root";
$pass = "";
$dbname = "formprodutos";
$port = 3306;

try {
    $conexao = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);
} catch (PDOException $err) {
}

function resposta($codigo, $ok, $msg) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");

    http_response_code($codigo);
    echo (json_encode([
        'ok' => $ok,
        'msg' => $msg
    ]));
    die;
}

if ($_SERVER['REQUEST_METHOD']!="POST"){
    resposta(400, false, 'Método Inválido');
}

$body = file_get_contents('php://input');

if(!$body){
    resposta(400, false, "Corpo fa requisição não encontrado");
}

$body = json_decode($body);

$body->nome = filter_var($body->nome, FILTER_SANITIZE_STRING);
$body->email = filter_var($body->email, FILTER_VALIDATE_EMAIL);
$body->msg = filter_var($body->msg, FILTER_SANITIZE_STRING);

if (!$body->nome || !$body->email || $contato->msg)
    resposta (400, false, "Dados Inválidos");

$stm = $conexao->prepare('INSERT INTO contato (nome,email,msg) VALUES(:nome,:email,:msg)');
$stm->bindParam('nome', $body->nome);
$stm->bindParam('email', $body->email);
$stm->bindParam('msg', $body->msg);
$stm->execute();

resposta(200, true, "Mensagem Salva com Sucesso");