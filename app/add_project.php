<?php
    
    $name = $_POST['projectName'];
    
    $data   = array();


    if($name === ''){
    	$data['status'] = 'error';
    	$data['text'] = 'Вы не заполнили поле - Название проекта';
    }else{
    	$data['status'] = 'OK';
    	$data['text'] = 'Вы молодец, не забыли заполнить Название проекта';
    }

    header("Content-Type: application/json");
    echo json_encode($data);
    exit;