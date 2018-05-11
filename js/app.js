$(document).ready(function(){

	//document.getElementById('videoFrame').src = "not.found/404";
	var url1 = $('.modal iframe').attr('src'); //для видоса(паузи)

	$('#play, .play').click(function(event) {
		event.preventDefault();
		$('.overlay').fadeIn(400).css('display', 'block');
		$('.modal').show('400');//.fadeIn(400).css('display', 'block');

	});
	$('.closed, .overlay').click(function(event) {
		$('.modal').hide('400');
		$('.overlay').fadeOut('400').css('dispay', 'none');
		$('.modal iframe').attr('src', 'not.found/404'); //для видоса(паузи)
		$('.modal iframe').attr('src', url1); //для видоса(паузи)
	});

	$(".button, footer a").on("click", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});

	$('#question .list .colum span').click(function() {
    
    var findArticle = $(this).next('div');
    var findWrapper = $(this).closest('.list');
    
    if (findArticle.is(':visible')) {
      findArticle.slideUp(500);
      findWrapper.find('li');
    }
    else {
      findWrapper.find('div').slideUp(500);
      findWrapper.find('li');
      findArticle.slideDown(500);
      
    }
   });
});