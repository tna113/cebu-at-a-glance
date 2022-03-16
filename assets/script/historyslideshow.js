var history_array = ["./assets/img/history/1.jpg", "./assets/img/history/2.jpg"];
var history_captions = ["1521: The Battle of Mactan", "1521: The Battle of Mactan, alternate rendition"];
var len = history_array.length;
setInterval(runit_history, 2000);
var x=1;
function runit_history() {
    document.getElementById("slideshow_history").src=history_array[x];
    document.getElementById("caption_history").innerHTML=history_captions[x];
    x++;
    if(x == len) { x=0; }
}