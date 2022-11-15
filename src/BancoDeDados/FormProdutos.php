<?php

include_once "conexao.php";

if(isset($_POST['selectum'])){

    $selectum = $_POST['selectum'];

    foreach($selectum as $k){
        echo $k."<br>";
    }
}


echo json_encode($selectum);