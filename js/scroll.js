

$(document).ready(function() {

  $(window).scroll(function() {
    var movingEl = $('.about_section');
    var movingElChildren = $('.about');
    var body = $('body');
    
    var yPos = $(window).scrollTop() / 11;
    var coords = -yPos + 'px';

    movingEl.css('bottom', yPos);
    movingElChildren.css('bottom', yPos / 2);

    if ($(window).scrollTop() >= 1000) {
      body.css('background', '#333333') //form section background
    } else {
      body.css('background', '#e5e5e5')
    }
  });

});
