//logo enter//
var menuLoaded;
$(function (argument) {
	//history.pushState("", "", "home");
	$('.Enter-txt').mouseenter(function (argument) {
		$('#logo').addClass('logoBlur');
	}).mouseleave(function (argument) {
		$('#logo').removeClass('logoBlur');
	})
	$('#enter').click(function (argument) {
		enter();
		menuLoaded();

	});

	menuLoaded = function (){	
	var canvas, ctx, w, h;
 	var h = window.innerHeight;
 	var w = window.innerWidth;
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	canvas.width = w;
	canvas.height = h;
	canvas.top = 25;
	canvas.length = 25;
	ctx = canvas.getContext('2d');

	function paintCanvas(){
		ctx.fillStyle = "rgba(255,255,255,1)";
		ctx.fillRect(0,0,w,h);
	}
	function particle(r,off,c){
		this.x = Math.random()*w;
		this.y = Math.random()*h*(ch2Line);
		this.r = r;
		this.offset = Math.random()*800+off;
		this.draw = function(){
			if(r==2){
				this.color = "#F7931D"
			}
			else{this.color = "rgba(0,0,0,"+c+")"}
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
			ctx.fill();
			if(c!=0){
				if (menuch <= menuArray.length) {
					//menuNum[menuch] = this.x;
					menuch++;
				}else{
					menuch = 0;
				}
				var sW = $(window).width();
				var sH = $(window).height();
				var firsW = 0;
				if (r == 2){
					menu(this.x+0,this.y+3);
				}
				

			}

		}		
	}
	var TeXt;
	function menu (x,y) {
		if(isMobile != true){
			$('nav span:nth-child('+(i+1)+')').css({'top':y+'px','left':x+'px'});	
		}else{
			$('.main-nav').addClass('main-nav-responsive');
		}
		
	}

	var menuNum = [];
 	var menuch = 0;
 	var layer1Stop = false;
 	var menuArray = ['Architecture','Portfolio','Awards','Media','Say Hello'];
	var layer_1 = [],
	layer_2 = [],
	layer_3 = [];
	var xMotion = 0;
	var yMotion = 0;
	var ShapeX = 1;
	var ShapeY = 1;
	var layer_1_num = 10;
	var layer_2_num = 20;
	var layer_3_num = 30;
	var ch2Line = 1;
	var timer;
	function particleNum(){
		for(i=0;i<layer_1_num;i++){
			layer_1.push(new particle(2,950,1060));
		}
		for(i=0;i<layer_2_num;i++){
			layer_2.push(new particle(1,900,130));
		}
		for(i=0;i<layer_3_num;i++){
			layer_3.push(new particle(1,1500,70));
		}
	}
	particleNum();
	function draw(){
		for(i=0;i<layer_1.length;i++){
			var p = layer_1[i];
			p.draw();
			update(p);
			checkBounds(p,1);
			for(var j=i+1;j<layer_3.length;j++){
				p2 = layer_3[j];
				distance(p,p2,w*2.5);
			}
			
		}
		for(i=0;i<layer_2.length;i++){
			var p = layer_2[i];
			p.draw();
			update(p);
			checkBounds(p);
			for(var j=i+1;j<layer_3.length;j++){
				p2 = layer_3[j];
				distance(p,p2);
			}
		}
		for(i=0;i<layer_3.length;i++){
			var p = layer_3[i];
			p.draw();
			update(p);
			checkBounds(p);
			for(var j=i+1;j<layer_3.length;j++){
				p2 = layer_3[j];
				distance(p,p2);
			}
		}
	}
	function update(p){
		p.x = p.x - (mouse.x)/p.offset;
		p.y = p.y - (mouse.y)/p.offset;
	}
	function checkBounds(p,m){
		if(!m){
			if(p.x > w){
				p.x =0;
			}
			else if(p.x < 0){
				p.x =w;
			}
			if(p.y > h){
				p.y =0;
			}
			else if(p.y < 0){
				p.y = h;
			}
		}else{
			if(p.x > (w - 200)){
				p.x =200;
			}
			else if(p.x < 200){
				p.x =(w - 200);
			}
			if(p.y > (h - 200)){
				p.y =200;
			}
			else if(p.y < 200){
				p.y = (h - 200);
			}
		}
	}

  var minDist = w*2;

	function distance(p1,p2){
		var dist;
		var dx = p1.x - p2.x;
		var dy = p1.y - p2.y;
		dist = Math.sqrt(dx*dx + dy*dy);

		if (dist <= minDist){
			ctx.beginPath();
			ctx.strokeStyle = "rgba(0,0,0,"+ (.16-dist/minDist) +")";
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.stroke();
			ctx.closePath();
		}
	}

	var mouse ={
		x:0,
		y:0
	}

	document.addEventListener('mousemove', function(e){
	    mouse.x = (e.clientX -w/2|| e.pageX -w/2)*4.2;
	    mouse.y = (e.clientY -h/2|| e.pageY -h/2)*4.2;
	}, false);

	function animate(on){
		paintCanvas();
		draw();
		if(isMobile != true){
			requestAnimationFrame(animate);
		}
		
	}
	animate();
	}

});
var isMobile = false; //initiate as false
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
function enter (argument) {
	fullscreen();
	$('#enter').addClass('enter-off');
	$('footer').addClass('footer-on');
	setTimeout(function (argument) {
		$('#enter').remove();
	},30000);
	
}

var historyA =0;
$(document).ready(function(){

 	$('.coloniContainer').click(function () {
 		$('.loading').addClass('loading-on');
 		var index = $(this).attr('data-menu');
		changePages(index);
 	});
 	$('.coloniContainer').mouseenter(function (argument) {
 		$('.coloniContainer').find('p').addClass('navBlur')
 		$(this).find('p').removeClass('navBlur');
    });
    $('.coloniContainer').mouseleave(function (argument) {
    	$('.coloniContainer').find('p').removeClass('navBlur');
	});
});
$( document ).on( "click", ".close-container", function() {
	clearInterval(timer);
	if(!$(this).hasClass('close-fullsize')){
		if (historyA >= 2) {
			changePages(lastPage);
			historyA -= 2;
		}else{
			closecontainer();
			historyA = 0;
		}
	}

});
var currentPage;
var lastPage;
var sumenu = false;

function changePages (argument,tag1) {
				historyA ++;
				lastPage = currentPage;
				currentPage = argument;
				if(tag1){
					sumenu = true;
				}else{
					sumenu = false;
				}
				$('footer').removeClass('footer-on');
				$('.coloniContainer[data-menu='+argument+']').addClass('menuvisited')
			 		$('.main-nav').addClass('nav-Blur');
			 		$('.menu-c-container').removeClass('btshow');
		 		$('footer').removeClass('footer-on');
		 		var Countainer = $('.container');
		 		$('.loading').addClass('loading-on');
		 		$('.container').addClass('containerhide').removeClass('container-center');
 		switch (argument) {
		    case 'architecture':
		        getContent('architecture/thumbnails.php?x=1','architecture');
			    //history.pushState("", "", "architecture");
		        break;
		    case 'portfolio':
		        getContent('portfolio/index.php?x=1','portfolio');

		        break;
		    case 'project':
		        getContent('project/project.php?x=1&p='+tag1,'project',tag1);
		        break;
		    case 'contact':
		        getContent('contact/index.php?x=1','contact');
		        break;
		    case 10:
		        getContent('architecture/project.php?x=1&p='+tag1,'project');
		        break;
		}
}
		function getContent(filename,menu,tag1)
        {
            $.ajax({
                url: filename,
                type: 'GET',
                dataType: 'html',
                beforeSend: function() {
		 			$('body').find('canvas').last().addClass('canvasblur');
		 			$("head").find('#css-bind').remove();
		 			$("head").find('#js-bind').remove();
                },
                success: function(data, textStatus, xhr) {
                	setTimeout(function (argument) {

                	    $('.container').empty();
	                	$('.container').append('<div class="close-container"><img src="img/menu.svg"></div>');
                        $('.container').append(data).imagesLoaded().then(function(){
                        	$('.loading').removeClass('loading-on');
                        	setTimeout(function (argument) {
                        		$('body').find('canvas').last().addClass('canvasblur2');
					 			$('.container').removeClass('containerhide').addClass('container-center');
					 				window[menu]();
					 			//$("head").append('<link id="css-bind" rel="stylesheet" type="text/css" href="css/'+menu+'.css" />').append('<script id="js-bind" type="text/javascript" src="js/'+menu+'.js"></script>');
					 			if(tag1){
			                		//history.replaceState("", "", ""+menu+"-"+menu+'.php?p='+tag1);
			                	}else{
			                		//history.replaceState("", "", ""+menu);
			                	}
					 		},500);
                        	playaudiofade(700);
                        }); 
                	},800);

                	
                },
                error: function(xhr, textStatus, errorThrown) {
                    $('.container').html(textStatus);
                }
            });
        }
        function closecontainer (argument) {        	
			 	$('.main-nav').removeClass('nav-Blur');
			 		$('.menu-c-container').toggleClass('btshow');
			 		$('.container').addClass('containerhide').removeClass('container-center');
			 		$('body').find('canvas').last().removeClass('canvasblur').removeClass('canvasblur2');
			 		$('.loading').removeClass('loading-on');
			 		setTimeout(function (argument) {
			 			$('footer').addClass('footer-on');
			 			$('.container').empty();
			 			$('#css-bind,#js-bind').remove();
			 		},730);
			 		//history.replaceState("", "", "/tdc/home");
			 	
			 		playaudiofade(700);
        }
        window.onpopstate = function(event) {
        	if(isMobile != true){
        		if(location.pathname.indexOf('home') > -1){
					closecontainer();
				}else{
					//changePages(lastPage);
				}
        	}
		};
        $.fn.imagesLoaded = function () {

	    $imgs = this.find('img[src!=""]');
	    // if there's no images, just return an already resolved promise
	    //if (!$imgs.length) {return $.Deferred.resolve().promise();}

	    // for each image, add a deferred object to the array which resolves when the image is loaded
	    var dfds = [];  
	    $imgs.each(function(){

	        var dfd = $.Deferred();
	        dfds.push(dfd);
	        var img = new Image();
	        img.onload = function(){dfd.resolve();}
	        img.src = this.src;

	    });

	    // return a master promise object which will resolve when all the deferred objects have resolved
	    // IE - when all the images are loaded
	    return $.when.apply($,dfds);

	}
function playaudiofade (argument) {
	setTimeout(function(){
		//$('body').find('.fade-audio').last().get(0).play();
	},argument);
	

}




/*...........................*/
/*........architecture.......*/
/*...........................*/
/*...........................*/
/*........architecture.......*/
/*...........................*/

function architecture (argument) {
	$(function (argument) {
	responsive();
	$('.cat-container').click(function (argument) {
		$('.hover-thumb').addClass('hover-on');
		$(this).toggleClass('cat-container-close');
		$('.arch-container').toggleClass('blur');
		$('.aside-left-menu').toggleClass('aside-open').toggleClass('aside-close');
		$('body').find('.hover-thumb.hover-on').click(function (e) {
			$(this).removeClass('hover-on');
			closecat();
		});
	});
	$('.arch-box').mouseenter(function (argument) {
		$('.arch-box').not($(this)).addClass('arch-box-blur');
		$(this).addClass('box-hover');
	});
	$('.arch-box').mouseleave(function (argument) {
		$('.arch-box').not($(this)).removeClass('arch-box-blur');
		$(this).removeClass('box-hover');
	});
	tnum = 1;
	$('.arch-box').each(function (argument) {
		$(this).find('h2').text(($(this).index()+1)+'_');

	});
	//category
	$('.left-menu-ul li').click(function (argument) {
		$('.left-menu-ul li').removeClass('here');
		$(this).addClass('here');
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
});
function closecat (argument) {
	$('.cat-container').toggleClass('cat-container-close');
	$('div.arch-container.blur').removeClass('blur');
	$('.aside-left-menu').removeClass('aside-open').addClass('aside-close');
}
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
	//$('.title').css('margin-top',(top/2)+'px');
}
responsive();
}













/*...........................*/
/*...........project.........*/
/*...........................*/
/*...........................*/
/*...........project.........*/
/*...........................*/


function project (argument) {
$(document).unbind('keydown');
$(document).keydown(function(e) {
	if(e.which == 39){
		NextPic();
	}
	if(e.which == 37){
		NextPic();
		}
    
});
$('.img-gallery,.bigarrow').bind('swiperight', function(e) { 
    PrevPic();
});
$('.img-gallery,.bigarrow').bind('swipeleft', function(e) { 
    
    NextPic();
});
$(document).ready(function (argument) {
		
	$('.info-bt,svg.close-bt').click(function (argument) {
		infoToggle();
		$('.thumbs').removeClass('thumbop');
	});
	$('.left-arrow,.bigleftarrow').click(function (argument) {
		PrevPic();
	});
	$('.right-arrow,.bigrightarrow').click(function (argument) {
		NextPic();
	});
	$('.thumb-bt').click(function (argument) {
		$('.thumbs').toggleClass('thumbop').perfectScrollbar();
	});
	$('.bigarrow').mouseenter(function (argument) {
		$('.thumbs').removeClass('thumbop');
	});
	$('.ps-scrollbar-x-rail,.ps-scrollbar-Y-rail').mouseenter(function (argument) {
		$('.thumbs').addClass('thumbop').perfectScrollbar();
	})
	$('#all-pic').text($('.img-gallery .Slide-handle').length);
	$('.Slide-handle.small-slide-handle').click(function (argument) {
		
		var index = $(this).index();
		$('.img-gallery .Slide-handle').removeClass('active-img');
		$('.img-gallery .Slide-handle').eq(index).addClass('active-img');
	})

});
function infoToggle (argument) {
	$('.left-arrow,.bigleftarrow,.right-arrow,.bigrightarrow').toggle();
	$('.info-box').toggleClass('infobox-open');
	$('.img-gallery').toggleClass('img-gallery-off');
	$('.info-bar').toggleClass('info-bar-down');
	$('.big-title').toggleClass('big-title-down');
}
function NextPic(){
	FirstPrv = false;
	
	var currentPic = $('.active-img');
	var nextPic = currentPic.next();
  	if(nextPic.length === 0) {
      nextPic = $('.img-gallery .Slide-handle').first();
    }
  	currentPic.removeClass('active-img');
 	nextPic.addClass('active-img');
	var slidenum = nextPic.index();
	$('#num-pic').text($('div.Slide-handle.active-img').index()+1);
}
var FirstPrv = true;
function PrevPic(){
	
	var currentPic = $('.active-img');
	var prevPic = currentPic.prev();
		if(prevPic.length === 0) {
		prevPic = $('.img-gallery .Slide-handle').last();
    }
	currentPic.removeClass('active-img');
	prevPic.addClass('active-img');
	var slidenum = prevPic.index();
	$('.js_slide_thumb').removeClass('js_slide_thumb_open');
	$('.js_slide_thumb').eq(slidenum).addClass('js_slide_thumb_open');
	$('#num-pic').text($('div.Slide-handle.active-img').index()+1);
}

	$('.story-section,.details-section').perfectScrollbar();
	var numS = 0;
		function loadImagesInSequence(images) {			
		  var img = new Image(),
	      url = images.shift();
		  img.onload = function(){
		  	loadImagesInSequence(images) 
		  };
		  img.src = url;
		  $('body').find('.Slide-big').eq(numS).attr('src',img.src);
		  $('body').find('.Slide-img-small').eq(numS).attr('src',img.src);
		  numS++;
		};
		loadImagesInSequence(myfiles);

}//end project
function hwimages (argument) {
/*	var Hh = argument.height();
 	var Ww = argument.width();
 	var stageH = $(window).height();
 	var stageW = $(window).width();
 	if(Hh > Ww){
 		argument.addClass('hImage');
 	}else{
 		argument.addClass('wImage');
 	}*/
}
var $grid;

/*portfolio*/
/*portfolio*/
/*portfolio*/
/*portfolio*/
/*portfolio*/
/*portfolio*/

function portfolio (argument) {
	setTimeout(function (argument) {
		$('.content').perfectScrollbar();
	},500);
	$('.aside-left-menu li').click(function (argument) {
		var cat = $(this).text();
		var index = $(this).index();
		changeContent(index);
	});
	$('body').find('.grid-item').click(function (argument) {
		if(isMobile == true){
			$('.container').animate({scrollTop:0}, 1000);
		}
		playaudiofade(0);
		var index = $(this).index()-1;
		$('.fullsize').addClass('fullsize-on');
		$('#num-pic').text(index+1);
		$('.fullsize').find('.full-item').removeClass('active-img').eq(index).addClass('active-img');
		$('.close-container').not('.close-fullsize').hide();
	});
	$('body').find('.close-fullsize').click(function (argument) {
		$('.fullsize').removeClass('fullsize-on');
		$('.close-container').not('.close-fullsize').show();
	});
	$('.left-arrow').click(function (argument) {
		PrevPic();
	});
	$('.right-arrow').click(function (argument) {
		NextPic();
	});
	function NextPic(){
		FirstPrv = false;
		var currentPic = $('.active-img');
		var nextPic = currentPic.next('.full-item');
	  	if(nextPic.length === 0) {
	      nextPic = $('.full-item').first();
	    }
	  	currentPic.removeClass('active-img');
	 	nextPic.addClass('active-img');
		var slidenum = nextPic.index()+1;
		$('#num-pic').text($('.full-item.active-img').index()+1);
	}
	var FirstPrv = true;
	function PrevPic(){
		
		var currentPic = $('.active-img');
		var prevPic = currentPic.prev('.full-item');
			if(prevPic.length === 0) {
			prevPic = $('.full-item').last();
	    }
		currentPic.removeClass('active-img');
		prevPic.addClass('active-img');
		var slidenum = prevPic.index()+1;
		$('.js_slide_thumb').removeClass('js_slide_thumb_open');
		$('.js_slide_thumb').eq(slidenum).addClass('js_slide_thumb_open');
		$('#num-pic').text($('.full-item.active-img').index()+1);
	}
	function changeContent (index) {
		$('.aside-left-menu li').removeClass('here');
		$('.aside-left-menu li').eq(index).addClass('here');

		$('.content').removeClass('content-active');
		$('.content').eq(index).addClass('content-active');
		getIMG();
	}
		 $grid = $('.grid-is').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			  columnWidth: '.grid-sizer',
			  rowHeight: 50,
			  gutter: 15
			}
			});
			// layout Isotope after each image loads
			$grid.imagesLoaded().progress( function() {
				$grid.isotope('layout');
			});
			function getIMG (argument) {
				$('.portfolio .content-active img').each(function (argument) {
					src = $(this).attr('data-src');
					//$(this).attr('src','');
					$(this).attr('src',src);
				});
			}
			getIMG();
			
}//end of portfolio
	var timer;
var contact = function contact (argument) {
	$('.contact').perfectScrollbar('destroy');
	if(isMobile != true){
		$('.contact .col.span_4_of_6').html('<iframe src="contact/map.php"></iframe>');
	}
	function getIMG (argument) {
		$('.contact .contactslide .office').each(function (argument) {
			src = $(this).find('div').attr('data-src');
			$(this).css('background-image','url("'+src+'")');
		});
		$('.contact .contactslide .office').eq(0).addClass('office-active');
	}
	getIMG();
	clearInterval(timer);
	function slider (argument) {
		clearInterval(timer);
		timer = setInterval(function (argument) {
			NextPic();
		},3000);
	}
	slider();
	function NextPic(){
		var currentPic = $('.contact .office-active');
		var nextPic = currentPic.next();
		var PrevPic = currentPic.prev();
	  	if(nextPic.length === 0) {
	  	  $('.contact .office').eq(length).removeClass('office-hide');
	      nextPic = $('.contact .office').first();
	    }
	  	currentPic.removeClass('office-active').addClass('office-hide');
	  	PrevPic.removeClass('office-hide')
	 	nextPic.addClass('office-active');
		var slidenum = nextPic.index();
	}
}
    function fullscreen (argument) {
        fullscreenstatus = true;
            var elem = document.getElementById("body");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }
;(function($) { 
  $.fn.tactile = function(swipe) {
    return this.each(function() {
      var $this = $(document),
      isTouching = false,
      debut;                                // means start in french

      $this.on('touchstart', debutGeste);       

      function debutGeste() {               // means start of gesture
        if (event.touches.length == 1) {
          debut = event.touches[0].pageX;
          isTouching = true;
          $this.on('touchmove', geste);
        }
      }

      function finGeste() {                 // means end of gesture
        $this.off('touchmove');
        isTouching = false;
        debut = null;
      } 

      function geste() {                   // geste means gesture
        if(isTouching) {
          var actuel = event.touches[0].pageX,
          delta = debut - actuel;

          if (Math.abs(delta) >= 30) {     // this '30' is the length of the swipe
            if (delta > 0) {
              swipe.right();
            } else {
              swipe.left();
            }                       
            finGeste();
          }
        }
        event.preventDefault(); 
      }
    });
  };
})(jQuery);