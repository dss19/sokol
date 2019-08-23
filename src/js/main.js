$(document).ready(function(){
  var button = $('#button');
  var button2 = $('#button2');
  var close = $('#close');
  var modal = $('#modal');
  var index = 235;    
  
  // modal window
  button.on('click', function() {
    modal.addClass('modal_active');    
  });
  button2.on('click', function() {
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');    
  });  

  // калькулятор  
  $('#calcf').on('input', function() {
    if ($('#area').val().toString()!='') {
      var area = parseInt($('#area').val());        
    }         
    if ($('#corners').val().toString()>4) {
      var corners = (parseInt($('#corners').val())-4)*100;
    } else {
      var corners = 0;
    }     
    if ($('#spotlight').val().toString()>0) {
      var spotlight = parseInt(($('#spotlight').val()))*250;
    } else {
      var spotlight = 0;
    }                  
    var summ = (area*index)+corners+spotlight;    
    $('.summ__value').html(summ);
  });

  // Popup
  $('form').trigger('reset');
  $(function() {
    'use strict';        
    $('form').on('submit', function(e) {
      e.preventDefault();            
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function() {
          yaCounter54934966.reachGoal('sendtomail');
          modal.removeClass('modal_active');
          $('.popup').fadeIn(100).fadeOut(5000);
          $('form').trigger('reset'); // очистка формы    
        }
      });
    });
  });
  
  //  Маска телефона
  $('[name="userphone"]').mask('+7 (999) 999-99-99');
  
  // WOW.js
  new WOW().init();

  // page up button
  var pgu = $('.pageup');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      pgu.addClass('pageup_show');
    } else {
      pgu.removeClass('pageup_show');
    }
  });  
  pgu.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 700);
  });

  // скролл
  $('a[class=nav-menu__link]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
        bl_top = $(target).offset().top -80;
    $('html, body').animate({scrollTop: bl_top}, 500);
  });
});
