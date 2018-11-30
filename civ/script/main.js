
// particlesJS.load('particles-js', '../lib/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

var bgdownW1 = "0%";
var bgdownW2 = "0%";
var bgdownM1 = "0%";
var bgdownM2 = "0%";




function bglineMover(){
	$(this).animate({'stroke-width': '0.5vw'}, 500);
	console.log("aaaaaaaabb");
}

function bglineMout(){
	$(this).animate({'stroke-width': '0.4vw'}, 500);
	console.log("bbccc");
}




function getBgdownPercent(){

	var baseW = 12;
	if($(window).width() <= 720){
		baseW = 18.75;
	}else if($(window).width() <= 1024){
		baseW = 15;
	}

	bgdownW1 = (baseW*1.25).toString()+'%';
	bgdownW2 = baseW.toString()+'%';
	bgdownM1 = '-' + (baseW*1.25/2).toString() + '%';
	bgdownM2 = '-' + (baseW/2).toString() + '%';

	$('.bgDown').css({width:bgdownW2, 'margin-left': bgdownM2});

}



// $(document).ready(function(){
// 	$('.bgline').animate({'stroke-width':'7vw'}, 500);
// });

$(window).on('resize', function(){
	var baseW = 12;
	if($(window).width() <= 720){
		baseW = 18.75;
	}else if($(window).width() <= 1024){
		baseW = 15;
	}
	

    bgdownW1 = (baseW*1.25).toString()+'%';
	bgdownW2 = baseW.toString()+'%';
	bgdownM1 = '-' + (baseW*1.25/2).toString() + '%';
	bgdownM2 = '-' + (baseW/2).toString() + '%';

	$('.bgDown').css({width:bgdownW2, 'margin-left': bgdownM2});
});

$(document).ready(function(){

	getBgdownPercent();


	//$('body').addClass("stopScroll");

	// $(".bgline").hover(function(){
	// 	$(this).addClass("prepare1");
	  
	//   $(this).addClass("ani1");
	  
	// });

	// $(".bgline").on("transitionend",
 //    function() {
 //    	$(this).removeClass("prepare1");
 //    	$(this).addClass("prepare2");
 //        $(this).removeClass("ani1");

 //    });
 	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	var videoTop = $('.videoHolder').offset().top;
  	var videoBottom = videoTop + $('.videoHolder').outerHeight();

  	if(videoTop >= viewportTop && videoBottom <= viewportBottom){
  		$('.p1down').addClass('ready');
  		window.setTimeout(function(){$('body').removeClass("stopScroll");}, 3000);


  	}




    $(".bgline").hover(function(){
	  $(this).addClass("bglineAnimate");
	  
	});

	$(".bgline").on("animationend",
    function() {
        $(this).removeClass("bglineAnimate");
    });



    




    $(".p1down").hover(function(){
    	getBgdownPercent();
	  $('.bgline').addClass("bglineDash");
	  $(this).animate({opacity: 1, width: bgdownW1, 'margin-left': bgdownM1}, 200);  
	}, function(){
		$('.bgline').removeClass("bglineDash");
		$(this).animate({opacity: 0.8, width: bgdownW2, 'margin-left': bgdownM2}, 200);  
	});

	$(".p2down").hover(function(){
    	getBgdownPercent();

	  $(this).animate({opacity: 1, width: bgdownW1, 'margin-left': bgdownM1}, 200);  
	}, function(){

		$(this).animate({opacity: 0.8, width: bgdownW2, 'margin-left': bgdownM2}, 200);  
	});


	$(".quote1").on("animationend",
    function() {
        $(this).removeClass("anim-typewriter1");
        $(this).addClass("anim-typew-end");
        $(".quote2").addClass("anim-typewriter2");
    });
    $(".quote2").on("animationend",
    function() {
        $(this).removeClass("anim-typewriter2");
        $(this).addClass("anim-typew-end");
        $(".quote3").addClass("anim-typewriter3");
    });
    $(".quote3").on("animationend",
    function() {
        $(this).removeClass("anim-typewriter3");
        $(this).addClass("anim-typew-end");
        $(".quote4").addClass("anim-typewriter4");
    });
    $(".quote4").on("animationend",
    function() {
        $(this).removeClass("anim-typewriter4");
        $(this).addClass("anim-typew-end");
        $('body').removeClass("stopScroll");
		$('body').addClass("showScroll");
		$('.video').addClass("scrollEd");
        
    });


});






$(document).on("click", ".p1down", function(){
	$('body').removeClass("stopScroll");
	$('.bgline').removeClass("bglineDash");
	$("#particles-js").css({filter: 'brightness(100%) blur(0px)'});
	$(".p2linesUpper").animate( { opacity:1}, 3000);
	$("html,body").animate( { scrollTop: $(window).height()}, 2000, "easeOutQuart");
	$(".p2linesLower").animate( { opacity:1}, 5000);



	$('.quote1').addClass("anim-typewriter1");
	
	//$('body').addClass("stopScroll");
});

$(document).on("click", ".p2down", function(){
	$("html,body").animate( { scrollTop: $('.p3').offset().top}, 2000, "easeOutQuart");
		//$('body').addClass("stopScroll");
	$('body').removeClass("stopScroll");
	$('body').addClass("showScroll");
	$('.p2').addClass("scrollEd");
});



$(document).on("animationend", function(e){
	if (e.originalEvent.animationName == "typewriterD"){

		$(".p2down").css({opacity:1});
		
	}
});



$(window).on('scroll', function(){
	

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	var videoTop = $('.videoHolder').offset().top;
  	var videoBottom = videoTop + $('.videoHolder').outerHeight();

  	var p2Top = $('.p2').offset().top;
  	var p2Bottom = p2Top + $('.p2').outerHeight();
  	console.log(viewportTop, p2Bottom, viewportBottom);

  	if(videoBottom > viewportTop && videoBottom < viewportBottom && !$('.videoHolder').attr('class').split(' ').includes('scrollEd')){

  		$('body').addClass("stopScroll");
		$('body').removeClass("showScroll");
		$('.bgline').removeClass("bglineDash");
		$("#particles-js").css({filter: 'brightness(100%) blur(0px)'});
		$(".p2linesUpper").animate( { opacity:1}, 3000);
		$("html,body").animate( { scrollTop: $(window).height()}, 2000, "easeOutQuart");
		$(".p2linesLower").animate( { opacity:1}, 5000);

		
		$('.videoHolder').addClass("scrollEd");



		$('.quote1').addClass("anim-typewriter1");
		console.log("ffffff");
		
  	}
  	if(p2Bottom > viewportTop && p2Bottom < viewportBottom && !$('.p2').attr('class').split(' ').includes('scrollEd')){

  		

		$("html,body").animate( { scrollTop: $('.p3').offset().top}, 2000, "easeOutQuart");
		//$('body').addClass("stopScroll");
		$('body').removeClass("stopScroll");
		$('body').addClass("showScroll");
		$('.p2').addClass("scrollEd");
		
		$(".ip1").animate( { opacity:1}, 3000);
		window.setTimeout(function(){$(".ip2").animate( { opacity:1}, 3000);}, 2000);
		window.setTimeout(function(){$("#p3down").animate({opacity:0.7}, 3000);}, 4000);
		window.setTimeout(function(){$("#svgContainer").animate({opacity:0.5}, 3000);}, 4500);
		window.setTimeout(function(){$("#svgContainer2").animate({opacity:0.2}, 3000);}, 4500);
		

		
  	}



  	

});















