// link externo
$(document).ready(function(){
    $("a[rel=external]").attr('target','_blank');
});

// desabilitar skype
jQuery(document).ready(function(){
    jQuery('head').append('<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />')
});


// Link box-pdr
$(document).ready(function(){
    $(".slides, .artigo, .video").click(function(){
        window.location=$(this).find("a").attr("href");return false;
    });
});

// fade label
$(function(){ $("#placehold").inFieldLabels(); });

// slide home
$(function(){
    // Set starting slide to 1
    var startSlide = 1;
    // Get slide number if it exists
    if (window.location.hash) {
        startSlide = window.location.hash.replace('#','');
    }
    // Initialize Slides
    $('#slide-home').slides({
        preload: true,
        preloadImage: 'img/loading.gif',
        generatePagination: false,
        generateNextPrev: true,
        control: true,
        play: 8000,
        pause: 2500,
        hoverPause: true,
        start: startSlide,
        effect: 'slide'
    });
});

// voltar ao topo
$('.bt-voltar').click(function () {
     $('html, body').animate({
         scrollTop: '0px'
     },
     1000);
     return false;
 });