$(document).foundation();
//
//$('a').click (function() {
//    alert("a link was clicked");
//});
//

//import $ from 'jquery';

window.$ = $;
window.jQuery = $;



$(document).ready(function() {

    
//$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
//    // Inital state small -> medium 
//    console.log(newSize); // should return medium
//    
//    if (Foundation.MediaQuery.atLeast('large')) {
//      // True if large
//      // False if medium or small
//        $('.close-this').click (function() {
//            $('.main-col').css({"padding-right":"0"});
//            $('footer').css({"padding-right":"0"});
//        });
//
//    $('.open-this').click (function() {
//            $('.main-col').css({"padding-right":"250px"});
//            $('footer').css({"padding-right":"250px"});
//
//        });
//
//    }
//
//
//
//});//end of watch

 
//$('.close-this').click (function() {
//        $(this).css({"opacity":"0"});
//        $('.side-nav').css({"right":"-250px"});
//
//
//    });
//$('.open-this').click (function() {
//        $('.close-this').css({"opacity":"1"});
//        $('.side-nav').css({"right":"0"});
//
//    });    
    
if (Foundation.MediaQuery.atLeast('large')) {
  // True if large
  // False if medium or small
    $('.close-this').click (function() {
        $('.main-col').css({"padding-right":"0"});
        $('footer').css({"padding-right":"0"});
    });
    
$('.open-this').click (function() {

        $('.main-col').css({"padding-right":"250px"});
        $('footer').css({"padding-right":"250px"});

    });
    
}


//}

//Scroll to Cassandra Tile
$(function() { $(".cass").click(function() {
    var position = $(".cassandra").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll to Knewton Tile
$(function() { $(".knew").click(function() {
    var position = $(".knewton").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll to General Assembly Tile
$(function() { $(".gene").click(function() {
    var position = $(".ga").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll to Spring Tile
$(function() { $(".spri").click(function() {
    var position = $(".spring").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

//Scroll to Outbrain Tile
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
        $('.side-nav').css('margin-top','-15px');
    } else{
        $(".header").removeClass("min");
        $('.close-this').removeClass('min');
        $('.open-this').removeClass("min");
        $(".hello-here").css("display","inline-block");
        $('.side-nav').css('margin-top','50px');
    }

});


//Open Modal via JS
$(".contactMe").click (function(){
    $('#contactModal').foundation('open');
});
    


});
//Close doc.ready
