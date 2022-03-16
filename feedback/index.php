<?php
	$page='home';
	$path='./';
	require ($path.'assets/inc/header.php');
?>

<body>
    <div class="feedback container">
        <h2>feedback</h2>
        <form action="./assets/script/process.php" method="POST" onsubmit="return validateForm();">
            <label for="visitor">name&nbsp;</label>
            <input type="text" id="visitor" name="visitor" placeholder="hi, whats your name?">
            <label for="email">email&nbsp;</label>
            <input type="text" id="email" name="email" placeholder="abc123@mail.com">
            <label for="fav">favorite</label>
            <div class="options" id="options">
                <div class="pair">
                    <input type="checkbox" name="history" id="history" value="History">
                    <label for="history">history</label>
                </div>
                <div class="pair">
                    <input type="checkbox" name="culture" id="culture" value="Culture">
                    <label for="culture">culture</label>
                </div>
                <div class="pair">
                    <input type="checkbox" name="nature" id="nature" value="Nature">
                    <label for="nature">nature</label>
                </div>
                <div class="pair">
                    <input type="checkbox" name="tourism" id="tourism" value="Tourism">
                    <label for="tourism">tourism</label>
                </div>
            </div>
            <label for="msg">message&nbsp;</label>
            <textarea name="message" id="message" cols="30" rows="6" placeholder="write your message here!"></textarea>
            <button class="feedback" type="submit">submit</button>
        </form>
    </div>
</body>

</html>