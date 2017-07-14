$(function() {
  var win;
  var opened = false;
  $('#c3 .l1 .w1, .w2, .w3').fitText(0.15);
  $(window).resize(function() {
    if ($(window).width() >= screen.width * 0.48 && !opened) {
      win = window.open("fourth.html", "_blank", "width=400, height=400, left=1100, top=50");
      opened = true;
    }
    if ($(window).width() < screen.width * 0.38) {
      try {
        win.close();
        opened = false;
      } catch(e) {}
    }
  });
});






