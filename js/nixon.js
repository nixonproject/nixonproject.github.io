//global tracking variable
var current = 0;
var cell_names = ["Introduction","Conversation Analysis","Topic Modeling","Timeline of Events",
                  "Nixon's Inner Circle","Conversation Influences", "The Bombings",
                  "Data Critique","Conclusion"];
var cell_id = ['one','two','three','four','five','six','seven','eight','nine'];


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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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
    img.style.opacity = '0.5';
    img.style.zIndex = '10';

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

    $("img").on("mouseleave", function(e){
        $('#temp').fadeTo(200, 0.5);
        $('#temp').attr("id", "");
        $('.arrow_name').fadeOut(200, function(e){
                $('.arrow_name').remove();
            }
        );
    });

    $('.clipping').mouseenter(function() {
        $(this).animate({width: "+=200px", height: "+=200px", top: "-=100px", left: "-=100px"}, 'slow');
    });

    $('.clipping').mouseleave(function() {
      $(this).animate({width: "-=200px", height: "-=200px", top: "+=100px", left: "+=100px"}, 'slow');
    });

    $("img").on("mouseenter", function(e){
        var p = document.createElement('p');
        var s = document.createElement('span');
        s.className = 'span';
        s.style.background = 'black';
        p.className = 'arrow_name';
        p.style.display = 'none';
        p.style.position = 'absolute';
        p.style.width = '93vw';
        p.style.zIndex = '800';
        p.style.color = '#d3d3d3';
        p.style.fontFamily = 'Courier';
        switch(e.target.className) {
            case 'arrow_down':
                var t = document.createTextNode(cell_names[current+3]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '0%';
                p.style.textAlign = 'center';
                p.style.bottom = '8%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_up':
                var t = document.createTextNode(cell_names[current-3]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '0%';
                p.style.textAlign = 'center';
                p.style.top = '8%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_left':
                var t = document.createTextNode(cell_names[current-1]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '4%';
                p.style.textAlign = 'left';
                p.style.bottom = '54%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_right':
                var t = document.createTextNode(cell_names[current+1]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '4%';
                p.style.textAlign = 'right';
                p.style.bottom = '54%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_down_right':
                var t = document.createTextNode(cell_names[current+4]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '4%';
                p.style.textAlign = 'right';
                p.style.bottom = '3%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_down_left':
                var t = document.createTextNode(cell_names[current+2]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '3%';
                p.style.textAlign = 'left';
                p.style.bottom = '3%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_up_right':
                var t = document.createTextNode(cell_names[current-2]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '3%';
                p.style.textAlign = 'right';
                p.style.top = '3%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
            case 'arrow_up_left':
                var t = document.createTextNode(cell_names[current-4]);
                s.appendChild(t);
                $(this).attr("id", "temp");
                p.style.left = '3%';
                p.style.textAlign = 'left';
                p.style.top = '3%';
                p.appendChild(s);
                document.getElementById(cell_id[current]).appendChild(p);
                $('.arrow_name').fadeIn(200);
                $(this).fadeTo(200, 1);
                break;
        }
    });

});

//arrow control functions
function up_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height()
    });

    current -= 3;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function down_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height()
    });

    current += 3;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function left_click(){
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });

    current -= 1;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function right_click(){
    $('html,body').animate({
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });

    current += 1;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function down_left_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height(),
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });

    current += 2;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function down_right_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + $( window ).height(),
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });

    current += 4;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function up_left_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height(),
        scrollLeft: $(window).scrollLeft() - $( window ).width()
    });

    current -= 4;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}
function up_right_click(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height(),
        scrollLeft: $(window).scrollLeft() + $( window ).width()
    });

    current -= 2;

    audio_check(current);
    localStorage.setItem("current_cell", current);

}

function audio_check(x){
    if (x == 3){
        //nothing for now
    }
    else if (x == 1){
        drawWordCloud(1);
    }
    else if (x == 5){
        $('.topic_name').css("color", "white");
        $('.topic_name').css("background", "#2980b9");
        $('.topic_name').first().css("color", "#2980b9");
        $('.topic_name').first().css("background", "white");
        var frame_1 = document.getElementById('frame_1');
        frame_1.setAttribute("src",kiss_frames[0]);
        var frame_2 = document.getElementById('frame_2');
        frame_2.setAttribute("src",haig_frames[0]);
        var frame_3 = document.getElementById('frame_3');
        frame_3.setAttribute("src",hald_frames[0]);
        var topic = document.getElementById('six_topic');
        topic.innerHTML = frame_names[x-1];
    }
    else if (x == 6){
        var frame = document.getElementById('bombings');
        frame.setAttribute("src","https://www.arcgis.com/apps/MapSeries/index.html?appid=6290e3f7d25d429aaa58838947f65883");
    }
    else{
        var tag = document.getElementById('audio');
        tag.setAttribute("src","");
        var frame = document.getElementById('bombings');
        frame.setAttribute("src","");
        $("#timeline").animate({ scrollTop: 0}, 600);
        timeline_pos = 0;
        current_height = 0;
        load(lon[0],lat[0]);
    }
}
