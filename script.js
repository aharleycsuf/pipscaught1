$(document).ready(function(){
 /* Uses counterup.js */
  $('.counter').counterUp({
		delay: 20,
    time: 2000
  });
  
  /* Uses waypoints.js */
  $('.graph').waypoint(function() {
		$('.graph').addClass('grow');
	}, { offset: '100%' });
});