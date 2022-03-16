/*
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( c | u | l | t | u | r | e )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var culture_array = ["./assets/img/culture/1.jpg", "./assets/img/culture/2.jpg", "./assets/img/culture/3.jpg"];
var culture_captions = ["Christmas decorations at Ayala", "Holy Week Mass at Cebu Metropolitan Cathedral", "Mass at Santo Niño Basilica"];
var len_culture = culture_array.length;
setInterval(runit_culture, 2100);
var x_culture=1;
function runit_culture() {
    document.getElementById("slideshow_culture").src=culture_array[x_culture];
    document.getElementById("caption_culture").innerHTML=culture_captions[x_culture];
    x_culture++;
    if(x_culture == len) { x_culture=0; }
}

/*
   _   _   _   _  
  / \ / \ / \ / \ 
 ( f | o | o | d )
  \_/ \_/ \_/ \_/ 
*/
var food_array = ["./assets/img/food/1.jpg", "./assets/img/food/2.jpg", "./assets/img/food/3.jpg", "./assets/img/food/4.jpg", "./assets/img/food/5.jpg", "./assets/img/food/6.jpg", "./assets/img/food/7.jpg", "./assets/img/food/8.jpg", "./assets/img/food/9.jpg", "./assets/img/food/10.jpg"];
var food_captions = ["Lechon surrounded by ngohiong and puso (rice in diamond shaped banana leaf)", "Jollibee Restaurant", "Pochero (beef stew)", "Dangit (dried fish)", "Chicharon (pork rinds)", "Puto Maya & Sikwate, best paired with sweet mango", "Bibinka", "Masareal (peanut and coconut dessert)", "Ampaw (puffed rice cake)", "Budbud (sweet sticky rice)"];
var len_food = food_array.length;
setInterval(runit_food, 2000);
var x_food=1;
function runit_food() {
    document.getElementById("slideshow_food").src=food_array[x_food];
    document.getElementById("caption_food").innerHTML=food_captions[x_food];
    x_food++;
    if(x_food == len_food) { x_food=0; }
}

/*
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( e | c | o | n | o | m | y )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var economy_array = ["./assets/img/economy/1.jpg", "./assets/img/economy/2.jpg"];
var economy_captions = ["IT Park, home to many BPO companies", "Aerial view of IT Park"];
var len_economy = economy_array.length;
setInterval(runit_economy, 2200);
var x_economy=1;
function runit_economy() {
    document.getElementById("slideshow_economy").src=economy_array[x_economy];
    document.getElementById("caption_economy").innerHTML=economy_captions[x_economy];
    x_economy++;
    if(x_economy == len_economy) { x_economy=0; }
}