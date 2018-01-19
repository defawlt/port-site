//$(document).foundation();
//
//$('a').click (function() {
//    alert("a link was clicked");
//});

$(document).ready(function() {
//        testing the jquery load
//      alert("document ready occurred!");
//    $('.cass').click (function() {
//        alert("cassy cass was clicked");
//        });
//    $('.knew').click (function() {
//        alert("KNEWTON was clicked");
//        });

//Toggle the side nav

//Toggle Menu icon
$('.close-this').click (function() {
        $(this).css({"opacity":"0"});
        $('.open-this').toggle();
        $('.side-nav').css({"right":"-250px"});
        $('.main-col').css({"padding-right":"0"});
        $('.img-padding').css({"padding":"0"})
        $('footer').css({"padding-right":"0"});

    });

$('.open-this').click (function() {
        $(this).toggle();
        $('.close-this').css({"opacity":"1"});
        $('.side-nav').css({"right":"0"});
        $('.main-col').css({"padding-right":"250px"});
        $('.img-padding').css({"padding":"0 30px"})
        $('footer').css({"padding-right":"30"});

    });

//Scroll to Position on Home page
//Scroll Top of page
$('.an-logo').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//Scroll Cassandra Tile
$(function() { $(".cass").click(function() {
    var position = $(".cassandra").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll Knewton Tile
$(function() { $(".knew").click(function() {
    var position = $(".knewton").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll General Assembly Tile
$(function() { $(".gene").click(function() {
    var position = $(".ga").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll Spring Tile
$(function() { $(".spri").click(function() {
    var position = $(".spring").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll Outbrain Tile
$(function() { $(".outb").click(function() {
    var position = $(".outbrain").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});



//Minimize header on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 30) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("min");
        $('.close-this').addClass('min');
        $('.open-this').addClass("min");
        $(".hello-here").css("display","none");
    } else{
        $(".header").removeClass("min");
        $('.close-this').removeClass('min');
        $('.open-this').removeClass("min");
        $(".hello-here").css("display","inline-block");
    }

});





});
//Close doc.ready
