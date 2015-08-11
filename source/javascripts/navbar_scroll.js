$(function() {
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 300) {
      $(".navbar").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar").css({
        "margin-top": "0px"
      });
    }
  });
});