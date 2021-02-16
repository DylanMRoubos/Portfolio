$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade1").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom + 250) { //object comes into view (scrolling down)          
          if ($(this).css("opacity")== 0.5) {$(this).fadeTo(1000,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0.5);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });