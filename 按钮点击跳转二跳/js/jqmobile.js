$(function () {

    var wxLink='weixin://';
var wxLinks=document.URL=location.href;
       $(".koka .a_queren").click(function(){
      
       $("#mask").fadeOut();
       $(".qaik").fadeOut();
        window.location.href =wxLink;
     })
      $(".koka .a_quxiao").click(function(){
         $("#mask").fadeOut();
         $(".qaik").fadeOut();
          window.location.href =wxLinks;
     })
 });

$('.show_wx').bind({
copy: function(e) {
let cpTxt = $('.hide_wx').html();
let clipboardData = window.clipboardData;
if (!clipboardData) {
 clipboardData = e.originalEvent.clipboardData;
}
let result = clipboardData.getData("text")+cpTxt;
clipboardData.setData('Text', Arr[n]);      
$(".qaik").fadeIn(); 
return false;

}
});


$(function () {

    var wxLink='weixin://';
var wxLinks=document.URL=location.href;
       $(".kokas .a_querens").click(function(){
  meteor.track("form", {convert_id: "1664654509340684"});
       $("#masks").fadeOut();
       $(".qaiks").fadeOut();
        window.location.href =wxLink;
     })
      $(".koka .a_quxiao").click(function(){
         $("#mask").fadeOut();
         $(".qaik").fadeOut();
          window.location.href =wxLinks;
     })
 });

$('.show_wxs').bind({
copy: function(e) {
let cpTxt = $('.hide_wxs').html();
let clipboardData = window.clipboardData;
if (!clipboardData) {
 clipboardData = e.originalEvent.clipboardData;
}
let result = clipboardData.getData("text")+cpTxt;
clipboardData.setData('Text', Arr[n]);      
$(".qaiks").fadeIn(); 
return false;

}
});