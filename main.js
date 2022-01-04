quick_draw_data_set=["Sweater","Mug","Bucket","Book","Pencil","Rifle","FootBall","Bow","Cricket bat"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById("to_be_drawn").innerHTML = "Sketch to be drawn: " + sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function preload(){

}
function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
function draw(){
    function check_sketch(){
        timer_counter = timer_counter+1;
        document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
        console.log(timer_counter);
        if(timer_counter > 500){
            timer_counter = 0;
            timer_check = "completed";
        }
        if(timer_check == "completed" || answer_holder == "set"){
            timer_check = "";
            answer_holder = "";
            updateCanvas();
        }
    }
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}
function updateCanvas(){
    background("white");
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById("to_be_drawn").innerHTML = "Sketch to be drawn: " + sketch;
}