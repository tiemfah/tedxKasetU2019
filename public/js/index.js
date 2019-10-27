$(function () {
    var element = $(".text1");
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            element.addClass("animateMe");
          }
          else {
            element.removeClass("animateMe");
          }
    });
  });

