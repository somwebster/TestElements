/*===================================
Author       : Bestwebcreator.
Template Name: Bitcurrency - Bitcoin, ICO &amp; Cryptocurrency Landing Page Template
Version      : 1.0
===================================*/

/*===================================*
INDEX PAGE JS
*===================================*/
(function($) {
	'use strict';
	
	/*===================================*
	01.LOADING JS
	/*===================================*/
	$(window).on('load',function(){
		var preLoder = $(".preloader");
		preLoder.delay(700).fadeOut(500);
	});


	/*===================================*
	02.MENU SCROLL JS
	*===================================*/
	$('a.page-scroll').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 80
		}, 1500);
		e.preventDefault();
	});	
	
	/*===================================*
	03.MENU TOGGLE JS
	*===================================*/
	$(document).ready(function () {
		$(".navbar-nav li a", this).on('click', function (e) {
			$(".navbar-collapse").collapse('hide');
			$(".navbar-toggle").each(function(){
				$(".fa", this).removeClass("fa-times");
				$(".fa", this).addClass("fa-bars");
			});
		});
	 });
	 
	/*===================================*
	04.START BACKGROUND ANIMATION JS
	*===================================*/
	 jQuery(document).on('ready', function(){
		$('.home_slider').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			dots:false,
			nav:true,
			mouseDrag: false,
        	touchDrag: false,
			animateOut: 'fadeIn',
			navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
	});	
	
	/*===================================*
	04.START BACKGROUND ANIMATION JS
	*===================================*/
	$(".home_slider").on("translate.owl.carousel", function(){
		$('.banner_content  h2').removeClass('fadeInDown animated').css('opacity', '0');
		$('.banner_content p').removeClass('fadeInDown animated').css('opacity', '0');
		$('.banner_content .slider_btn').removeClass('fadeInDown animated').css('opacity', '0');
	});
	
	$(".home_slider").on("translated.owl.carousel", function(){
		$('.banner_content h2').addClass('fadeInDown animated').css('opacity', '1');
		$('.banner_content p').addClass('fadeInDown animated').css('opacity', '1');
		$('.banner_content .slider_btn').addClass('fadeInDown animated').css('opacity', '1');
	});
	

	/*===================================*
	05.START BACKGROUND ANIMATION JS
	*===================================*/ 
	(function() {
		var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
		// Main
		initHeader();
		addListeners();
	
		function initHeader() {
			width = window.innerWidth;
			height = window.innerHeight;
			target = {x: 0, y: height};
	
			largeHeader = document.getElementById('home');
			largeHeader.style.height = height+'px';
	
			canvas = document.getElementById('circle-canvas');
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');
	
			// create particles
			circles = [];
			for(var x = 0; x < width*0.5; x++) 
			{
				var c = new Circle();
				circles.push(c);
			}
			animate();
		}
	
		// Event handling
		function addListeners() {
			window.addEventListener('scroll', scrollCheck);
			window.addEventListener('resize', resize);
		}
	
		function scrollCheck() {
			if(document.body.scrollTop > height) animateHeader = false;
			else animateHeader = true;
		}
	
		function resize() {
			width = window.innerWidth;
			height = window.innerHeight;
			largeHeader.style.height = height+'px';
			canvas.width = width;
			canvas.height = height;
		}
	
		function animate() {
			if(animateHeader) {
				ctx.clearRect(0,0,width,height);
				for(var i in circles) {
					circles[i].draw();
				}
			}
			requestAnimationFrame(animate);
		}
	
		// Canvas manipulation
		function Circle() {
			var _this = this;
	
			// constructor
			(function() {
				_this.pos = {};
				init();
				//console.log(_this);
			})();
	
			function init() {
				_this.pos.x = Math.random()*width;
				_this.pos.y = height+Math.random()*100;
				_this.alpha = 0.1+Math.random()*0.6;
				_this.scale = 0.1+Math.random()*0.3;
				_this.velocity = Math.random();
			}
	
			this.draw = function() {
				if(_this.alpha <= 0) {
					init();
				}
				_this.pos.y -= _this.velocity;
				_this.alpha -= 0.0005;
				ctx.beginPath();
				ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
				ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
				ctx.fill();
			};
		}
	})();

	  
	/*===================================*
	 07. START COUNTUP JS
	*===================================*/
	jQuery(document).ready(function($) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});


	/*===================================*
	11. START PARTNER SLIDER JS
	*===================================*/
	jQuery(document).on('ready', function(){
		$('.partner_slider').owlCarousel({
			merge:true,
			merge:true,
			loop:true,
			margin:30,
			dots:true,
			autoplay:true,
			autoplayHoverPause: true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				380:{
					items:2,
					margin:10,
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		})
		
	}); 
	
	
	
	/*===================================*
	13. START CONTACT FORM JS
	*===================================*/
	$( window ).on( 'load', function(){
		$( '.screen' ).scrollImage();
	})
	
	
})(jQuery);