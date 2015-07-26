$(document).ready(function() {
    if($(".full-page").width() > 300){
      $("l-menu").addClass('hide-on-small-only');
      $("l-menu").removeClass('fadeOutLeft');
    }
  
});
$(function(){
   $("#open-menu").click(function(){
      $(".l-menu").toggleClass(function(){
          if($(this).is(".fadeInLeft")){
              $(this).removeClass("fadeInLeft");
              $(".main-container").addClass("close-menu");
              return "fadeOutLeft";
          }
          else{
              $(this).removeClass("fadeOutLeft");
              $(this).removeClass("hide-on-small-only");
              $(".main-container").removeClass("close-menu");
              return "fadeInLeft";
          }
          function FindValue(){
              var ShowString= "document.getElementsByClassName("display");";
              document.getElementsByClassName("display").innerHTML=ShowString;
          };
          var a = document.getElementsByClassName("col");
          a.onclick(function(){
              a.FindValue = function () {

              };
              a.FindValue();
          });
          //如果螢幕調回993px以上則將動畫效果刪除，改為固定顯示
      })

   })
   
});