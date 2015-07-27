// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$('body').load('about.html .container'); //can not load the file origin
//we can't make requests to other domains
$('a').on('click',function (e) {
    $('body').load('about.html container');

    e.preventDefault();
})

$('form').on('submit', function(e){
  console.log('sibmitted');
  console.log( $(this).serialize());
  console.log( $(this).find('#content').val());
  e.preventDefault();
});

var setVal = function () {
  var deferred = new $.Deferred(); //new 可以拿掉

  setTimeout(function () {
    myVar = 'my value';
    deferred.resolve();
  },2000);

  return deferred.promise();

}

setVal().done(function () {
  console.log('all done:' + myVar);
});


$.searchTwitter = function ( search ) {  //可以簡化
  var dfd = $.Deferred();
  $.ajax({
    url: '/path/to/file',
    dataType: 'jsonp',
    data: {param1: 'value1'},
    success: dfd.resolve
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  return dfd.promise();
};

//deffered with animation

$('dix .box').each(function(index, el) {
  $(this).delay( 1000 * index).fadeOut(1000);
}).promise().done(function () {
  console.log('All animation have fired');
})

//$.when
function getTweets () {
  return $.ajax({
    url: '/path/to/file',
    dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    data: {param1: 'value1'}
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

$.when(getTweets('dogs'), getTweets('cats').done(function (result1, result2) {
  console.log(result1);
  console.log(result2);

})); //when all this done, then do this

var box = $('div.box');

$.fn.FadeSlideToggle = function (speed, fn) {  //callback function
  return $(this).animate({
    'height': 'toggle',
    opacity: 'toggle'
  },speed || 400 , function () {
    console.log('completed');
  });
};

$('button').on('click', function () {
  box.FadeSlideToggle(500, callback);
});

//slider 實作

(function($){
  //$
  var sliderUL = $('div.slider').children('ul'),
      imgs = sliderUL.find('img'),
      imgWidth = imgs.width(), //imgs.first().css 600px
      imgsLen = imgs.length;
      current = 1,
      totalImgsWidth = imgWidth * imgsLen;

  $('#slider-nav').show().find('button').on('click',function(){
    var direction = $(this).data('dir');
    (direction === 'next') ? ++current : --current;

    if(current === 0){
      current = imgsLen;
      direction = 'next';
    } else if( current -1 === imgsLen){
      current = 1;
    }

    transition(sliderUL, '', direction);
  });

  function transition (container, loc, direction) {
    var unit;

    if(direction && loc !== 0){
      unit = ( direction === 'next') ? '-=' : '+=';

      container.animate({
        'margin-left': unit ? (unit + loc) : loc
        speed, function() {
        /* stuff to do after animation is complete */
      });
    }

  }


}(jQuery))
