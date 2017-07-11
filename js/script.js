$(function() {
  var win;
  var opened = false;
  $('#c1 .l1 .w1').fitText(0.13);
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(window).height() && !opened) {
      win = window.open("file:///Users/m9dfukc/Desktop/mozilla/_sketch_/second.html", "_blank", "width=500, height=600, left=1000");
      opened = true;
    }
    if ($(window).scrollTop() < $(window).height()) {
      try {
        win.close();
        opened = false;
      } catch(e) {

      }
    }
  });
});
