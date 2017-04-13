<?php
include 'config.php';

$response=new stdClass();

echo $_REQUEST["id"];

$query = "UPDATE storico SET storico.active = 0
WHERE storico.id_cliente =".$_REQUEST["id"];

//mysqli_query($dbConn, $query);
$bound = array();
$stmt=$db->prepare($query);
$stmt->execute($bound);

?>
