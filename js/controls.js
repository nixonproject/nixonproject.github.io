var notscrolled = true;
var current_sublink = '';
var moved = false;

function load(id){
    if (id == 'projects'){
        $(".left").fadeIn(1000);
        $(".middle").fadeIn(2000);
        $(".right").fadeIn(3000);
    }
}             

function send(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var check = re.test($('#email').val());
    
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    if (name != ''){
        if (check){
            if (message != ''){
                $.post("message.php", {
                    name:name,
                    email:email,
                    message:message
                }).done(function(data){
                    alert(data);
                $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                }); 
                               
            }  
            else{
                alert('Please write something in the message field');
                $('#message').focus();
            }
        } 
        else{
            alert('Please enter a valid email address');
            $('#email').focus();
        }
    }
    else{
        alert('Please fill out the name field');
        $('#name').focus();
    }

}
function subpage(e){         
    $("#intro").blur();
    if (notscrolled){
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + $( window ).height()
        });
        notscrolled = false;
        var id = "#" + e.target.id + "div";
        $(id).css("display","block");
        current_sublink = e.target.id;
        load(current_sublink);
    }
    else if (e.target.className == "menu" && e.target.id != current_sublink){
        current_sublink = "#" + current_sublink + "div";
        $(current_sublink).fadeOut(400);
        var id = "#" + e.target.id + "div";
        $(id).fadeIn(400);  
        current_sublink = e.target.id;   
        load(current_sublink);
    }
    if (e.target.id == "contact"){
        $("input[name='name']").focus();                
    }
    else{
        $("input[name='name']").blur();                     
    }
    $("#results").css("display","none");
    $("#searcher p").css("display","none");
}
function go_up(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - $( window ).height()
    });
    current_sublink = "#" + current_sublink + "div";
    $(current_sublink).fadeOut(400);            
    $("#intro").focus();
    $(".left").css("display","none");
    $(".middle").css("display","none");
    $(".right").css("display","none");
    $("#intro").attr("placeholder","What do you want to find out about Campbell?");
    $("#everythingbut").css("display", "");
    $("#homelog").css({"position":"","left": "","width": ""});
    $("#logo").css({"top": "", "left" : ""});
    $("#intro").css({"top": "", "height": "", "left": "", "width": ""});
    $("#intro").val('');
    notscrolled = true;
}

function hinter(){
    console.log('poop');
    $("#searcher p").append("Try these commands: </br><i>skills</i></br><i>experience</i></br><i>education</i>");
}
$(document).ready(function(){
    $("#lucky").click(function(){
        $("#hack").css("display","block");
        $("#hack span").typed({
            strings: ["This machine has been attacked by a malicious virus<br/>Attempting destroy virus<br/>Wiping internet history...<br/>Resetting iTunes...<br/>Erasing hard drive...<br/>Destroying machine in 3...2...1..."],
            contentType: 'html',
            typeSpeed: 1,
            backSpeed: -10,
            showCursor: false,
            callback: function (){$("#crazy").css("display","block");}
        });
    });
    $("#crazy").click(function(){
        $("#crazy").css("display","none");
        $("#hack").css("display","none");
    });
    $("body").restive({
        breakpoints:['10000'],
        classes: ['nb'],
        turbo_classes: 'is_mobile=r_mobi,is_phone=r_phone,is_tablet=r_tablet,is_landscape=r_landscape',
        force_dip: true
    });
    $("#intro").typed({
        strings: ["Hi. I'm Campbell Yamane","I am a third year Cognitive Science major at UCLA",""],
        typeSpeed: 1,
        backSpeed: -10,
        showCursor: false,
        callback: function (){
                            $("#over").remove();
                            $("#intro").attr("placeholder","What do you want to find out about Campbell?");
                   
         }
    });
});
var pre = '';
var post = '';
var h1 = '';
var before = -11;
var beforevert = "#nada";
var select = '';
$(document).ready(function(){                
    $('.kwicks-horizontal').kwicks({
        maxSize : "34%",
        spacing: 0,
        behavior: 'menu'
    });
    $(".kwicks-horizontal").on('expand.kwicks', function(e, data) {
        var element = data['index'];
        console.log(data);
        if (element != before && element >= 0){
            console.log(element);
            pre = "#" + element + " .pre";
            post = "#" + element + " .post";
            bpre = "#" + before + " .pre";
            bpost = "#" + before + " .post";
            $(pre).fadeIn();
            $(post).fadeOut();
            $(bpre).fadeOut();
            $(bpost).fadeIn();
            before = element;
        }
        else{
            $(pre).fadeOut();
            $(post).fadeIn();   
            before = -11;
        }
    });
    $('.kwicks-vertical').kwicks({
        maxSize : "75%",
        behavior: 'menu',
        spacing: 0,
        isVertical: true
    });
    $(".kwicks-vertical").on('expand.kwicks', function(e, data) {
        var element = data['index'];
        console.log(data);
        if (select != before && element >= 0){
            var bselect = beforevert;
            console.log(bselect);
            var id = data['expanded']['id'];
            id = "#" + id;
            select = id + " .content";
            $(select).fadeIn();
            $(bselect).fadeOut();
            beforevert = select;                        
        }
        else{
            $(select).fadeOut();
            beforevert = '#nada';
        }
    });    
    $('.kwicks').on('mouseleave', function() {
        $(this).kwicks('expand', -1);
    }).children().on('mouseover', function() {
        $(this).kwicks('expand');
    })                
    $("#hints").click(function(){
        if ($("#commands").css("display") == "none"){
            $("#commands").fadeIn(800);
        }
        else{
            $("#commands").fadeOut(800);                    
        }
    });
    $("#intro").keydown(function(e){
        $("#results").css("display","none");
        $("#searcher p").remove();
        if (e.keyCode == 13 && $("#intro").val() != ''){
            var start = new Date().getTime();
            var message = 'No results found for <i>' +$("#intro").val()+ '</i>. Try one of the suggested <span id="click" onclick="hinter()">search terms</span>.<br/><br/>';
            $("#everythingbut").css("display", "none");
            $("#homelog").css({"position":"absolute","left": "0vw","width": "15vw"});
            $("#logo").css({"top": "1vh", "left" : "1vw"});
            $("#intro").css({"top": "2vh", "height": "1.8em", "left": "17vw", "width": "30vw"});
            $("#intro").attr('placeholder' , "");
            if ($("#intro").val() == 'skills'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:30vw;"><tr><th style="font-weight:normal;text-align:left;"><i>Languages</i></th><th style="font-weight:normal;text-align:left;"><i>Software</i></th></tr>';
                text += '<tr><td><ul><li>C++</li><li>Python</li><li>HTML</li><li>CSS</li><li>PHP</li><li>SQL</li><li>Javascript</li><li>jQuery</li></ul></td>';
                text += '<td><ul><li>Microsoft Word</li><li>Microsoft Excel</li><li>Microsoft PowerPoint</li><li>Microsoft Outlook</li><li>Adobe After Effects</li><li>Adobe Photoshop</li><li>Adobe Lightroom</li><li>Adobe Premiere Pro</li></tr></table>';
                $(results).html('<h1>skills</h1><h2> &nbsp /sk&#618;lz/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;
                end /= 1000;
                message = 'About 1 result (' +end+ ' seconds)';
            }
            else if ($("#intro").val() == 'education'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:30vw;"><tr><td><span class="bold">UCLA</span>, Los Angeles, California</td></tr><tr><td>Bachelor of Science, Expected Graduation June 2018</td></tr><tr><td>&nbsp</td></tr>';
                text += '<tr><td><span class="bold">Major</span> : Cognitive Science (Specialization in Computing)</td></tr><tr><td><span class="bold">Minor</span> : Digital Humanities</td></tr>';
                text += '<tr><td>&nbsp</td></tr><tr><td><span class="bold">GPA</span> : 3.4</td></tr><tr><td>&nbsp</td></tr>';
                text += '<tr><td><span class="bold">Relevant Coursework</span> : PIC 10A (Introduction to C++), PIC 40A (Programming for the Internet), PSYCH 20 (MATLAB Programming), and COMM 155 (Artificial Intelligence and New Media)</td></tr></table>';
                $(results).html('<h1>education</h1><h2> &nbsp /&#716;ed&#658;u&#712;ke&#618;&#643;n/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;  
                end /= 1000;              
                message = 'About 1 result (' +end+ ' seconds)';
            }
            else if ($("#intro").val() == 'experience'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:35vw;"><tr><th style="text-align:left;"><u>USC Shoah Foundation</u>, Undergraduate Research Assistant (2017 - Present):</th></tr>';
                text += '<tr><td><ul><li>Analyzed over 50,000 testimonies in SQL databases for patterns in said testimonial data</li><li>Paired mp3 decibel analysis with corresponding testimonial keywords to create ad-hoc emotional-intonation algorithm</li><li>Created Python script that identified and exported ranges of silence in testimonies</li></ul></td></tr><tr><td> &nbsp </td></tr>';
                text += '<tr><th style="text-align:left;"><u>Holyfield</u>, Author, Editor, Podcast Host (2016 - Present):</th></tr>';
                text += '<tr><td><ul><li>Acquired from self-started basketball website Naismith Nation</li><li>Contributed multiple engaging editorials based on data pattern analysis and extrapolation</li><li>Quickly promoted to editor due to detail-oriented authorship and keen eye</li><li>Created short video animations for social media promotion</li><li>Led analytical discussions on <i>Students of the Game</i> podcast, with topics ranging from sports to politics</li></ul></td></tr><tr><td> &nbsp </td></tr>';
                text += '<tr><th style="text-align:left;"><u>Marin Benefits/Direct Dental</u>, Data Specialist (2014 - Present):</th></tr>';
                text += "<td><ul><li>Streamlined the firm's operation process by implementing and managing an electronic data interchange for client and employee information, cutting processing time in half</li><li>Updated protocols for quarterly data analysis</li><li>Created new company graphics through Adobe Photoshop</li></ul></td></tr></table>";                                      
                $(results).html('<h1>experience</h1><h2> &nbsp /&#618;k&#712;sp&#618;&#601;ri&#601;ns/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;  
                end /= 1000;              
                message = 'About 1 result (' +end+ ' seconds)';
            }
            var p = document.createElement("p");            
            $(p).html(message);
            $(p).css({"position": "absolute", "top": "10vh", "left": "18vw"});
            document.getElementById("searcher").appendChild(p);
        }
    });
    $("#search").click(function(){
        if ($("#intro").val() != ''){
            var start = new Date().getTime();
            var message = 'No results found for <i>' +$("#intro").val()+ '</i>. Try one of the suggested <span id="click" onclick="hinter()">search terms</span>.<br/><br/>';
            $("#everythingbut").css("display", "none");
            $("#homelog").css({"position":"absolute","left": "0vw","width": "15vw"});
            $("#logo").css({"top": "1vh", "left" : "1vw"});
            $("#intro").css({"top": "2vh", "height": "1.8em", "left": "17vw", "width": "30vw"});
            $("#intro").attr('placeholder' , "");
            if ($("#intro").val() == 'skills'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:30vw;"><tr><th style="font-weight:normal;text-align:left;"><i>Languages</i></th><th style="font-weight:normal;text-align:left;"><i>Software</i></th></tr>';
                text += '<tr><td><ul><li>C++</li><li>Python</li><li>HTML</li><li>CSS</li><li>PHP</li><li>SQL</li><li>Javascript</li><li>jQuery</li></ul></td>';
                text += '<td><ul><li>Microsoft Word</li><li>Microsoft Excel</li><li>Microsoft PowerPoint</li><li>Microsoft Outlook</li><li>Adobe After Effects</li><li>Adobe Photoshop</li><li>Adobe Lightroom</li><li>Adobe Premiere Pro</li></tr></table>';
                $(results).html('<h1>skills</h1><h2> &nbsp /sk&#618;lz/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;
                end /= 1000;
                message = 'About 1 result (' +end+ ' seconds)';
            }
            else if ($("#intro").val() == 'education'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:30vw;"><tr><td><span class="bold">UCLA</span>, Los Angeles, California</td></tr><tr><td>Bachelor of Science, Expected Graduation June 2018</td></tr><tr><td>&nbsp</td></tr>';
                text += '<tr><td><span class="bold">Major</span> : Cognitive Science (Specialization in Computing)</td></tr><tr><td><span class="bold">Minor</span> : Digital Humanities</td></tr>';
                text += '<tr><td>&nbsp</td></tr><tr><td><span class="bold">GPA</span> : 3.4</td></tr><tr><td>&nbsp</td></tr>';
                text += '<tr><td><span class="bold">Relevant Coursework</span> : PIC 10A (Introduction to C++), PIC 40A (Programming for the Internet), PSYCH 20 (MATLAB Programming), and COMM 155 (Artificial Intelligence and New Media)</td></tr></table>';
                $(results).html('<h1>education</h1><h2> &nbsp /&#716;ed&#658;u&#712;ke&#618;&#643;n/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;  
                end /= 1000;              
                message = 'About 1 result (' +end+ ' seconds)';
            }
            else if ($("#intro").val() == 'experience'){    
                $("#results").css("display","block");
                var results  = document.getElementById("results");
                var text = '<table style="width:35vw;"><tr><th style="text-align:left;"><u>USC Shoah Foundation</u>, Undergraduate Research Assistant (2017 - Present):</th></tr>';
                text += '<tr><td><ul><li>Analyzed over 50,000 testimonies in SQL databases for patterns in said testimonial data</li><li>Paired mp3 decibel analysis with corresponding testimonial keywords to create ad-hoc emotional-intonation algorithm</li><li>Created Python script that identified and exported ranges of silence in testimonies</li></ul></td></tr><tr><td> &nbsp </td></tr>';
                text += '<tr><th style="text-align:left;"><u>Holyfield</u>, Author, Editor, Podcast Host (2016 - Present):</th></tr>';
                text += '<tr><td><ul><li>Acquired from self-started basketball website Naismith Nation</li><li>Contributed multiple engaging editorials based on data pattern analysis and extrapolation</li><li>Quickly promoted to editor due to detail-oriented authorship and keen eye</li><li>Created short video animations for social media promotion</li><li>Led analytical discussions on <i>Students of the Game</i> podcast, with topics ranging from sports to politics</li></ul></td></tr><tr><td> &nbsp </td></tr>';
                text += '<tr><th style="text-align:left;"><u>Marin Benefits/Direct Dental</u>, Data Specialist (2014 - Present):</th></tr>';
                text += "<td><ul><li>Streamlined the firm's operation process by implementing and managing an electronic data interchange for client and employee information, cutting processing time in half</li><li>Updated protocols for quarterly data analysis</li><li>Created new company graphics through Adobe Photoshop</li></ul></td></tr></table>";                                      
                $(results).html('<h1>experience</h1><h2> &nbsp /&#618;k&#712;sp&#618;&#601;ri&#601;ns/</h2><br/>' + text);
                var end = new Date().getTime() - start + 1;  
                end /= 1000;              
                message = 'About 1 result (' +end+ ' seconds)';
            }
            var p = document.createElement("p");            
            $(p).html(message);
            $(p).css({"position": "absolute", "top": "10vh", "left": "18vw"});
            document.getElementById("searcher").appendChild(p);
        }
    });
});