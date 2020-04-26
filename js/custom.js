(function ($) {

    "use strict";

        // PRE loader
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // Smoothscroll js
        $(function() {
          $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  


        // WOW Animation js
        new WOW({ mobile: false }).init();
        function testAnim(x, y, z) {

          // $('.modal .modal-body').attr('class', 'modal-body  ' +  x  + '  animated');
          debugger
          $('.modal').attr('class', 'modal  ' + x + '  animated');
          $('.modal .modal-content .contentOne').css("min-height", "140px")
          $('.modal .modal-content .contentTwo').css("min-height", "110px")
          $('.modal .modal-content .contentThree').css("min-height", "20px")
          $('.modal .modal-content .contentOne').addClass(y + '  animated')
          $('.modal .modal-content .contentTwo').addClass(z + '  animated')
          $('.modal .modal-content .contentThree').addClass(z + '  animated')
          // if(y){
          //   $('.modal li').each(function(i, el) {
          //     debugger
          //     setTimeout(function() {
          //       $(el).css("display", "block")
          //        $(el).addClass(y +' animated');
          //     }, i * 300);
          //  });
          // }
      };
      $('#exampleModalCenter').on('show.bs.modal', function (e) {

        // var anim = $('#entrance').val();
            testAnim("zoomIn",'flipInX','flipInX');
      })
      // $('#exampleModalCenter').on('hide.bs.modal', function (e) {
      //   debugger
      //   // var anim = $('#exit').val();
      //   testAnim("zoomOut",'slideOutRight','slideOutLeft');
      // })

})(jQuery);
