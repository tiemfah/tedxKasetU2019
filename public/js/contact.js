$(document).ready(function() {
  $(".c-faq").delegate(".c-faq", "click", function() {
    $(".c-faq").removeClass("c-faq--active");
    $(this).addClass("c-faq--active");
  });
});
