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

  //   Click:
  //   $('.cta-bg').on('click', function () {
  //     $('body').css({ background: 'red' });
  //   });

  //   For DYNAMIC ELEMENTS not yet in DOM: ---> Good for React.
  //   Will search for "cta-bg" on DOM before execute function.
  $(document).on('click', '.cta-bg', function () {
    $('body').css({ background: 'red' });
  });

  //   Multiple stuff, We pass in an Object:
  $('.cta-bg2').on({
    click: function () {
      $('body').css({ background: 'gray' });
    },
    mouseenter: function () {
      $('.cta-bg2 p').css({ color: 'green' });
    },
    mouseleave: function () {
      $('.cta-bg2 p').css({ fontSize: '3rem' });
    },
  });
});
