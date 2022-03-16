/*
   _   _   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ / \ / \ 
 ( l | a | n | d | m | a | r | k | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var landmarks_array = ["./assets/img/landmarks/1.jpg", "./assets/img/landmarks/2.jpg", "./assets/img/landmarks/3.jpg", "./assets/img/landmarks/4.jpg"];
var landmarks_captions = ["Osmeña Peak", "Kawasan Falls", "Mantayupan Falls", "Mantayupan Falls"];
var len_landmarks = landmarks_array.length;
setInterval(runit_landmarks, 2000);
var x_landmarks=1;
function runit_landmarks() {
    document.getElementById("slideshow_landmarks").src=landmarks_array[x_landmarks];
    document.getElementById("caption_landmarks").innerHTML=landmarks_captions[x_landmarks];
    x_landmarks++;
    if(x_landmarks == len_landmarks) { x_landmarks=0; }
}

/*
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( a | n | i | m | a | l | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var animals_array = ["./assets/img/animals/1.jpg", "./assets/img/animals/2.jpg", "./assets/img/animals/3.jpg", "./assets/img/animals/4.jpg", "./assets/img/animals/5.jpg", "./assets/img/animals/6.jpg"];
var animals_captions = ["Black Shama", "Uling Gobi", "Cebu Hawk Owl", "Cebu Small Worm Skink", "Kawasan Paper Kite Butterfly", "Cebu Flowerpecker"];
var len_animals = animals_array.length;
setInterval(runit_animals, 1900);
var x_animals=1;
function runit_animals() {
    document.getElementById("slideshow_animals").src=animals_array[x_animals];
    document.getElementById("caption_animals").innerHTML=animals_captions[x_animals];
    x_animals++;
    if(x_animals == len_animals) { x_animals=0; }
}


/*
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( f | l | o | w | e | r | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var flowers_array = ["./assets/img/flowers/1.jpg", "./assets/img/flowers/2.jpg", "./assets/img/flowers/3.jpg", "./assets/img/flowers/4.jpg", "./assets/img/flowers/5.jpg", "./assets/img/flowers/6.jpg"];
var flowers_captions = ["Sampaguita", "Ylang-Ylang", "Plumara", "Hanging Lobster Claw", "Bougainvillea", "Santans"];
var len_flowers = flowers_array.length;
setInterval(runit_flowers, 2100);
var x_flowers=1;
function runit_flowers() {
    document.getElementById("slideshow_flowers").src=flowers_array[x_flowers];
    document.getElementById("caption_flowers").innerHTML=flowers_captions[x_flowers];
    x_flowers++;
    if(x_flowers == len_flowers) { x_flowers=0; }
}