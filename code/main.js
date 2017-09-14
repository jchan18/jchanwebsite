function main(){
  $('.dropdown').hide();
  $('.links').hide();
  $('.button').on('click', function() {

    if ($(window).width() > 1300) {
      $(this).toggleClass("fourcol");
      $(this).next().toggleClass("fourcol");
    } else if ($(window).width() > 700) {
      $(this).toggleClass("twocol");
      $(this).find(".dropdown").toggleclass("twocol");
    } else {

      $(this).next().slideToggle(400);
      $(this).toggleClass("onecol");
      $(".headshot").toggleClass("transparent");
      $(this).parent().toggleClass("fullborder");
      $(this).next().toggleClass("mobclick");

    }
    /*
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');*/
    /*$(this).hover(function() {
      $(this).hovertext("LinkedIn");
    });*/
  });
  $('.skillset').fadeIn(1000);
}

$(document).ready(main);
