<?php
$visitor = $_POST['visitor'];
$subject = "CEBU, PHILIPPINES Feedback ";

$fav = "";
if (isset($_POST['history'])) {
	$fav = "history";
}
else if (isset($_POST['culture'])) {
	$fav = "culture";
}
else if (isset($_POST['nature'])) {
	$fav = "nature";
}
else if (isset($_POST['tourism'])) {
	$fav = "tourism";
}

$message = $_POST['message'];
$message . '<br>' . "Favorite topic: $fav";
$message . '<br><br>' . "From " . $_POST['email'];
$to = "ta7384@g.rit.edu";

mail($to,$subject,$message);
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
    <link rel="stylesheet" href="../css/thankyou.css">
    <title>Cebu | Thank You</title>
</head>
<body>
<div class="container">
        <p id="text">thanks for your feedback&nbsp;☺</p>
    </div>
</body>
</html>