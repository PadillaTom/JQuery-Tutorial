// :::::::::::::::::::: Intro :::::::::::::::::::::::
// $ = jQuery --> Used to start JQuery.
// jQuery('body').css({ background: 'red' });

// $('body').css({ background: 'blue' });
// $('.box')
//   .css({ padding: '1rem', background: 'cyan' })
//   .fadeOut('slow', function () {
//     console.log('hello');
//   });

// :::::::::::::::::::: EVENTS :::::::::::::::::::::::
// Normalmente carga el DOM y luego ejecuta el JQuery, queremos que sea todo a la vez.
// Envolvemos nuestro Jquery en una Function:
//  Así se ejecuta el DOM y una vez Ready la func Jquery:

// $(document).ready(function () {
//
// });

// QUE ES IGUAL A:

// $(function () {
//   // Handler for .ready() called.
//   $('body').css({ background: 'blue' });
//   $('.box')
//     .css({ padding: '1rem', background: 'cyan' })
//     .fadeOut('slow', function () {
//       console.log('hello');
//     });
// });

$(function () {
  // --> BROWSER EVENTS:
  $(window).resize(function () {
    if ($(window).width() > 1000) {
      $('body').css({ background: 'cyan' });
    } else if ($(window).width() > 700) {
      $('body').css({ background: 'blue' });
    } else {
      $('body').css({ background: 'magenta' });
    }
  });

  // ---> EVENTS HANDLER:

  //   ------> Click:
  //
  //   $('.cta-bg').on('click', function () {
  //     $('body').css({ background: 'red' });
  //   });

  //   ------>  For DYNAMIC ELEMENTS not yet in DOM: ---> Good for React.
  //
  //   Will search for "cta-bg" on DOM before execute function.
  // $(document).on('click', '.cta-bg', function () {
  //   $('body').css({ background: 'red' });
  // });

  //   -----> Multiple stuff, We pass in an Object:
  //
  // $('.cta-bg2').on({
  //   click: function () {
  //     $('body').css({ background: 'gray' });
  //   },
  //   mouseenter: function () {
  //     $('.cta-bg2 p').css({ color: 'green' });
  //   },
  //   mouseleave: function () {
  //     $('.cta-bg2 p').css({ fontSize: '3rem' });
  //   },
  // });

  //  -----> More Events:
  //
  // Prevent Default ::::::
  //   $('.cta-box a').on('click', function (event) {
  //     event.preventDefault();
  //   });
  //
  // Stop Propagation :::::: --> Do not have samae properties as PARENTS
  // $('.box-propag').on('click', function () {
  //   $('.res-box').css({ background: 'red' });
  // });
  // $('.button').on('click', function (e) {
  //   e.stopPropagation(); // -> Evita pasar propiedades de PARENT a CHILD
  //   // console.log(e.target.nodeName); // -> Nos muestra el Elemento Clickeado : DIV
  //   $('.res-box').css({ background: 'blue' });
  //   if (e.target.nodeName == 'DIV') {
  //     $('.res-box').css({ background: 'purple' });
  //   } else {
  //     $('.res-box').css({ background: 'orange' });
  //   }
  // });
  //
  //  Form Events ::::::  -->
  // $('.select-options').change(function (e) {
  //   alert(`Change value to: ${e.target.value}`);
  // });
  // $('.input-1').change(function (e) {
  //   alert(`name is ${e.target.value}`);
  // });
  $('.input-1')
    .change(function (e) {
      $('.result-phrase').html('<h4>' + e.target.value + '.</h4>');
    })
    .focusin(function () {
      $('.result-phrase').css({ color: 'red' });
    })
    .focusout(function () {
      $('.result-phrase').css({ color: 'cyan' });
    });
});
