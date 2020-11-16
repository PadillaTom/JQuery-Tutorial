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

// $(function () {
//   // --> BROWSER EVENTS:
//   $(window).resize(function () {
//     if ($(window).width() > 1000) {
//       $('body').css({ background: 'cyan' });
//     } else if ($(window).width() > 700) {
//       $('body').css({ background: 'blue' });
//     } else {
//       $('body').css({ background: 'magenta' });
//     }
//   });

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
// $('.input-1')
//   .change(function (e) {
//     $('.result-phrase').html('<h4>' + e.target.value + '.</h4>');
//   })
//   .focusin(function () {
//     $('.result-phrase').css({ color: 'red' });
//   })
//   .focusout(function () {
//     $('.result-phrase').css({ color: 'cyan' });
//   });
// });

// :::::::::::::::::::: DOM MANIPULATION :::::::::::::::::::::::
// $(function main() {
//   // ---> ADD / REMOVE Classes:
//   //   $('.result-box').addClass('active');
//   //   $('.result-box').removeClass('active');

//   $('.box1').on('click', function () {
//     $('.result-box').addClass('active');
//   });
//   $('.box2').on('click', function () {
//     $('.result-box').removeClass('active');
//   });

//   //   ---> TOGGLE Classes:
//   $('.box3').on('click', function () {
//     $('.result-box').toggleClass('active');
//   });

//  ---> CLONE STUFF:
//   Agarra todos los elementos con la same CLASS!
//   $('.box4').on('click', function () {
//     $('.results-container').clone().appendTo('body');
//   });

//   $('.box4').on('click', function () {
//     $('.results-container:first').clone().appendTo('body');
//   });

//  ---> WRAP: Wrap, unWrap, WrapInner
//   $('.box5').on('click', function () {
//     $('.box1').wrap(`<div class="active"> </div>`);
//   });
//   $('.box6').on('click', function () {
//     $('.box1').unwrap(`.active`);
//   });

// ---> CHANGING ELEMENTS: Append, AppendTo, html, prepend

//   $('.box7').on('click', function () {
//  APPEND:
// $('.result-box').append(`<p>HELLO</p>`);
// $(`<p>HELLO</p>`).appendTo('.result-box');
//
// HTML:
// console.log($('.box1').html());
// $('.box1').html(`<div class="active">Hello World</div>`);
//
// Text(): "Element: First, Last"
// console.log($('p:first').text());
// $('p:first').text(`New TEXT`);
//
// BEFORE, AFTER: Inster, After, InsterBefore, InsetAfter
//
// REMOVE: Select by Class, or by element and className
// $('.box1').remove();
// $('div').remove('.box3');
//
// REPLACE: All, With.
// $('.box1').replaceWith(`<p>Replaced</p>`);
//
// ATTRIBUTES : IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *** ATTR, REMOVEATTR, VAL ***
// Get ATT:
// console.log($('.get-att img').attr('alt'));
//
// Change ATT:
// $('.get-att img').attr({ alt: 'New Alt', class: 'changed-alt' });
//
// **** VALUE: Get Values form Input Fields! *****
// console.log($('.get-att input').val());
//
// STYLE Properties: Width, InnerWidth, Height, CSS
//     console.log($('.box1').width());
//     if ($('.box1').width() > 70) {
//       $('.result-box').css({ background: 'yellow' });
//     }
//   });
// :::::::::::::::::::: TRAVERSING DOM :::::::::::::::::::::::
// PARENT: Nos muestra lso PARENTS para el first P
//   console.log($('p:first').parent());
// CHILDREN: Nos muestra los 3 grandes DIV
//   console.log($('div:first').children());
//
// Modifying:
// $('.box8').on('click', function () {
//   //     $('div:first').children().css({ color: 'red' });
//   //
//   //
//   // Looping FOREACH:
//   $('p').each(function () {
//     console.log(this);
//     $(this).css({
//       color: 'green',
//     });
//   });
//   $('p').first().css({
//     color: 'red',
//   });
// });
// });

// :::::::::::::::::::: AJAX :::::::::::::::::::::::
// $(function () {
//   $('.ajax-btn').on('click', function () {
// ------------------- GET -->
// var request = $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   method: 'GET',
// });
// request.done(function (data) {
//   //La Data Recibida, que hacemos?
//   console.log(data);
// });
// request.fail(function (jqHXR, textStatus) {
//   alert('Request Failed: ' + textStatus);
// });
//
// ----------------- POST -->
//     var request = $.ajax({
//       url: 'https://jsonplaceholder.typicode.com/posts',
//       method: 'POST',
//       data: {
//         title: 'A day in the life Of:',
//         body: 'Hello, testing my POST',
//         userId: 1,
//       },
//     });
//     request.done(function (data) {
//       //La Data Recibida, que hacemos?
//       console.log(data);
//     });
//     request.fail(function (jqHXR, textStatus) {
//       alert('Request Failed: ' + textStatus);
//     });
//   });
//
// ----------------- PUT -->
//     var request = $.ajax({
//       url: 'https://jsonplaceholder.typicode.com/posts/1',
//       method: 'PUT',
//       data: {
//         title: 'Completely Changed',
//         body: 'Hello, testing my POST',
//         userId: 1,
//       },
//     });
//     request.done(function (data) {
//       //La Data Recibida, que hacemos?
//       console.log(data);
//     });
//     request.fail(function (jqHXR, textStatus) {
//       alert('Request Failed: ' + textStatus);
//     });
//   });
//
// ----------------- DELETE-->
//     var request = $.ajax({
//       url: 'https://jsonplaceholder.typicode.com/posts/1',
//       method: 'DELETE',
//     });
//     request.done(function (data) {
//       //La Data Recibida, que hacemos?
//       console.log(data);
//     });git
//     request.fail(function (jqHXR, textStatus) {
//       alert('Request Failed: ' + textStatus);
//     });
//   });
// });

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::P O K E D E X:::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// URL by NAME: https://pokeapi.co/api/v2/pokemon/pikachu/
