
<?php 
	if(!isset($_GET['x'])){
		header('Location:../index.php?page=contact');
	}
 ?>
 
 <script>

</script>
 <div class="section group contact">
 	<div class="contactright">
 		
 	
		<div class="col span_2_of_6">
			<h2>Contact Us</h2>
			<p>Unit 3, No 17, Motamedi St. South Kamranieh. Lavasani St.</p>
			<a href="https://www.google.com/maps/dir/Current+Location/35.799184, 51.462016" target="_blank">
				<img src="img/gmap.png">	
			</a>
			
			<p>Postal Code : 112244455</p>
			<p>Phone Number : +98 (021) 22785075 / 22290269 / 22785067</p>
			<p>Fax Number : +98 (021) 22785075</p>
			<p>Email : info@tdcoffice.com</p>
			<div class="social">
				<a href="#"><img src="img/socials/f.jpg"></a>
				<a href="#"><img src="img/socials/g.jpg"></a>
				<a href="#"><img src="img/socials/i.jpg"></a>
				<a href="#"><img src="img/socials/link.jpg"></a>
				<a href="#"><img src="img/socials/t.jpg"></a>
			</div>
		</div>
		<div class="col span_4_of_6">
			
		</div>
		
	</div>
	<div class="contactslide">
		<?php 
				$files = glob("../img/contact/*.jpg");
					natsort($files);
					//sort($files , SORT_NUMERIC);
					$files = array_values($files);
				
				for ($i=0; $i < count($files); $i++) { 
					echo '<div class="office">
							<div data-src="'.str_replace('../', '', $files[$i]).'" onLoad="$(this).addClass(\'img-loaded\')"></div>
						</div>';
				}
				?>
	</div>
</div>
<script type="text/javascript">
	$('.section').perfectScrollbar();
</script>