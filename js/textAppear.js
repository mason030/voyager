// $(window).on("load",function() {
//   $(window).scroll(function() {
//     var windowBottom = $(this).scrollLeft() + $(this).innerWidth();
//     $(".fade").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().left + $(this).outerWidth();
//
//       alert("window: " + windowBottom + " & object: " + objectBottom);
//
//       /* If the element is completely within bounds of the window, fade it in */
//       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//       } else { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//       }
//     });
//   }).scroll(); //invoke scroll-handler on page-load
// });



// $(window).scroll(function () {
//   var div=$("#divToShowHide");
//             var windowpos = $(window).scrollLeft();
//             //---check the console to acurately see what the positions you need---
//             console.log(windowpos);
//             //---------------------
//
// //Enter the band you want the div to be displayed
//             if ((windowpos >= 0) && (windowpos <= 114)){
//                 div.addClass("AfterScroll");
//             }
//             else{
//                 div.removeClass("AfterScroll");
//             }
// });

$(document).ready(function() {

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis-transition');
    }
  });
});

observer.observe(document.querySelector('.textVis'));


const observer2 = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis2-transition');
    }
  });
});

observer2.observe(document.querySelector('.textVis2'));

const observer3 = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis3-transition');
    }
  });
});

observer3.observe(document.querySelector('.textVis3'));

const observer4 = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis4-transition');
    }
  });
});

observer4.observe(document.querySelector('.textVis4'));

const observer5 = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis5-transition');
    }
  });
});

observer5.observe(document.querySelector('.textVis5'));

const observer6 = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textVis6-transition');
    }
  });
});

observer6.observe(document.querySelector('.textVis6'));

});
