<?php

$dbServer="localhost";
$dbUser="root";
$dbPass="";
$dbName="loginsystem";
$conn=mysqli_connect($dbServer,$dbUser,$dbPass,$dbName);
$id = $_POST['id'];
$pts=$_POST['pts'];
$hard= $_POST['hard'];
$easy= $_POST['easy'];
$medium=$_POST['medium'];
$sql="INSERT into USERS values ($id,$pts,$hard,$easy,$medium);";

?>