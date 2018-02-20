<?php

$data = json_decode(file_get_contents("php://input"), true);

$answer = ["key" => "mean", "key2" => "mean2"];
echo json_encode($answer);