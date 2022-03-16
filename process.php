<?php
$to = "ta7384@g.rit.edu";
$visitor = $_POST['visitor'];
$email = $_POST['email'];
$txtare = $_POST['message'];
$message = "Feedback from $visitor\n";
$message .= "Email: $email\n";
$message .= "Favorite page(s): ";

if(isset($_POST['history'])) {
    $message .= "History ";
}
if(isset($_POST['culture'])) {
    $message .= "Culture ";
}
if(isset($_POST['nature'])) {
    $message .= "Nature ";
}
if(isset($_POST['tourism'])) {
    $message .= "Tourism\n";
}

$message .= "Message: $txtarea";
mail($to,$subject + " | CEBU FEEDBACK",$message);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../stylecomingsoon.css">
    <title>Cebu | Thanks You</title>
</head>
<body>
<div class="container">
        <p id="text">☺ thanks for your feedback ☺</p>
        <button id="home_button"><a href="./index.php">back to home</a></button>
    </div>
</body>
</html>