/* _   _   _   _   _   _   _   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ 
 ( t | r | a | n | s | p | o | r | t | a | t | i | o | n )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var transportation_array = ["./assets/img/transportation/1.jpg", "./assets/img/transportation/2.jpg", "./assets/img/transportation/3.jpg", "./assets/img/transportation/4.jpg", "./assets/img/transportation/5.jpg", "./assets/img/transportation/6.jpg"];
var transportation_captions = ["Mactan Airport", "Jeepney", "Jeepney", "Busy street featuring different modes of transportation", "Common tricycle", "Van rentals"];
var len = transportation_array.length;
setInterval(runit_transportation, 1800);
var x=1;
function runit_transportation() {
    document.getElementById("slideshow_transportation").src=transportation_array[x];
    document.getElementById("caption_transportation").innerHTML=transportation_captions[x];
    x++;
    if(x == len) { x=0; }
}

/* 
   _   _   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ / \ / \ 
 ( r | e | l | i | g | i | o | u | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/
*/
var religious_landmarks_array = ["./assets/img/religiouslandmarks/1.jpg", "./assets/img/religiouslandmarks/2.jpg", "./assets/img/religiouslandmarks/3.jpg", "./assets/img/religiouslandmarks/4.jpg", "./assets/img/religiouslandmarks/5.jpg"];
var religious_landmarks_captions = ["Magellan's Cross", "Basilica Minore del Santo Niño", "Interior of Santo Niño Basilica", "Simala Shrine in Simbonga", "Cebu Taoist Temple"];
var len = religious_landmarks_array.length;
setInterval(runit_religion, 2000);
var x=1;
function runit_religion() {
    document.getElementById("slideshow_religouslandmarks").src=religious_landmarks_array[x];
    document.getElementById("caption_religiouslandmarks").innerHTML=religious_landmarks_captions[x];
    x++;
    if(x == len) { x=0; }
}

/*
   _   _   _   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ 
 ( h | i | s | t | o | r | i | c | a | l )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/
*/
var historical_landmarks_array = ["./assets/img/historicallandmarks/1.jpg", "./assets/img/historicallandmarks/2.jpg", "./assets/img/historicallandmarks/3.jpg", "./assets/img/historicallandmarks/4.jpg"];
var historical_landmarks_captions = ["Lapu-Lapu Shrine", "Fort San Pedro", "Cebu Heritage Monument", "Temple of Leah"];
var len = historical_landmarks_array.length;
setInterval(runit_historical, 1900);
var x=1;
function runit_historical() {
    document.getElementById("slideshow_historicallandmarks").src=historical_landmarks_array[x];
    document.getElementById("caption_historicallandmarks").innerHTML=historical_landmarks_captions[x];
    x++;
    if(x == len) { x=0; }
}

/* 
   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ 
 ( s | c | e | n | i | c )
  \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var scenic_array = ["./assets/img/scenic/1.jpg", "./assets/img/scenic/2.jpg", "./assets/img/scenic/3.jpg", "./assets/img/scenic/4.jpg", "./assets/img/scenic/5.jpg", "./assets/img/scenic/6.jpg"];
var scenic_captions = ["TOPS Lookout", "TOPS Lookout View", "Aerial view of TOPS Lookout", "Aerical view of TOPS lookout", "Mountain View Lookout", "Mountain View Lookout Venue"];
var len = scenic_array.length;
setInterval(runit_scenic, 2100);
var x=1;
function runit_scenic() {
    document.getElementById("slideshow_scenic").src= scenic_array[x];
    document.getElementById("caption_scenic").innerHTML=scenic_captions[x];
    x++;
    if(x == len) { x=0; }
}


/* 
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( n | a | t | u | r | a | l )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var natural_array = ["./assets/img/naturalwonders/1.jpg", "./assets/img/naturalwonders/2.jpg", "./assets/img/naturalwonders/3.jpg", "./assets/img/naturalwonders/4.jpg", "./assets/img/naturalwonders/5.jpg", "./assets/img/naturalwonders/6.jpg", "./assets/img/naturalwonders/7.jpg", "./assets/img/naturalwonders/8.jpg"];
var natural_captions = ["Samboan Canyoneering Spring Pool", "Samboan Canyoneering Spring Pool and Waterfall", "Jumalon Butterfly Sanctuary", "Oslob Whale Shark Watching", "Oslob Whale Shark Watching", "Terrazas de Flores Botanical Garden", "Terrazas de Flores Botanical Garde", "Siarao Flower Garden"];
var len = natural_array.length;
setInterval(runit_natural, 1700);
var x=1;
function runit_natural() {
    document.getElementById("slideshow_natural").src= natural_array[x];
    document.getElementById("caption_natural").innerHTML=natural_captions[x];
    x++;
    if(x == len) {  x=0; }
}

/* 
   _   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ / \ 
 ( s | h | o | p | p | i | n | g )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var shopping_array = ["./assets/img/shopping/1.jpg", "./assets/img/shopping/2.jpg", "./assets/img/shopping/3.jpg", "./assets/img/shopping/4.jpg", "./assets/img/shopping/5.jpg", "./assets/img/shopping/6.jpg"];
var shopping_captions = ["IT Park Buildings", "IT Park at night", "IT Park entrance", "Ayala Shopping Center", "Ayala Shopping Center interior", "SM Seaside Mega Mall"];
var len = shopping_array.length;
setInterval(runit_shopping, 1800);
var x=1;
function runit_shopping() {
    document.getElementById("slideshow_shopping").src= shopping_array[x];
    document.getElementById("caption_shopping").innerHTML=shopping_captions[x];
    if(x == len) { x=0; }
}