function close(){
    $('.info_alert').remove();
}


function alert_seven(){
    var div = document.createElement("div");
    var p = document.createElement("p");
    var b = document.createElement("br");
    var t = document.createTextNode('We have chosen to to create an automated visualization of “Operation Linebacker 1” and “Operation Linebacker 2,” as the bombings took place over a duration of time. The data we used to visualize the bombings was taken from Theater History of Operations (THOR) Data: Vietnam War, which is free and publicly available data created by the U.S. government. To visualize out data we used CARTO, a free to use map visualizing interface system.');
    p.appendChild(t);
    p.style.paddingTop = '5%';
    div.appendChild(p);
    div.appendChild(b);
    b = document.createElement("br");
    p = document.createElement("p");
    t = document.createTextNode('Operation Linebacker 1 occurred between May 9, 1972 and October 23, 1972. Our data shows that approximately 12,202 bombings strikes had taken place all throughout North Vietnam-- with high concentration of bombings occuring in densely populated areas such as Haiphong, Hanoi, Nam Dinh, Than Hoa, and Vinh.');
    p.appendChild(t);
    div.appendChild(p);
    div.appendChild(b);
    p = document.createElement("p");
    t = document.createTextNode('Also known as the “December Bombings,” Operation Linebacker 2 occurred between December 18, 1972 and December 29, 1972. Our data shows that approximately 642 bomb strikes had taken place in the upper reaches of North Vietnam-- with a concentration of bombings centered around Hanoi and Haiphong.');
    p.appendChild(t);
    div.appendChild(p);
    div.style.zIndex = '150';
    div.style.color = 'black';
    div.style.background = 'white';
    div.style.position = 'absolute';
    div.style.height = '80%';
    div.style.width = '80%';
    div.style.top = '10%';
    div.style.left = '10%';
    div.style.boxShadow = "5px 5px 5px 5px darkgray";
    div.style.borderRadius = "25px";
    
    p = document.createElement("p");
    t = document.createTextNode('X');
    p.appendChild(t);    
    p.style.position = 'absolute';
    p.style.top = '0%';
    p.style.cursor = 'pointer';
    p.style.color = 'red';
    p.style.fontSize = '10vh';
    p.style.left = '2%';
    p.onclick = close;
    div.appendChild(p);
    

    var cell = document.getElementById('seven');
    div.className = 'info_alert';
    cell.appendChild(div);
}

function alert_six(){
    var div = document.createElement("div");
    var p = document.createElement("p");
    var b = document.createElement("br");
    var t = document.createTextNode('Topic Modeling uses machine learning and natural language processing to determine topics and ideas based off of input text or data. Topics, in this case, refer to a grouping of around 20 words that are closely related. Topic modeling provides a standardized methodology to determine content of texts without the perspective of a particular historian. This was our first attempt at topic modeling. Our process included a 3-step methodology:');
    p.appendChild(t);
    p.style.paddingTop = '5%';
    div.appendChild(p);
    div.appendChild(b);
    b = document.createElement("br");
    p = document.createElement("p");
    t = document.createTextNode('1. Cleaning and formatting data');
    p.appendChild(t);
    div.appendChild(p);
    p = document.createElement("p");
    t = document.createTextNode('2. Using MALLET to produce the topic models');
    p.appendChild(t);
    div.appendChild(p);
    p = document.createElement("p");
    t = document.createTextNode('3. Creating data visualizations from the topic models');
    p.appendChild(t);
    div.appendChild(p);
    b = document.createElement("br");
    p = document.createElement("p");
    div.appendChild(b);
    t=document.createTextNode('The following graphs represent topic intensity over time comparing President Nixon to other prominent members of his administration. Each date represents a conversation two speakers have with each other. What this can tell us is how one person mentioning a topic earlier on, can influence the other persons intensity of the topic at a later date.');
    p.appendChild(t);
    div.appendChild(p);
    div.style.zIndex = '150';
    div.style.color = 'black';
    div.style.background = 'white';
    div.style.position = 'absolute';
    div.style.height = '80%';
    div.style.width = '80%';
    div.style.top = '10%';
    div.style.left = '10%';
    div.style.boxShadow = "5px 5px 5px 5px darkgray";
    div.style.borderRadius = "25px";
    
    p = document.createElement("p");
    t = document.createTextNode('X');
    p.appendChild(t);    
    p.style.position = 'absolute';
    p.style.top = '0%';
    p.style.cursor = 'pointer';
    p.style.color = 'red';
    p.style.fontSize = '10vh';
    p.style.left = '2%';
    p.onclick = close;
    div.appendChild(p);
    

    var cell = document.getElementById('six');
    div.className = 'info_alert';
    cell.appendChild(div);    
}

function alert_three(){
    var div = document.createElement("div");
    var p = document.createElement("p");
    var t = document.createTextNode('One of the humanities questions that the Nixon Tapes team posed was how President Nixon’s administration, specifically Henry Kissinger, influenced his actions and decisions during the December bombings. To answer this question, we found it necessary to examine the topics that each individual was involved in and analyze how their conversations correlated with each topic over time. To accomplish this, we chose to use topic modeling.');
    p.appendChild(t);
    p.style.paddingTop = '5%';
    div.appendChild(p);
    div.style.zIndex = '150';
    div.style.color = 'black';
    div.style.background = 'white';
    div.style.position = 'absolute';
    div.style.height = '80%';
    div.style.width = '80%';
    div.style.top = '10%';
    div.style.left = '10%';
    div.style.boxShadow = "5px 5px 5px 5px darkgray";
    div.style.borderRadius = "25px";
    
    p = document.createElement("p");
    t = document.createTextNode('X');
    p.appendChild(t);    
    p.style.position = 'absolute';
    p.style.top = '0%';
    p.style.cursor = 'pointer';
    p.style.color = 'red';
    p.style.fontSize = '10vh';
    p.style.left = '2%';
    p.onclick = close;
    div.appendChild(p);
    

    var cell = document.getElementById('three');
    div.className = 'info_alert';
    cell.appendChild(div);  
}