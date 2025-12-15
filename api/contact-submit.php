<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require "db.php";
require "config.php";

/* Allow POST only */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

/* Sanitize */
function clean($value) {
    return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
}

$firstname = clean($data['firstname'] ?? '');
$lastname  = clean($data['lastname'] ?? '');
$company   = clean($data['company'] ?? '');
$mobile    = clean($data['mobile'] ?? '');
$email     = clean($data['email'] ?? '');
$message   = clean($data['message'] ?? '');
$captcha   = $data['captcha'] ?? '';

/* Validation */
if (!$firstname || !$lastname || !$mobile || !$email || !$message) {
    http_response_code(422);
    echo json_encode(["error" => "All required fields are mandatory"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid email format"]);
    exit;
}

if (!preg_match("/^[6-9]\d{9}$/", $mobile)) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid mobile number"]);
    exit;
}

/* reCAPTCHA verify */
$verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret="
    . RECAPTCHA_SECRET . "&response=" . $captcha
);

$response = json_decode($verify);

if (!$response->success) {
    http_response_code(403);
    echo json_encode(["error" => "Captcha verification failed"]);
    exit;
}

/* Insert */
$stmt = $conn->prepare(
    "INSERT INTO contact_enquiry
     (first_name, last_name, company, mobile, email, message, ip_address)
     VALUES (?, ?, ?, ?, ?, ?, ?)"
);

$ip = $_SERVER['REMOTE_ADDR'];

$stmt->bind_param(
    "sssssss",
    $firstname,
    $lastname,
    $company,
    $mobile,
    $email,
    $message,
    $ip
);

$stmt->execute();

echo json_encode([
    "status" => "success",
    "message" => "Thank you! We will contact you soon."
]);
