 // JavaScript Document
 function over(tip)
 {   
     tooltips = document.createElement('div');<!-- Создаем поле div для подсказки -->
     document.body.appendChild(tooltips);
     tooltips.innerHTML = tip;
     tooltips.style.position = 'absolute';
     tooltips.style.background = '#FFFFFF';<!-- Задаем цвет фона подсказки -->
     tooltips.style.border = 'solid 1px #346fdc';<!-- Указываем границу для подсказок -->
     tooltips.style.padding = '4px';
     tooltips.style.zIndex = '10';
     move();
 }       
 function move(e)
 {
     e = e || window.event
     if (e.pageX == null && e.clientX != null )
         {
             var html = document.documentElement
             var body = document.body
             e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0)
             e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0)
         }
     tooltips.style.left = e.pageX + 15 + 'px';
     tooltips.style.top = e.pageY + 15 + 'px';
 }
 function out()
 {
     document.body.removeChild(tooltips);
 } 
 
 (function($) {
     Drupal.behaviors.myBehavior = {
         attach: function (context) {
             $(".phone").mask("+7(999) 999-99-99");
         }
     };
 })(jQuery);
 