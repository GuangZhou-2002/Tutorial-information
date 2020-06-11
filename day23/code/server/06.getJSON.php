<?php

// Content-Type: text/html; charset=UTF-8
header("Content-Type: text/json; charset=UTF-8");
$json = file_get_contents("data.json");
echo $json;

?>