"use strict";$(document).foundation(),//
//$('a').click (function() {
//    alert("a link was clicked");
//});
//
//import $ from 'jquery';
window.$=$,window.jQuery=$,$(document).ready(function(){
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
Foundation.MediaQuery.atLeast("large")&&(
// True if large
// False if medium or small
$(".close-this").click(function(){$(".main-col").css({"padding-right":"0"}),$("footer").css({"padding-right":"0"})}),$(".open-this").click(function(){$(".main-col").css({"padding-right":"250px"}),$("footer").css({"padding-right":"250px"})})),//}
//Scroll to Cassandra Tile
$(function(){$(".cass").click(function(){var n=$(".cassandra").offset().top;$("HTML, BODY").animate({scrollTop:n},500)})}),//Scroll to Knewton Tile
$(function(){$(".knew").click(function(){var n=$(".knewton").offset().top;$("HTML, BODY").animate({scrollTop:n},500)})}),//Scroll to General Assembly Tile
$(function(){$(".gene").click(function(){var n=$(".ga").offset().top;$("HTML, BODY").animate({scrollTop:n},500)})}),//Scroll to Spring Tile
$(function(){$(".spri").click(function(){var n=$(".spring").offset().top;$("HTML, BODY").animate({scrollTop:n},500)})}),//Scroll to Outbrain Tile
$(function(){$(".outb").click(function(){var n=$(".outbrain").offset().top;$("HTML, BODY").animate({scrollTop:n},500)})}),//Minimize header on scroll
$(window).scroll(function(){var n;//>=, not <=
30<=$(window).scrollTop()?(
//clearHeader, not clearheader - caps H
$(".header").addClass("min"),$(".close-this").addClass("min"),$(".open-this").addClass("min"),$(".hello-here").css("display","none"),$(".side-nav").css("margin-top","-15px")):($(".header").removeClass("min"),$(".close-this").removeClass("min"),$(".open-this").removeClass("min"),$(".hello-here").css("display","inline-block"),$(".side-nav").css("margin-top","50px"))}),//Open Modal via JS
$(".contactMe").click(function(){$("#contactModal").foundation("open")})});//Close doc.ready
//# sourceMappingURL=app-min.js.map
//# sourceMappingURL=app-min.js.map