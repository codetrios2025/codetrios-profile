<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

/* =========================
   CONFIG
========================= */
require __DIR__ . "/db.php";
require __DIR__ . "/config.php";
require __DIR__ . "/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* =========================
   ALLOW POST ONLY
========================= */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

/* =========================
   READ JSON INPUT
========================= */
$data = json_decode(file_get_contents("php://input"), true);

/* =========================
   SANITIZE FUNCTION
========================= */
function clean($value) {
    return htmlspecialchars(trim($value), ENT_QUOTES, "UTF-8");
}

/* =========================
   VARIABLES
========================= */
$firstname = clean($data["firstname"] ?? "");
$lastname  = clean($data["lastname"] ?? "");
$company   = clean($data["company"] ?? "");
$mobile    = clean($data["mobile"] ?? "");
$email     = clean($data["email"] ?? "");
$message   = clean($data["message"] ?? "");
$captcha   = $data["captcha"] ?? "";
$ip        = $_SERVER["REMOTE_ADDR"];

/* =========================
   VALIDATION
========================= */
if (!$firstname || !$lastname || !$mobile || !$email || !$message) {
    http_response_code(422);
    echo json_encode(["error" => "All required fields are mandatory"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid email address"]);
    exit;
}

if (!preg_match("/^[6-9]\d{9}$/", $mobile)) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid mobile number"]);
    exit;
}

/* =========================
   VERIFY reCAPTCHA
========================= */
$verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret="
    . RECAPTCHA_SECRET . "&response=" . $captcha
);

$captchaResponse = json_decode($verify);

if (!$captchaResponse || !$captchaResponse->success) {
    http_response_code(403);
    echo json_encode(["error" => "Captcha verification failed"]);
    exit;
}

/* =========================
   INSERT INTO DATABASE
========================= */
$stmt = $conn->prepare(
    "INSERT INTO contact_enquiry
    (first_name, last_name, company, mobile, email, message, ip_address)
    VALUES (?, ?, ?, ?, ?, ?, ?)"
);

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

/* =========================
   SEND EMAIL TO ADMIN
========================= */
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;

    $mail->setFrom(SMTP_USER, "Website Contact");
    $mail->addAddress(ADMIN_EMAIL);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission";

    $mail->Body = "
        <h3>New Contact Enquiry</h3>
        <table border='1' cellpadding='8' cellspacing='0'>
            <tr><td><b>Name</b></td><td>$firstname $lastname</td></tr>
            <tr><td><b>Company</b></td><td>$company</td></tr>
            <tr><td><b>Mobile</b></td><td>$mobile</td></tr>
            <tr><td><b>Email</b></td><td>$email</td></tr>
            <tr><td><b>Message</b></td><td>$message</td></tr>
            <tr><td><b>IP</b></td><td>$ip</td></tr>
            <tr><td><b>Date</b></td><td>" . date("d-m-Y H:i:s") . "</td></tr>
        </table>
    ";

    $mail->send();
} catch (Exception $e) {
    // Email failure should not block form submission
}

/* =========================
   FINAL RESPONSE
========================= */
echo json_encode([
    "status" => "success",
    "message" => "Thank you! Your enquiry has been submitted successfully."
]);
exit;