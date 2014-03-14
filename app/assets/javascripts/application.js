// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require skrollr

//= require_tree .


$(function() {
  var s = skrollr.init({
          render: function(data) {
              //Debugging - Log the current scroll position.
              //console.log(data.curTop);
              console.log(data.curTop)
          }
      });
  var windowHeight =$(window).height()
  // console.log($(window).height())
  $('.slide').css({'height': windowHeight})
  // $('.slider').css(function() {
    // console.log($(window).height())
    // "height" =  $(window).height()
  // })


  jQuery.fn.center = function(parent) {
      if (parent) {
          parent = this.parent();
      } else {
          parent = window;
      }
      this.css({
          "position": "absolute",
          "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop()),
          "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft())
      });
  return this;
  }
  //
  // jQuery.fn.centerAllSliders = function(parent) {
  //     if (parent) {
  //         parent = this.parent();
  //     } else {
  //         parent = window;
  //     }
  //     this.css({
  //         "position": "absolute",
  //         "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop()),
  //         "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft())
  //     });
  // return this;
  // }
  //
  //
  $($('.story')[0]).center()


})