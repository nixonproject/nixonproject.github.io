//global tracking variable
var current = 1;


//arrow building functions
function arrow_down(){
    var img = document.createElement('img');
    img.className = 'arrow_down';
    img.style.position = 'absolute';
    img.style.bottom = '0%';
    img.style.left = '45%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/down.png';
    img.addEventListener("click", down_click);

    
    return img;
}  

function arrow_up(){
    var img = document.createElement('img');
    img.className = 'arrow_up';
    img.style.position = 'absolute';
    img.style.top = '0%';
    img.style.left = '45%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/up.png';
    img.addEventListener("click", up_click);
    
    return img;
}  
 
function arrow_right(){
    var img = document.createElement('img');
    img.className = 'arrow_right';
    img.style.position = 'absolute';
    img.style.top = '40%';
    img.style.right = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/right.png';
    img.addEventListener("click", right_click);
    
    return img;
}   
 
function arrow_left(){
    var img = document.createElement('img');
    img.className = 'arrow_left';
    img.style.position = 'absolute';
    img.style.top = '40%';
    img.style.left = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/left.png';
    img.addEventListener("click", left_click);
    
    return img;
}    
function arrow_down_left(){
    var img = document.createElement('img');
    img.className = 'arrow_down_left';
    img.style.position = 'absolute';
    img.style.bottom = '0%';
    img.style.left = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/down_left.png';
    img.addEventListener("click", down_left_click);
    
    return img;
}  

function arrow_down_right(){
    var img = document.createElement('img');
    img.className = 'arrow_down_right';
    img.style.position = 'absolute';
    img.style.bottom = '0%';
    img.style.right = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/down_right.png';
    img.addEventListener("click", down_right_click);
    
    return img;
}  
 
function arrow_up_right(){
    var img = document.createElement('img');
    img.className = 'arrow_up_right';
    img.style.position = 'absolute';
    img.style.top = '0%';
    img.style.right = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/up_right.png';
    img.addEventListener("click", up_right_click);
    
    return img;
}   
 
function arrow_up_left(){
    var img = document.createElement('img');
    img.className = 'arrow_up_left';
    img.style.position = 'absolute';
    img.style.top = '0%';
    img.style.left = '0%';
    img.style.cursor = 'pointer';
    img.src = 'images/arrows/up_left.png';
    img.addEventListener("click", up_left_click);
    
    return img;
}    


$(document).ready(function(){
    var row_one = document.getElementsByClassName("row_one");
    var row_two = document.getElementsByClassName("row_two");
    var row_three = document.getElementsByClassName("row_three");
    var column_one = document.getElementsByClassName("column_one");
    var column_two = document.getElementsByClassName("column_two");
    var column_three = document.getElementsByClassName("column_three");
    
    var up_left = document.getElementsByClassName("diag_lt_top");
    var up_right = document.getElementsByClassName("diag_rt_top");
    var down_left = document.getElementsByClassName("diag_lt_bot");
    var down_right = document.getElementsByClassName("diag_rt_bot");
    
    tracking_array = document.getElementsByClassName("square");

    
    //row arrows
    for (var i = 0; i < row_one.length; i++) {
        row_one[i].appendChild(arrow_down());
    }    
    for (var i = 0; i < row_two.length; i++) {
        row_two[i].appendChild(arrow_down());
        row_two[i].appendChild(arrow_up());
    }      
    for (var i = 0; i < row_three.length; i++) {
        row_three[i].appendChild(arrow_up());
    } 
    
    //column arrows
    for (var i = 0; i < column_one.length; i++) {
        column_one[i].appendChild(arrow_right());
    }   
    for (var i = 0; i < column_two.length; i++) {
        column_two[i].appendChild(arrow_right());
        column_two[i].appendChild(arrow_left());
    }   
    for (var i = 0; i < column_three.length; i++) {
        column_three[i].appendChild(arrow_left());
    }  
    
    //diag arrows
    for (var i = 0; i < up_left.length; i++) {
        up_left[i].appendChild(arrow_up_left());
    }   
    for (var i = 0; i < up_right.length; i++) {
        up_right[i].appendChild(arrow_up_right());
    }   
    for (var i = 0; i < down_left.length; i++) {
        down_left[i].appendChild(arrow_down_left());
    }  
    for (var i = 0; i < down_right.length; i++) {
        down_right[i].appendChild(arrow_down_right());
    }  
    

    console.log(tracking_array);
    
});

//arrow control functions
function up_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height()
    });
    
    current -= 3;
    
    audio_check(current);
    
}
function down_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height()
    });
    
    current += 3;
    
    audio_check(current);
    
}
function left_click(){    
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });
    
    current -= 1;
    
    audio_check(current);
    
}
function right_click(){    
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });
    
    current += 1;
    
    audio_check(current);
    
}
function down_left_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height(),
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });
    
    current += 2;
    
    audio_check(current);
    
}
function down_right_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height(),
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });
    
    current += 4;
    
    audio_check(current);
    
}
function up_left_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height(),
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });
    
    current -= 4;
    
    audio_check(current);
    
}
function up_right_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height(),
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });
    
    current -= 2;
    
    audio_check(current);
    
}

function audio_check(x){
    console.log(current_height);
    if (x == 4){
        var tag = document.getElementById('audio');
        tag.setAttribute("src", '1.mp3');
        tag.load();       
    }
    else{
        var tag = document.getElementById('audio');
        tag.src = "";        
        $("#timeline").animate({ scrollTop: 0}, 600);
        timeline_pos = 0;      
        current_height = 0;        
        load(lon[0],lat[0]);
    }
}