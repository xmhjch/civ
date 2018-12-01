// draw out the connections between elements
jQuery(document).ready(function($) {
	$("#svgContainer2").HTMLSVGconnect({
    orientation: "horizontal",
    class: "treeline2",
    paths: [
      { start: "#pp3", end: "#MINING"},
      { start: "#MINING", end: "#MASONRY"},
      {start: "#ARCHERY", end:"#THE_WHEEL"},
      {start: "#ANIMAL_HUSBANDRY", end:"#TRAPPING"},
      {start: "#POTTERY", end:"#SAILING"},
      {start: "#AGRICULTURE", end:"#SAILING"},
      {start: "#TRAPPING", end:"#HORSEBACK_RIDING"},
      {start: "#MINING", end:"#BRONZE_WORKING"},
      {start: "#THE_WHEEL", end:"#MATHEMATICS"},
      {start: "#POTTERY", end:"#WRITING"},
      {start: "#POTTERY", end:"#CALENDAR"},
      {start: "#MASONRY", end:"#ENGINEERING"},
      {start: "#MATHEMATICS", end:"#ENGINEERING"},
      {start: "#WRITING", end:"#THEOLOGY"},
      {start: "#CALENDAR", end:"#THEOLOGY"},
      {start: "#BRONZE_WORKING", end:"#IRON_WORKING"},
      {start: "#IRON_WORKING", end:"#METAL_CASTING"},
      {start: "#ENGINEERING", end:"#METAL_CASTING"},
      {start: "#SAILING", end:"#OPTICS"},
      {start: "#MATHEMATICS", end:"#CURRENCY"},
      {start: "#THEOLOGY", end:"#DRAMA"},
      {start: "#THEOLOGY", end:"#PHILOSOPHY"},
      {start: "#CURRENCY", end:"#GUILDS"},
      {start: "#CURRENCY", end:"#CIVIL_SERVICE"},
      {start: "#HORSEBACK_RIDING", end:"#CIVIL_SERVICE"},
      {start: "#DRAMA", end:"#CIVIL_SERVICE"},
      {start: "#ENGINEERING", end:"#CONSTRUCTION"},
      {start: "#MATHEMATICS", end:"#CONSTRUCTION"},
      {start: "#METAL_CASTING", end:"#STEEL"},
      {start: "#METAL_CASTING", end:"#PHYSICS"},
      {start: "#GUILDS", end:"#MACHINERY"},
      {start: "#CONSTRUCTION", end:"#MACHINERY"},
      {start: "#STEEL", end:"#GUNPOWDER"},
      {start: "#PHYSICS", end:"#GUNPOWDER"},
      {start: "#CIVIL_SERVICE", end:"#EDUCATION"},
      {start: "#THEOLOGY", end:"#EDUCATION"},
      {start: "#GUILDS", end:"#CHIVALRY"},
      {start: "#CIVIL_SERVICE", end:"#CHIVALRY"},
      {start: "#OPTICS", end:"#COMPASS"},
      {start: "#CHIVALRY", end:"#ECONOMICS"},
      {start: "#PHYSICS", end:"#PRINTING_PRESS"},
      {start: "#MACHINERY", end:"#PRINTING_PRESS"},
      {start: "#ECONOMICS", end:"#BANKING"},
      {start: "#ECONOMICS", end:"#ARCHITECTURE"},
      {start: "#EDUCATION", end:"#ARCHITECTURE"},
      {start: "#COMPASS", end:"#NAVIGATION"},
      {start: "#GUNPOWDER", end:"#METALLURGY"},
      {start: "#PRINTING_PRESS", end:"#METALLURGY"},
      {start: "#ARCHITECTURE", end:"#ACOUSTICS"},
      {start: "#NAVIGATION", end:"#ASTRONOMY"},
      {start: "#EDUCATION", end:"#ASTRONOMY"},
      {start: "#ECONOMICS", end:"#SCIENTIFIC_THEORY"},
      {start: "#BANKING", end:"#STEAM_POWER"},
      {start: "#SCIENTIFIC_THEORY", end:"#STEAM_POWER"},
      {start: "#GUNPOWDER", end:"#MILITARY_SCIENCE"},
      {start: "#METALLURGY", end:"#MILITARY_SCIENCE"},
      {start: "#STEAM_POWER", end:"#INDUSTRIALIZATION"},
      {start: "#GUNPOWDER", end:"#CHEMISTRY"},
      {start: "#ASTRONOMY", end:"#ARCHAEOLOGY"},
      {start: "#ARCHITECTURE", end:"#ARCHAEOLOGY"},
      {start: "#MILITARY_SCIENCE", end:"#RAILROAD"},
      {start: "#STEAM_POWER", end:"#RAILROAD"},
      {start: "#SCIENTIFIC_THEORY", end:"#ELECTRICITY"},
      {start: "#INDUSTRIALIZATION", end:"#REPLACEABLE_PARTS"},
      {start: "#SCIENTIFIC_THEORY", end:"#REPLACEABLE_PARTS"},
      {start: "#CHEMISTRY", end:"#FERTILIZER"},
      {start: "#METALLURGY", end:"#RIFLING"},
      {start: "#ECONOMICS", end:"#RIFLING"},
      {start: "#ELECTRICITY", end:"#PLASTIC"},
      {start: "#REPLACEABLE_PARTS", end:"#PLASTIC"},
      {start: "#SCIENTIFIC_THEORY", end:"#BIOLOGY"},
      {start: "#ARCHAEOLOGY", end:"#BIOLOGY"},
      {start: "#FERTILIZER", end:"#DYNAMITE"},
      {start: "#MILITARY_SCIENCE", end:"#DYNAMITE"},
      {start: "#BIOLOGY", end:"#REFRIGERATION"},
      {start: "#REFRIGERATION", end:"#ECOLOGY"},
      {start: "#DYNAMITE", end:"#COMBUSTION"},
      {start: "#RAILROAD", end:"#COMBUSTION"},
      {start: "#ELECTRICITY", end:"#RADIO"},
      {start: "#STEAM_POWER", end:"#FLIGHT"},
      {start: "#COMBUSTION", end:"#COMBINED_ARMS"},
      {start: "#RAILROAD", end:"#BALLISTICS"},
      {start: "#FLIGHT", end:"#BALLISTICS"},
      {start: "#BALLISTICS", end:"#ROCKETRY"},
      {start: "#PLASTIC", end:"#ATOMIC_THEORY"},
      {start: "#SCIENTIFIC_THEORY", end:"#ATOMIC_THEORY"},
      {start: "#FLIGHT", end:"#ELECTRONICS"},
      {start: "#REPLACEABLE_PARTS", end:"#ELECTRONICS"},
      {start: "#PLASTIC", end:"#PENICILIN"},
      {start: "#REFRIGERATION", end:"#PENICILIN"},
      {start: "#ROCKETRY", end:"#RADAR"},
      {start: "#ELECTRONICS", end:"#RADAR"},
      {start: "#COMBINED_ARMS", end:"#COMPUTERS"},
      {start: "#ELECTRONICS", end:"#COMPUTERS"},
      {start: "#RADAR", end:"#NUCLEAR_FISSION"},
      {start: "#ATOMIC_THEORY", end:"#NUCLEAR_FISSION"},
      {start: "#COMPUTERS", end:"#STEALTH"},
      {start: "#ROCKETRY", end:"#SATELLITES"},
      {start: "#ROCKETRY", end:"#ADVANCED_BALLISTICS"},
      {start: "#ECOLOGY", end:"#TELECOM"},
      {start: "#COMPUTERS", end:"#LASERS"},
      {start: "#COMPUTERS", end:"#ROBOTICS"},
      {start: "#ROCKETRY", end:"#ROBOTICS"},
      {start: "#NUCLEAR_FISSION", end:"#MOBILE_TACTICS"},
      {start: "#TELECOM", end:"#MOBILE_TACTICS"},
      {start: "#MOBILE_TACTICS", end:"#PARTICLE_PHYSICS"},
      {start: "#ROBOTICS", end:"#NANOTECHNOLOGY"},
      {start: "#TELECOM", end:"#GLOBALIZATION"},
      {start: "#SATELLITES", end:"#NUCLEAR_FUSION"},
      {start: "#NUCLEAR_FISSION", end:"#NUCLEAR_FUSION"},
      {start: "#GLOBALIZATION", end:"#THE_INTERNET"},
      {start: "#TELECOM", end:"#THE_INTERNET"},
      {start: "#GLOBALIZATION", end:"#FUTURE_TECH"},
      {start: "#NANOTECHNOLOGY", end:"#FUTURE_TECH"},
      {start: "#NUCLEAR_FUSION", end:"#FUTURE_TECH"},
      {start: "#THE_INTERNET", end:"#FUTURE_TECH"},
      {start: "#PARTICLE_PHYSICS", end:"#FUTURE_TECH"}

    ]
  });
  $("#svgContainer").HTMLSVGconnect({
    orientation: "horizontal",
    class: "treeline1",
    paths: [
    { start: "#pp3", end: "#MINING"},
      { start: "#MINING", end: "#MASONRY"},
      {start: "#ARCHERY", end:"#THE_WHEEL"},
      {start: "#ANIMAL_HUSBANDRY", end:"#TRAPPING"},
      {start: "#POTTERY", end:"#SAILING"},
      {start: "#AGRICULTURE", end:"#SAILING"},
      {start: "#TRAPPING", end:"#HORSEBACK_RIDING"},
      {start: "#MINING", end:"#BRONZE_WORKING"},
      {start: "#THE_WHEEL", end:"#MATHEMATICS"},
      {start: "#POTTERY", end:"#WRITING"},
      {start: "#POTTERY", end:"#CALENDAR"},
      {start: "#MASONRY", end:"#ENGINEERING"},
      {start: "#MATHEMATICS", end:"#ENGINEERING"},
      {start: "#WRITING", end:"#THEOLOGY"},
      {start: "#CALENDAR", end:"#THEOLOGY"},
      {start: "#BRONZE_WORKING", end:"#IRON_WORKING"},
      {start: "#IRON_WORKING", end:"#METAL_CASTING"},
      {start: "#ENGINEERING", end:"#METAL_CASTING"},
      {start: "#SAILING", end:"#OPTICS"},
      {start: "#MATHEMATICS", end:"#CURRENCY"},
      {start: "#THEOLOGY", end:"#DRAMA"},
      {start: "#THEOLOGY", end:"#PHILOSOPHY"},
      {start: "#CURRENCY", end:"#GUILDS"},
      {start: "#CURRENCY", end:"#CIVIL_SERVICE"},
      {start: "#HORSEBACK_RIDING", end:"#CIVIL_SERVICE"},
      {start: "#DRAMA", end:"#CIVIL_SERVICE"},
      {start: "#ENGINEERING", end:"#CONSTRUCTION"},
      {start: "#MATHEMATICS", end:"#CONSTRUCTION"},
      {start: "#METAL_CASTING", end:"#STEEL"},
      {start: "#METAL_CASTING", end:"#PHYSICS"},
      {start: "#GUILDS", end:"#MACHINERY"},
      {start: "#CONSTRUCTION", end:"#MACHINERY"},
      {start: "#STEEL", end:"#GUNPOWDER"},
      {start: "#PHYSICS", end:"#GUNPOWDER"},
      {start: "#CIVIL_SERVICE", end:"#EDUCATION"},
      {start: "#THEOLOGY", end:"#EDUCATION"},
      {start: "#GUILDS", end:"#CHIVALRY"},
      {start: "#CIVIL_SERVICE", end:"#CHIVALRY"},
      {start: "#OPTICS", end:"#COMPASS"},
      {start: "#CHIVALRY", end:"#ECONOMICS"},
      {start: "#PHYSICS", end:"#PRINTING_PRESS"},
      {start: "#MACHINERY", end:"#PRINTING_PRESS"},
      {start: "#ECONOMICS", end:"#BANKING"},
      {start: "#ECONOMICS", end:"#ARCHITECTURE"},
      {start: "#EDUCATION", end:"#ARCHITECTURE"},
      {start: "#COMPASS", end:"#NAVIGATION"},
      {start: "#GUNPOWDER", end:"#METALLURGY"},
      {start: "#PRINTING_PRESS", end:"#METALLURGY"},
      {start: "#ARCHITECTURE", end:"#ACOUSTICS"},
      {start: "#NAVIGATION", end:"#ASTRONOMY"},
      {start: "#EDUCATION", end:"#ASTRONOMY"},
      {start: "#ECONOMICS", end:"#SCIENTIFIC_THEORY"},
      {start: "#BANKING", end:"#STEAM_POWER"},
      {start: "#SCIENTIFIC_THEORY", end:"#STEAM_POWER"},
      {start: "#GUNPOWDER", end:"#MILITARY_SCIENCE"},
      {start: "#METALLURGY", end:"#MILITARY_SCIENCE"},
      {start: "#STEAM_POWER", end:"#INDUSTRIALIZATION"},
      {start: "#GUNPOWDER", end:"#CHEMISTRY"},
      {start: "#ASTRONOMY", end:"#ARCHAEOLOGY"},
      {start: "#ARCHITECTURE", end:"#ARCHAEOLOGY"},
      {start: "#MILITARY_SCIENCE", end:"#RAILROAD"},
      {start: "#STEAM_POWER", end:"#RAILROAD"},
      {start: "#SCIENTIFIC_THEORY", end:"#ELECTRICITY"},
      {start: "#INDUSTRIALIZATION", end:"#REPLACEABLE_PARTS"},
      {start: "#SCIENTIFIC_THEORY", end:"#REPLACEABLE_PARTS"},
      {start: "#CHEMISTRY", end:"#FERTILIZER"},
      {start: "#METALLURGY", end:"#RIFLING"},
      {start: "#ECONOMICS", end:"#RIFLING"},
      {start: "#ELECTRICITY", end:"#PLASTIC"},
      {start: "#REPLACEABLE_PARTS", end:"#PLASTIC"},
      {start: "#SCIENTIFIC_THEORY", end:"#BIOLOGY"},
      {start: "#ARCHAEOLOGY", end:"#BIOLOGY"},
      {start: "#FERTILIZER", end:"#DYNAMITE"},
      {start: "#MILITARY_SCIENCE", end:"#DYNAMITE"},
      {start: "#BIOLOGY", end:"#REFRIGERATION"},
      {start: "#REFRIGERATION", end:"#ECOLOGY"},
      {start: "#DYNAMITE", end:"#COMBUSTION"},
      {start: "#RAILROAD", end:"#COMBUSTION"},
      {start: "#ELECTRICITY", end:"#RADIO"},
      {start: "#STEAM_POWER", end:"#FLIGHT"},
      {start: "#COMBUSTION", end:"#COMBINED_ARMS"},
      {start: "#RAILROAD", end:"#BALLISTICS"},
      {start: "#FLIGHT", end:"#BALLISTICS"},
      {start: "#BALLISTICS", end:"#ROCKETRY"},
      {start: "#PLASTIC", end:"#ATOMIC_THEORY"},
      {start: "#SCIENTIFIC_THEORY", end:"#ATOMIC_THEORY"},
      {start: "#FLIGHT", end:"#ELECTRONICS"},
      {start: "#REPLACEABLE_PARTS", end:"#ELECTRONICS"},
      {start: "#PLASTIC", end:"#PENICILIN"},
      {start: "#REFRIGERATION", end:"#PENICILIN"},
      {start: "#ROCKETRY", end:"#RADAR"},
      {start: "#ELECTRONICS", end:"#RADAR"},
      {start: "#COMBINED_ARMS", end:"#COMPUTERS"},
      {start: "#ELECTRONICS", end:"#COMPUTERS"},
      {start: "#RADAR", end:"#NUCLEAR_FISSION"},
      {start: "#ATOMIC_THEORY", end:"#NUCLEAR_FISSION"},
      {start: "#COMPUTERS", end:"#STEALTH"},
      {start: "#ROCKETRY", end:"#SATELLITES"},
      {start: "#ROCKETRY", end:"#ADVANCED_BALLISTICS"},
      {start: "#ECOLOGY", end:"#TELECOM"},
      {start: "#COMPUTERS", end:"#LASERS"},
      {start: "#COMPUTERS", end:"#ROBOTICS"},
      {start: "#ROCKETRY", end:"#ROBOTICS"},
      {start: "#NUCLEAR_FISSION", end:"#MOBILE_TACTICS"},
      {start: "#TELECOM", end:"#MOBILE_TACTICS"},
      {start: "#MOBILE_TACTICS", end:"#PARTICLE_PHYSICS"},
      {start: "#ROBOTICS", end:"#NANOTECHNOLOGY"},
      {start: "#TELECOM", end:"#GLOBALIZATION"},
      {start: "#SATELLITES", end:"#NUCLEAR_FUSION"},
      {start: "#NUCLEAR_FISSION", end:"#NUCLEAR_FUSION"},
      {start: "#GLOBALIZATION", end:"#THE_INTERNET"},
      {start: "#GLOBALIZATION", end:"#FUTURE_TECH"},
      {start: "#TELECOM", end:"#THE_INTERNET"},
      {start: "#NANOTECHNOLOGY", end:"#FUTURE_TECH"},
      {start: "#NUCLEAR_FUSION", end:"#FUTURE_TECH"},
      {start: "#THE_INTERNET", end:"#FUTURE_TECH"},
      {start: "#PARTICLE_PHYSICS", end:"#FUTURE_TECH"}

    ]
  });

  if($("#svgContainer").isTouchScreen()){
    $("#svgContainer").css({opacity:0.5});
    $("#svgContainer2").css({opacity:0.2});
  }

});



// decide whether item is in screen and fits specific criteria
$.fn.isInView = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var enter = viewportTop + ($(window).height())*0.5;

  // return elementTop > viewportTop && elementTop < enter;
  return elementTop < enter;
};

$.fn.isInScreen = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
	var enter = viewportTop + ($(window).height())*0.75;

  return elementTop < enter;
};

$.fn.isTouchScreen = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
	

  return elementTop < viewportBottom;
};



$.fn.isPathIn = function(){
	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this)[0].getBoundingClientRect().height;
  	var linel = $(this)[0].getTotalLength();


  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();
  	var midpoint = viewportTop + $(window).height()*0.5;
  	
  	return elementBottom >= midpoint && elementTop <= midpoint;

}

$.fn.isMidpointPass = function(){
	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this)[0].getBoundingClientRect().height;
  	var linel = $(this)[0].getTotalLength();


  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();
  	var midpoint = viewportTop + $(window).height()*0.5;
  	
  	return elementBottom < midpoint;

}

$.fn.isPathScreen = function(){
	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this)[0].getBoundingClientRect().height;
  	var linel = $(this)[0].getTotalLength();


  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height()+2000;
  	var midpoint = viewportTop + $(window).height()*0.5;
  	
  	return elementTop < viewportBottom && elementTop > midpoint;

}

$.fn.isTooFar = function(){
	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this)[0].getBoundingClientRect().height;
  	var linel = $(this)[0].getTotalLength();


  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height()+1000;

  	
  	return elementTop > viewportBottom;
}


// finding at the given horizontal line, how long should the svg line be
$.fn.findL = function(y){
	var linel = $(this)[0].getTotalLength();
	var l = linel/2;

	var cor; 
	var cx;
	var cy;

	var start = 0;
	var end = $(this)[0].getTotalLength();
	var u = end/2;

	var realh = $(this)[0].getBoundingClientRect().height;
	var svgh = $(this)[0].getPointAtLength(end).y - $(this)[0].getPointAtLength(0).y;

	var realy = (svgh/realh)*y + $(this)[0].getPointAtLength(0).y;

	var count = 0;

	while(u <= end && u >= start){
		cor = $(this)[0].getPointAtLength(u);
		cx = cor.x;
		cy = cor.y;

		if(realy + 0.5 >= cy && realy -0.5 <= cy){
			

			return u;

		}else if(cy > realy+0.5){
			end = u;
		}else{
			start = u;
		}
		u = (start + end)/2;
		count = count + 1;
		if(count == 100){
			
			return u;
		}


	}
	

}





$(window).on('resize scroll', function() {

  // update the icon animations
  $('.tech').each(function() {
      var id = $(this).attr('id');

      if($(this).isTouchScreen()){
      	if ($(this).isInScreen()) {
	    	if($(this).isInView()){
	    		$(this).addClass('light');
	    		$(this).children("img.techimg").addClass('light');
	    		$(this).children("div.techcaption").addClass('light');


	    	}else{
	    		$(this).addClass('grey');


	    		
	    	}
      
    	}else{
    		$(this).children("img.techimg").addClass('grey');

    	}
      }
    
  });

  // update the tree animations
  $('.treeline1').each(function(){

  	if($(this).attr('class').split(' ').includes('scrolled') || $(this).isTooFar()){
  		var a = 1;

  	}else{
  		var elementTop = $(this).offset().top;
	  	var elementBottom = elementTop + $(this)[0].getBoundingClientRect().height;
	  	var linel = $(this)[0].getTotalLength();


	  	var viewportTop = $(window).scrollTop();
	  	var viewportBottom = viewportTop + $(window).height();
	  	var midpoint = viewportTop + $(window).height()*0.5;
	  	$(this).css({strokeDasharray:linel, strokeDashoffset:linel});

	  	var dist = 0;
	  	var finD = 0;


	  	if($(this).isPathIn()){

	  		dist = midpoint - elementTop;
	  		if(dist>$(this)[0].getBoundingClientRect().height){
	  			dist = $(this)[0].getBoundingClientRect().height;

	  		}else if (dist < 0){
	  			dist = 0;
	  		}

	  		finD = $(this).findL(dist);


	  		//console.log(linel, finD);
	  		$(this).css({strokeDashoffset:linel - finD});



	  		
	  		
	  	}else if($(this).isPathScreen()){

	  		$(this).css({strokeDashoffset:linel});
	  	}else{

	  		$(this).css({strokeDashoffset:0});

	  	}

	  	if($(this).isMidpointPass()){
	  		$(this).addClass('scrolled');
	  	}


  	}
  	
  });


  var p5Top = $('.p5').offset().top+600;
  var p5H = $('.p5')[0].getBoundingClientRect().height-1000;
  var p5Bottom = p5Top + p5H;



  var vTop = $(window).scrollTop();
  var vBottom = vTop + $(window).height();
  var vH = $(window).height();

  var vCenter = vTop + $(window).height()*0.5;

  var sH = $('.tlscale')[0].getBoundingClientRect().height;

  if(vCenter<= p5Bottom && vCenter >= p5Top){
    var dist = ((vCenter - p5Top)/p5H)*vH;
    var dist1 = (sH - vH)*((vCenter - p5Top)/p5H)
    $('.tlMove').css({transform:'translate(0,'+dist+'px)'});
    $('.tlscale').css({transform:'translate(0,-'+dist1+'px)'});
  }

});












