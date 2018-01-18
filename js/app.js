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
    $('.knew').click (function() {
        alert("KNEWTON was clicked");
        });

//Toggle the side nav

//Toggle Menu icon
$('.close-this').click (function() {
        $(this).toggle();
        $('.open-this').toggle();
    });

$('.open-this').click (function() {
        $(this).toggle();
        $('.close-this').toggle();
    });

//Scroll to Position on Home page
//Top of page
$('.an-logo').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//Cassandra Tile
$(function() { $(".cass").click(function() {
    var position = $(".cassandra").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 500);
    });
});

});
//Close doc.ready
