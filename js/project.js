/*$(document).ready(function (argument) {
	$('.info-bt,svg.close-bt').click(function (argument) {
		infoToggle();
	});
	$('.left-arrow').click(function (argument) {
		PrevPic();
	});
	$('.right-arrow').click(function (argument) {
		NextPic();
	});
	$('#all-pic').text($('.Slide-handle').length);

})
function infoToggle (argument) {
	//$('.info-bt').toggleClass('info-bt-down');
	$('.info-box').toggleClass('infobox-open');
	$('.img-gallery').toggleClass('img-gallery-off');
	//$('.ptoject-title').toggleClass('ptoject-title-down');
	$('.info-bar').toggleClass('info-bar-down');
	$('.big-title').toggleClass('big-title-down');
}
function NextPic(){
	FirstPrv = false;
	$('#num-pic').text($('.Slide-handle.active-img').index()+1);
	var currentPic = $('.active-img');
	var nextPic = currentPic.next();
  	if(nextPic.length === 0) {
      nextPic = $('.Slide-handle').first();
    }
  	currentPic.removeClass('active-img');
 	nextPic.addClass('active-img');
	var slidenum = nextPic.index();
}
var FirstPrv = true;
function PrevPic(){
	$('#num-pic').text($('.Slide-handle.active-img').index()+1);
	var currentPic = $('.active-img');
	var prevPic = currentPic.prev();
		if(prevPic.length === 0) {
		prevPic = $('.Slide-handle').last();
    }
	currentPic.removeClass('active-img');
	prevPic.addClass('active-img');
	var slidenum = prevPic.index();
	$('.js_slide_thumb').removeClass('js_slide_thumb_open');
	$('.js_slide_thumb').eq(slidenum).addClass('js_slide_thumb_open');
}*/