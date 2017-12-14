var kiss_frames = ['https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=146075729&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=28755528&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=816266250&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=813518504&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=19139104&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1745481952&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1324653417&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=2062818082&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1773733468&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1260814044&amp;format=interactive'
                   ];                    
var haig_frames = ['https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1052301390&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1098732626&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1608809438&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1108215279&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=143976551&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1478885340&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=827049080&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=531153387&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=510385104&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1493690644&amp;format=interactive'
                   ];
var hald_frames = ['https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=162175844&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=559653695&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=331782250&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=649724277&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=2106216329&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1563496914&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1836002192&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1829891183&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=1650799641&amp;format=interactive',
                   'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVuGBrQdKPqIgPycPQDajZPaWMYtjdARgegCXNSAoMBlrTACwhFXb8MdqHKPO0V3uuuwYh-y6Ud101/pubchart?oid=301794778&amp;format=interactive'
                   ];
var frame_names = [
    'October Agreement Settlement with South Vietnam',
    "Kissinger's Negotiations with Thieu",
    'Strategy in Larger Cold War Context',
    "Reaction to Thieu's Rejection of the Agreement",
    'Appeasing on Agreements with Thieu',
    'Re-election and Vietnam',
    "Contending with Kissinger's Thoughts on Peace Settlement",
    "Planning Negotiations with North",
    "Struggles in Reaching Agreement with North and South",
    'Public Relations and Perception'
];
function load_chart(x, el){
    $('.topic_name').css("color", "white");
    $('.topic_name').css("background", "#2980b9");
    el.style.color = '#2980b9';
    el.style.background = 'white';
    $('.topic_frames').fadeOut(function(){
        var frame_1 = document.getElementById('frame_1');
        var topic = document.getElementById('six_topic');
        topic.innerHTML = frame_names[x-1];           
        frame_1.setAttribute("src",kiss_frames[x-1]);
        var frame_2 = document.getElementById('frame_2');
        frame_2.setAttribute("src",haig_frames[x-1]);
        var frame_3 = document.getElementById('frame_3');
        frame_3.setAttribute("src",hald_frames[x-1]);        
    });
    setTimeout(function() {
        $('#six_topic').fadeIn();
        $('.topic_frames').fadeIn();    
    }, 500);
}