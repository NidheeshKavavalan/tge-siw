$(function() {
  var win;
  var opened = false;
  $('#c1 .l1 .w1').fitText(0.15);
  $(window).resize(function() {
    if ($(window).width() >= screen.width * 0.85 && !opened) {
      win = window.open("file:///Users/m9dfukc/Desktop/mozilla/_sketch_/second.html", "_blank", "width=170, height=240, left=1400, top=90");
      opened = true;
    }
    if ($(window).width() < screen.width * 0.75) {
      try {
        win.close();
        opened = false;
      } catch(e) {}
    }
  });
});
