function main(){
  $('.dropdown').hide();
  $('.links').hide();
  $('.button').on('click', function() {
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).hover(function() {
      $(this).hovertext("LinkedIn")
    });
  });
  $('.skillset').fadeIn(1000);
}

$(document).ready(main);
