$(document).ready(function(){
/********************************* SEARCH INPUT TOGGLE ************************************/
  $('#search').hide();

  $('#search-icon').on('click', function(){
    $('#search').toggle(600);
  })
  // $(window).ready(function () {
  //       $(".load_body").delay(700).fadeOut();
  //       $(".cssload-container").delay(1000).fadeOut("slow");
  //   });
/*********************************** SCROLL ANIMATION **************************************/
// window.sr = ScrollReveal();
// sr.reveal('.navbar', {
//   duration: 3000,
//   mobile: false,
//   origin: 'bottom'
// });
// sr.reveal('#jumbotron', {
//   duration: 2000,
//   origin: 'left',
//   mobile: false,
//   distance: '100px',
//   viewFactor: 0.2
// });
// sr.reveal('#about', {
//   duration: 2000,
//   origin: 'bottom',
//   mobile: false,
//   distance: '300px',
//   viewFactor: 0.2
// });
// sr.reveal('.img-container1 img', {
//   duration: 1500,
//   origin: 'left',
//   mobile: false,
//   distance: '200px',
//   viewFactor: 0.2
// });
// sr.reveal('.img-container2 img', {
//   duration: 1500,
//   origin: 'right',
//   mobile: false,
//   distance: '200px',
//   viewFactor: 0.2
// });
// sr.reveal('.img-container3 img', {
//   duration: 1500,
//   origin: 'left',
//   mobile: false,
//   distance: '200px',
//   viewFactor: 0.2
// });
// sr.reveal('#advantages #center', {
//   duration: 2000,
//   origin: 'bottom',
//   mobile: false,
//   viewFactor: 0.2,
//   delay: 1000
// });
// sr.reveal('#clients', {
//   duration: 2000,
//   origin: 'bottom',
//   mobile: false,
//   viewFactor: 0.2
// });
// sr.reveal('#contact', {
//   duration: 2000,
//   // origin: 'bottom',
//   mobile: false,
//   viewFactor: 0.2
// });
/*********************************** datepicker **************************************/
  $(function() {
    $( "#datepicker" ).datepicker();

      $('span[title="Saturday"]').text('السبت').css("color","#8c362c");
      $('span[title="Sunday"]').text('الأحد').css("color","#8c362c");
      $('span[title="Monday"]').text('الاثنين').css("color","#8c362c");
      $('span[title="Tuesday"]').text('الثلاثاء').css("color","#8c362c");
      $('span[title="Wednesday"]').text('الأربعاء').css("color","#8c362c");
      $('span[title="Thursday"]').text('الخميس').css("color","#8c362c");
      $('span[title="Friday"]').text('الجمعة').css("color","#8c362c");

      $("a.ui-state-default:contains(1)").css({
        "background" : "#8c362c",
        "color" : "#fff",
        "font-family" : "JF-Flat-Medium",
        "pointer-events" : "none"
      }).click(function(){ return false});

      $("a.ui-state-default:contains(2)").css({
       "background" : "transparent",
       "color" : "#2f374e",
       "border" : "none",
       "font-family" : "JF-Flat-Medium"
      });

      $("a.ui-state-default:contains(3)").css({
       "background" : "transparent",
       "color" : "#acaba2",
       "border" : "none",
       "font-family" : "JF-Flat-Medium"
      });

      $("table .ui-datepicker-calendar").addClass('table');

      // $("a.ui-datepicker-prev span").removeClass().addClass('icofont-long-arrow-up');
      // $("a.ui-datepicker-next span").removeClass().addClass('icofont-long-arrow-down');

      // $("a.ui-datepicker-next span").removeClass('ui-icon ui-icon-circle-triangle-e');
  });


/*********************************** inputNumber **************************************/
  (function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
/*************************************************************************/

});
