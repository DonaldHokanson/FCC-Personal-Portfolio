var main = function(){
	$('#project1').hover(
		function(){
			$('#project1 h2').show();
		}, function(){
			$('#project1 h2').hide();
		});

	$('#project2').hover(
		function(){
			$('#project2 h2').show();
		}, function(){
			$('#project2 h2').hide();
		});	

	$('#project3').hover(
		function(){
			$('#project3 h2').show();
		}, function(){
			$('#project3 h2').hide();
		});

	$('#project4').hover(
		function(){
			$('#project4 h2').show();
		}, function(){
			$('#project4 h2').hide();
		});

};

$(document).ready(main)
$(document).on('page:load', main)