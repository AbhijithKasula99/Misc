$(document).ready(function() {
    var title = $('#title');
    var favicon = $('link[rel="icon"]');
    var animation = setInterval(function() {
      title.animate({left: '+=10px'}, 1000);
      title.animate({left: '-=10px'}, 1000);
      favicon.animate({left: '+=10px'}, 1000);
      favicon.animate({left: '-=10px'}, 1000);
    }, 2000);
  });
  