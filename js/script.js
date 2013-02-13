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
	divHome = Math.round((h)/6);
	divHomeId = 0;

	$('#container').css({'width': Math.round(w*2), 'height': Math.round(h*2)});
	$('#container section').css({'width': Math.round(w), 'height': Math.round(h)});
	$(window).resize(function(){ 
	    redimensionnement(); 
	}); 

	$('#container section').on('click', function(){
		$this = $(this);
		zone = $this.attr('id');

		if(zone == 'zone1') {
			$('#container').animate({ marginLeft:-w+'px'});
		}
		else if(zone == 'zone2') {
			$('#container').animate({ marginTop:-h+'px', marginLeft:'0px'});
		}
		else if(zone == 'zone3') {
			$('#container').animate({ marginLeft:-w+'px', marginTop:-h+'px' });
		}
		else if(zone == 'zone4') {
			$('#container').animate({ marginTop:'0px', marginLeft:'0px'});
		}
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
}
