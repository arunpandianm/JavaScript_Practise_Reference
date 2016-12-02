$(function(){
  $('#success').hide();
  $('#startOver').addClass('hoverOut');
  var score = 0;

  $('#clickMe').click(function(){
    score++;
    $('#score').text(score);
    $('#success').show('slow').fadeOut(2000);

  });

  $('#startOver').hover(function() {
    score = 0;
    $('#score').text(score);
    $('#startOver').addClass('hoverIn').removeClass('hoverOut');
  }, function() {
    $('#startOver').removeClass('hoverIn').addClass('hoverOut');

  });

});
