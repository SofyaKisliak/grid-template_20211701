
/*$(document).ready(function(){
	$('.header-navbar__btn').on('click', function(){
		$(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
	});
});*/

/*$(document).ready(function(){
	$('.header-navbar__btn').on('click', function(){
		$(this).toggleClass('active');
    $('.header-navbar__list').stop(true,true).slideToggle('active');
	});
});*/

$(document).ready(function () {

	$('.header-navbar__btn').on('click', function () {
	  $(this).toggleClass('active');
	  $('.header-navbar__list').toggleClass('active');
	  //$('.active').toggleClass('active');
	});
  
  });
