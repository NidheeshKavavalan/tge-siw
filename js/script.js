$(function() {
  var win;
  var opened = false;
  $('#c1 .l1 .w1').fitText(0.15);
  $(window).resize(function() {
    if ($(window).width() >= screen.width * 0.76 && !opened) {
      win = window.open("second.html", "_blank", "width=370, height=200, left=1500, top=25");
      opened = true;
    }
    if ($(window).width() < screen.width * 0.66) {
      try {
        win.close();
        opened = false;
      } catch(e) {}
    }
  });
});


$(function() {
  var win;
  var opened = false;
  $('#c1 .l1 .w1').fitText(0.15);
  $(window).resize(function() {
    if ($(window).width() >= screen.width * 0.64 && !opened) {
      win = window.open("third.html", "_blank", "width=300, height=225, left=1000, top=700");
      opened = true;
    }
    if ($(window).width() < screen.width * 0.54) {
      try {
        win.close();
        opened = false;
      } catch(e) {}
    }
  });
});


var tStart = 500 
  , tEnd = 700   
  , cStart = [255, 255, 255] 
  , cEnd = [0, 0, 0]   
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); 
        p = Math.min(1, Math.max(0, p)); 
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});








