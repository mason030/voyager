// $(window).scroll(function() {
//   var scroll = $(window).scrollLeft();
//   var dh = $(document).width();
//   var wh = $(window).width();
//   value = (scroll / (dh-wh)) * 100;
//   $('.progress-bar').css('width', value + '%');
// });
$(document).ready(function(){
  var container = $('main');

  $(".earthScroll").click(function(){
      container.animate({scrollLeft: 0}, 500);
  });

  $(".jupiterScroll").click(function(){
    var divPosition = $('#Jupiter');
    var position = divPosition.offset().left - container.offset().left + container.scrollLeft();
    	container.animate({scrollLeft: position + 600}, 500);
  });

  $(".saturnScroll").click(function(){
    var divPosition = $('#Saturn');
    var position = divPosition.offset().left - container.offset().left + container.scrollLeft();
    	container.animate({scrollLeft: position + 600}, 500);
    });

  $(".uranusScroll").click(function(){
    var divPosition = $('#Uranus');
    var position = divPosition.offset().left - container.offset().left + container.scrollLeft();
      container.animate({scrollLeft: position + 600}, 500);
  });

  $(".neptuneScroll").click(function(){
    var divPosition = $('#Neptune');
    var position = divPosition.offset().left - container.offset().left + container.scrollLeft();
      container.animate({scrollLeft: position + 600}, 500);
  });
  // $('.firstpage').click(function jupiterScroll() {
  //   event.preventDefault();
  //   $(window).animate({scrollLeft: "+=200px"}, "slow");
  // });
});
