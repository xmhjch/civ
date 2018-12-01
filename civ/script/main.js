




// only display animation for title when page fully loaded
$(window).on('load', function(){
	window.setTimeout(function(){$('.p1text').addClass('p1t_ani');}, 1000);
	
});


// ready and cut the videos 
$(document).ready(function(){




 	var viewportTop = $(window).scrollTop();
 	var viewH = $(window).height();
 	var viewW = $(window).width();
  	var viewportBottom = viewportTop + viewH;


  	$('#v1').css({clip: 'rect('+ viewH*0.2 +'px,'+ viewW*0.8+'px,'+viewH*0.8+'px,'+viewW*0.2+'px)'});
  	$('#v2').css({clip: 'rect('+ viewH*0.1 +'px,'+ viewW*0.4+'px,'+viewH*0.4+'px,'+viewW*0.1+'px)'});
  	$('#v3').css({clip: 'rect('+ viewH*0.65 +'px,'+ viewW*0.9+'px,'+viewH*0.9+'px,'+viewW*0.65+'px)'});



});







// control the animation for each part of the screen when they enter and exit
var lastScrollTop = 0;
var scrollD = 0;

$(window).on('scroll resize', function(){
	var st = $(this).scrollTop();

   if (st > lastScrollTop){
       // downscroll code
       scrollD = st - lastScrollTop;
   } else {
      // upscroll code
      scrollD = lastScrollTop - st;
   }
   
	

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();
  	var vH = $(window).height();
  	var vW = $(window).width();


  	var p2Top = $('.p2').offset().top;
  	var p2Bottom = p2Top + $('.p2').outerHeight();



  	var p1ttTop = $('.p1text').offset().top;
  	var p1ttBottom = p1ttTop + $('.p1text').outerHeight();

  	if(p1ttTop<viewportBottom-$(window).height()*0.7){

  		if (st > lastScrollTop){
       		$('.p1text').removeClass('p1t_ani');
	   } else {
	   		$('.p1text').addClass('p1t_ani');
	   }
  		
  	}
  	
  	var v2top = $('#v2').offset().top;

  	if((p2Bottom - p2Top)/2 + p2Top <=viewportBottom && (p2Bottom - p2Top)/2 + p2Top >= viewportTop){
  		$('.bgVideo').each(function(){

       		$(this)[0].play();

		})

  	}

  	var p3top = $('.p3').offset().top;
  	var p5top = $('.p5').offset().top;
  	if(p3top<viewportTop+$(window).height()*0.5){


       	$('.introp').addClass('iplight');

  		
  	}

  	if(p3top<viewportTop- $(window).height()*0.1){

  		if (st > lastScrollTop){
       		$('.introp').removeClass('iplight');
	    } else {
	   		$('.introp').addClass('iplight');
	    }
  		
  	}

  	if(p5top < viewportBottom - $(window).height()*0.5){
  		$('.timeline').addClass('light');

    	$("#svgContainer").css({opacity:0.5});
    	$("#svgContainer2").css({opacity:0.2});
  
  	}else{
  		$('.timeline').removeClass('light');

  	}












  	lastScrollTop = st;



  	

});















