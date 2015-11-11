/*$(function (argument) {
	responsive();
	$('.cat-container').click(function (argument) {
		$(this).toggleClass('cat-container-close');
		$('.arch-container').toggleClass('blur');
		$('.aside-left-menu').toggleClass('aside-open').toggleClass('aside-close');
		playaudiofade();
	});
	$('.arch-box').mouseenter(function (argument) {
		$('.arch-box').not(this).addClass('arch-box-blur');
		$(this).addClass('box-hover');
	});
	$('.arch-box').mouseleave(function (argument) {
		$('.arch-box').not(this).removeClass('arch-box-blur');
		$(this).removeClass('box-hover');
	});
	$('section.arch-thumbs').click(function (e) {
		var container = $(".cat-container,.left-menu-ul");

		    if (!container.is(e.target) // if the target of the click isn't the container...
		        && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
		        if($('section.arch-thumbs').find('div.arch-container.blur').length != 0){
		        	$('div.arch-container.blur').removeClass('blur');
					$('.aside-left-menu').toggleClass('aside-open').toggleClass('aside-close');
					playaudiofade();
		        }
		    }
	});
	//move thumbs
	$('.rightHidden-pin').mouseenter(function (argument) {
		clearInterval(intv);
		if(num > 0){
			//
		}else{
			prevS();
			intv = setInterval(function (argument) {
				prevS();	
			},800)
		}
	});
	$('.leftHidden-pin,.rightHidden-pin').mouseleave(function (argument) {
		clearInterval(intv);
	});
	$('.left-arrow').click(function (argument) {
		nextS();
	});
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       nextS();
	   } else {
	       prevS();
	   }
	   lastScrollTop = st;
	});
	$('.right-arrow').click(function (argument) {
		if(num > 0){
			//
		}else{
			prevS();
		}
	});
	$('.leftHidden-pin').mouseenter(function (argument) {
		nextS();
		clearInterval(intv)
		intv = setInterval(function (argument) {
			nextS();	
		},800)
	});


	
	//category
	$('.left-menu-ul li').click(function (argument) {
		var Cat = $(this).text();
		if(Cat != 'All'){
			$(".arch-box").addClass('box-off');
			$(".arch-box[data-category='" + Cat +"']").removeClass('box-off');
			$('.dateBox').fadeIn(300);
			$('.dateBox').each(function (argument) {
				var archBox = $(this).find(".arch-box").length;
				var boxOff = $(this).find(".arch-box.box-off").length;
				
				if(archBox == boxOff){
					$(this).fadeOut(300);
				}
			})
		}else{
			$('.dateBox').fadeIn(300);
			$(".arch-box").removeClass('box-off');
		}
		num=-1;
		$('.arch-container').css('margin-left','0');
	});
	$('.arch-box').mouseenter(function (argument) {
		var text = $(this).attr('data-name');
		$('.title').addClass('title-show').find('h3').text(text);
	});
	$('.arch-box').mouseleave(function (argument) {
		$('.title').removeClass('title-show');
	});
});
var intv;
var num = 0;
function nextS (argument) {
	w = $('.arch-box').width();
		allw = $('.arch-box').length * w;
		f = Math.floor($(document).width() / w);
		if(num >= 0){
			$('.arch-container').css('margin-left','100px');
			setTimeout(function (argument) {
				$('.arch-container').css('margin-left','0px');
			},200);
		}else{
			++num;
			$('.arch-container').css('margin-left',(((w + 15))*num)+'px');
		}
}
function prevS (argument) {
		w = $('.arch-box').width();
		--num;
		allw = ($('.arch-box').length * w);
		f = Math.floor($(document).width() / w);
		if($('.arch-box').length - (-num) <= (f-1)){
			$('.arch-container').css('margin-left',($('.arch-container').width()+(-w))+'px');
		}
		if($('.arch-box').length - (-num) <= (f-10)){
			num = 0;
		}
		$('.arch-container').css('margin-left',(((w + 15))*num)+'px');
}
$(window).resize(function (argument) {
	responsive();
})
function responsive (argument) {
	var top = $('.arch-container').offset().top;
	$('.title').css('margin-top',(top/2)+'px');
}*/