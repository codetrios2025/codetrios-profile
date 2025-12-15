<?php
$conn = new mysqli("localhost", "codetrios_user", "##codetrios@2025##", "codetrios_db");
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}
?>