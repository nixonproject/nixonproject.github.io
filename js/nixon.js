//global tracking variable
var current = 0;

var tracking_array = [];


//arrow building functions
function arrow_down(){
    var div = document.createElement('div');
    div.className = 'arrow_down';
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.height = '5%';
    div.style.bottom = '0%';
    div.style.left = '45%';
    div.style.width = '10%';
    div.style.cursor = 'pointer';
    div.addEventListener("click", down_click);
    
    return div;
}  

function arrow_up(){
    var div = document.createElement('div');
    div.className = 'arrow_up';
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.height = '5%';
    div.style.top = '0%';
    div.style.left = '45%';
    div.style.width = '10%';    
    div.style.cursor = 'pointer';
    div.addEventListener("click", up_click);
    
    return div;
}  
 
function arrow_right(){
    var div = document.createElement('div');
    div.className = 'arrow_right';
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.height = '20%';
    div.style.top = '40%';
    div.style.right = '0%';
    div.style.width = '2.5%';
    div.style.cursor = 'pointer';
    div.addEventListener("click", right_click);
    
    return div;
}   
 
function arrow_left(){
    var div = document.createElement('div');
    div.className = 'arrow_left';
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.height = '20%';
    div.style.top = '40%';
    div.style.left = '0%';
    div.style.width = '2.5%';
    div.style.cursor = 'pointer';
    div.addEventListener("click", left_click);
    
    return div;
}    


$(document).ready(function(){
    var row_one = document.getElementsByClassName("row_one");
    var row_two = document.getElementsByClassName("row_two");
    var row_three = document.getElementsByClassName("row_three");
    var column_one = document.getElementsByClassName("column_one");
    var column_two = document.getElementsByClassName("column_two");
    var column_three = document.getElementsByClassName("column_three");
    
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

    console.log(tracking_array);
    
});

//arrow control functions
function up_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height()
    });
}
function down_click(){    
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height()
    });
}
function left_click(){    
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });
}
function right_click(){    
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });
}