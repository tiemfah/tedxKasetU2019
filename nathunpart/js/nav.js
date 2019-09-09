$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  })

  var secTwoTop = $('.white').offset().top
  $(document).scroll(function() {
    if(document.documentElement.scrollTop > secTwoTop){
        $(":root").get(0).style.setProperty("--pri", "white");
        $(":root").get(0).style.setProperty("--sec", "black");
    } else {
      $(":root").get(0).style.setProperty("--pri", "black");
      $(":root").get(0).style.setProperty("--sec", "white");
    }
  })
});