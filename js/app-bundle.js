/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	$(document).foundation();

	var captionLength = 0;
	var caption = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.";

	setInterval ('cursorAnimation()', 700);
	type();

	function type() {
	    $("#caption").html(caption.substr(0, captionLength++));
	    setTimeout('type()', 60);
	}

	function cursorAnimation() {
	    $('#cursor').animate({
	        opacity: 0
	    }, 'fast', 'swing').animate({
	        opacity: 1
	    }, 'fast', 'swing');
	}

	//// SCROLL EFFECT
	$('a[href*=#]:not([href=#])').click(function() {

	    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	        if (target.length) {
	            $('html,body').animate({
	                scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});

	var scrollOrigin = $(window).scrollTop();

	$(window).on("scroll", function(){
	    
	    var scrollPos = $(window).scrollTop();
	    
	    if(scrollOrigin > scrollPos){
	        $("#menu").animate({top: "0"}, "fast");
	    }
	    else {
	        $("#menu").slideUp("fast");
	    }
	    
	    scrollOrigin = scrollPos;
	});

/***/ }
/******/ ]);