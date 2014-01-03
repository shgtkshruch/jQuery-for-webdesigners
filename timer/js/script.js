$(function() {
  var interval;
  interval = 3000;
  return $('.slideshow').each(function() {
    var container, startTimer, stopTimer, switchImg, timer;
    container = $(this);
    timer = '';
    switchImg = function() {
      var first, imgs, second;
      imgs = container.find('img');
      first = imgs.eq(0);
      second = imgs.eq(1);
      first.fadeOut().appendTo(container);
      return second.fadeIn();
    };
    startTimer = function() {
      return timer = setInterval(switchImg, interval);
    };
    stopTimer = function() {
      return clearInterval(timer);
    };
    container.find('img').hover(stopTimer, startTimer);
    return startTimer();
  });
});

/*
//@ sourceMappingURL=script.js.map
*/