<?php

$db_server = 'localhost';
$db_username = 'root';
$db_password = 'password';
$db_database = 'kantipur';


function insert($con,$video_id){
    $sql = 'INSERT INTO comments (comment,video_id) VALUES ("'.$_POST['comment'].'" '.
            'WHERE video_id = "'.$video_id.'")';
    mysqli_query($con,$sql);
    close_con($con);
}

function get_all($con,$video_id){

    $sql = 'select * from comments where video_id = "'.$video_id.'";';

    $result = mysqli_query($con,$sql);

    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $data = json_encode($data);

    return $data;
}

function init_con($db_server,$db_username,$db_password,$db_database){

    $con = mysqli_connect($db_server,$db_username,$db_password,$db_database);
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        die;
    }
    return $con;
}

function close_con($con){
    mysqli_close($con);
}


$con = init_con($db_server,$db_username,$db_password,$db_database);

if($_POST){
    insert($con,$_POST['video_id']);
}

elseif($_GET){
    $comments = get_all($con,$_GET['video_id']);
    print_r($comments);
}
