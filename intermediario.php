<?php
$bd = fopen("BD.html", "a");
$x = $_GET("latitude");
$y = $_GET("longitude");

$urlmaps = "https://www.google.com/maps/search/?api=1&query=" , $x , "%2C", $y;

$data = $urlmaps, "\n\n";
fwrite($bd, $data);
fclose($bd)

?>