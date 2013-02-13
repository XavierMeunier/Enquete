/*----------------------------------
*							
*	Version: 1.0				  
*	Date: 11/02/2013			  
*	Author: Romain GAZIELLY	  
*	Mail: romain.gazielly@gmail.com
*	Website: www.romaingazielly.com
*								  
*----------------------------------*/

/*-------------------
	Home
-------------------*/
$(function() {

	h = $(window).height();
	w = $(window).width();
	myZone = 'home';

	$('#container').css({'width': Math.round(w*2), 'height': Math.round(h*2)});
	$('#container section').css({'width': Math.round(w), 'height': Math.round(h)});
	$('#container section#home').css({'margin-left': Math.round(w/2)});
	$('#container').css({marginLeft:Math.round(-w/2)+'px', marginTop:Math.round(-h)+'px'});
	$(window).resize(function(){ 
	    redimensionnement();
	}); 

	$('nav div a').on('click', function(e){
		e.preventDefault();
		$this = $(this);
		destination = $this.attr('href').substr(1);
		console.log(destination);
		$('nav div').removeClass();
		$this.parent().addClass('active');
		redimensionnement();

		if(destination == 'home') {
			
			/*if($('.redband1').attr('width')==0){
				$('.redband1').delay(500).animate({ width:'0'+'%'},500,function(){
					//$('.redband2').animate({ width:'50'+'px'},500,function(){		
				});*/
			$('#container').animate({ marginLeft:Math.round(-w/2)+'px', marginTop:Math.round(-h)+'px'});
			myZone = 'home';
		}
		else if(destination == 'plus-enquetes') {
			$('#container').animate({ marginTop:'0px', marginLeft:Math.round(-w)+'px' });
			myZone = 'plus-enquetes';
		}
		else if(destination == 'equipe') {
			$('#container').animate({ marginLeft:'0px', marginTop:'0px' });
			myZone = 'equipe';
		}
		return destination;
	});
});

function redimensionnement() {
	if (document.all) {
		h=document.body.clientHeight;
		w=document.body.clientWidth;
	} else {
		w=window.innerWidth;
		h=window.innerHeight;
	}
	$('#container').css({'width': Math.round(w*2), 'height': Math.round(h*2)});
	$('#container section').css({'width': Math.round(w), 'height': Math.round(h)});
	$('#container section#home').css({'margin-left': Math.round(w/2)});

	if(myZone == 'equipe') {
		$('#container').css({ marginLeft:'0px' });
	}
	else if(myZone == 'home') {
		$('#container').css({marginTop:Math.round(-h)+'px', marginLeft:Math.round(-w/2)+'px'});
	}
	else if(myZone == 'plus-enquetes') {
		$('#container').css({marginLeft:Math.round(-w)+'px'});
	}
}
