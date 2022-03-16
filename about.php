<?php
	$page='about';
	$path='./';
	require ($path.'assets/inc/header.php');
?>


            <div class="title">
                <h2 id="pagename">about</h2>
                <p>the website</p>
                <p class="scroll"><a href="#developer" class="scroll"><span class="scroll">▼</span> scroll down for more info <span class="scroll">▼</span></a></p>
            </div>
        </div> <!-- end of front div -->

        <div class="container2" id="developer">
            <div class="wordbox">
                <h2 class="heading">developer/designer</h2>
                <p class="text">Hello, world! My name is Thea Arias and I'm a Web & Mobile Computing major at Rocheser Institute of Technology (RIT). I was born in Cebu City, Philippines and immigrated to the U.S. when I was nine years old alongside my immediate family. I designed and created this website in order to showcase and pay homage to one of my favorite places on Earth, my hometown 💞. It showcases different types of information about Cebu, including popular tourist destinations for people who want to go visit or anyone looking to learn more.</p>
            </div>
            <div class="mediabox">
                <p id="boxname" style="display:none">transportation</p>
                <div class="map">
                    <img src="./assets/img/about.jpg" alt="" title="">
                </div>
            </div>
        </div>

<?php
require($path.'assets/inc/footer.php');

?>