<?php 
	date_default_timezone_set("Asia/Tehran");
	$timeFirst  = strtotime(date("Y-m-d H:i:s"));
	$timeSecond = strtotime('2014-12-18 16:00:00');
	$differenceInSeconds = $timeSecond - $timeFirst;
 ?>
<!DOCTYPE html>
<html>
	<head>
		
  <meta charset="UTF-8">
  <title>TDC Office</title>
  <meta property="og:title" content=">TDC office" />
  <meta property="og:type" content=">website" />
  <meta property="og:url" content="http://www.tdcoffice.com/" />
  <meta property="og:image" content="http://tdcoffice.com/img/intro.jpg" />
  <meta property="og:site_name" content=">TDC office" />
  <meta property="og:description" content="TDC Office is a group of architects, designers and engineers active in fields of architecture, interior design and art Led by Sara Kalantary and Reza Sayadian" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="TDC Office is a group of architects, designers and engineers active in fields of architecture, interior design and art Led by Sara Kalantary and Reza Sayadian" />
  <meta name="keywords" content="TDC, TDCoffice, تداوم پویا, Saba Residential" />
  <meta name="author" content="Farzad Kafaie - Dokmeh Design Studio">
  <meta name="robots" content="index, follow">
  <meta name="revisit-after" content="1 days">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png">

  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />

  <meta name="theme-color" content="#ffffff">

		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" href="css/grid.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/perfect-scrollbar.min.css" />
		<link rel="stylesheet" type="text/css" href="css/css-reset.css" />
		<link href='https://fonts.googleapis.com/css?family=Exo+2:400,300,700' rel='stylesheet' type='text/css'>
        <link href="css/background.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/touch.event.min.js"></script>
        <script type="text/javascript" src="js/init.js"></script>
        <script type="text/javascript" src="js/jquery.transit.min.js"></script>
        <script type="text/javascript" src="js/perfectscrollbar.min.js"></script>
        <script type="text/javascript" src="js/isotope.pkgd.min.js"></script>
        <?php 
		if ($differenceInSeconds > 0) {
			echo '<link rel="stylesheet" type="text/css" href="compiled/flipclock.css">';
			echo '<script type="text/javascript" src="compiled/flipclock.min.js"></script>';
		};
	 ?>
	</head>
	<body id="body">
		<nav class="main-nav">
			<a href="#" class="coloniContainer" data-menu="architecture"><p>Architecture</p><div></div></a>
			<a href="#" class="coloniContainer" data-menu="portfolio"><p>Portfolio</p><div></div></a>
			<a href="#" class="coloniContainer" data-menu=""><p>Awards</p><div></div></a>
			<a href="#" class="coloniContainer" data-menu=""><p>Media</p><div></div></a>
			<a href="#" class="coloniContainer" data-menu="contact"><p>Contact Us</p><div></div></a>
		</nav>
		
        <section id="enter">
	        <div id="logo">
				<img src="img/logo-b.svg">
			</div>
			<p class="Enter-txt">Click Here to Enter</p>
        </section>
        <section class="container containerhide">
        	
        </section>
        <footer>
        	<img src="img/logo-b.svg">
        </footer>
        <div class="loading"><img src="img/logo-b.svg"></div>
	</body>
	
	
<?php 
	if ($differenceInSeconds > 0) {
		echo '<div class="clock-hnld">
				<img class="logo-m" src="img/logo-b.svg">
				<h2>We will be available soon...</h2>
				<div class="clock" style="margin:2em;"></div>
				<p><a href ="tel:+982122785075">+98 (021) 22785075</a> / <a href ="tel:+982122290269">22290269</a> / <a href ="tel:+982122785067">22785067</a></p>
				<p><a href="mailto:info@tdcoffice.com">info@tdcoffice.com</a></p>
				<p>Unit 3, No 17, Motamedi St. South Kamranieh. Lavasani St.</p>
				<p>Website by <img src="img/dokmeh.svg"></p>
				
			</div>';
		echo '
				<script type="text/javascript">
					var clock;
					$(document).ready(function() {

						var currentDate = new Date();
						
						var futureDate  = new Date(2014,10,18,16,00);
						var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
						clock = $(".clock").FlipClock(diff, {
							clockFace: "DailyCounter",
							countdown: true,
							callbacks: {
				                stop: function() {
				                	setTimeout(function(){lunch()},2000);
				                }
				            }
						});
						
					});
					function lunch (argument) {
						
			      		$(".clock-hnld").addClass("clock-hnld-hide");
			      		$("#bg")[0].contentWindow.ps.resize();
			      	}
				</script>
		';
	}

 ?>
		
</html>