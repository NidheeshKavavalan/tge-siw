$(function() {
  var win;
  var left = 1100;
  var top = 50;
  var interval = 50;
  var opened = false;
  $('#c3 .l1 .w1, .w2, .w3').fitText(0.15);
  $(window).resize(function() {
    if ($(window).width() >= screen.width * 0.48 && !opened) {
      win = window.open("fourth.html", "_blank", "width=400, height=445, left="+left+", top="+top);
      opened = true;
      jitter();
    }
  });
  function jitter() {
    var offsetTop = Math.floor(Math.random() * 10) + top;
    var offsetLeft = Math.floor(Math.random() * 10) + left;
    win.moveTo(offsetLeft, offsetTop);
    setTimeout(jitter, interval);
  }
});
