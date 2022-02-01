
jQuery(function($){
    'use strict'


    // Responsive Menu
    if($('.fa-bars').length) {
        $('.fa-bars').on('click', function(){
          $('.header .header_link_left > ul, .right_block, .icons_sites').show()
          $('.header_bottom').hide()
          $(this).hide()
          $('.fa-times').show()
        })
  
        $('.fa-times').on('click', function(){
          $('.header .header_link_left> ul, .right_block, .icons_sites').hide()
          $('.header_bottom').show()
          $(this).hide()
          $('.fa-bars').show()
  
        })
      }

      /* Index / Categoty dropdown menu*/ 
      if($('.fa-align-justify').length) {
        $('.fa-align-justify').on('click', function(){
          $('.selection_buttons .buttons').show()
          $('').hide()
          $(this).hide()
          $('.fa-times-circle').show()
        })
  
        $('.fa-times-circle').on('click', function(){
          $('.selection_buttons .buttons').hide()
          $('').show()
          $(this).hide()
          $('.fa-align-justify').show()
  
        })
      }

      /* Catalog / Catalog dropdown menu*/
      if ($('.fa-align-justify').length) { 
        $('.fa-align-justify').on('click', function(){
          $('.menu_block').show()
          $('').hide()
          $(this).hide()
          $('.fa-times-circle').show()
        })

        $('.fa-times-circle').on('click', function() {
          $('.menu_block').hide()
          $('').show()
          $(this).hide()
          $('.fa-align-justify').show()
        })
      }

    if($('.open_video').length){
        $('.open_video').magnificPopup({
            type: 'iframe'
          });
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
});