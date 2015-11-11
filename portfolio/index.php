<?php 
	if(!isset($_GET['x'])){
		header('Location:../index.php?page=portfolio');
	}
 ?>
 <section class="portfolio innerCountainer portfolio">
	<div class="section group">
		<div class="col span_1_of_6">
			<h2>Portfolio</h2>
			<aside class="aside-left-menu">
				<ul class="left-menu-ul">
					<li class="here">About Us</li>
					<li>Principal</li>
					<!-- <li>Philosophy</li> -->
					
					<!-- <li>Our Team</li> -->
				</ul>
				<img src="img/line45.png" class="line lineup">
			</aside>
		</div>
		<div class="col span_5_of_6">
			<div class="content content1 content-active">
				<h2>About Us</h2>
				<div class="txt">
					<p class="count3">
						TDC Office is a group of architects, designers and engineers active in fields of architecture,

interior design and art. Since its inception in 2003, the firm has completed numerous projects 

ranging in different scales and categories.

The firm has adapted a sustainable approach through all its projects, since sustainability counts 

to be the most important factor in architectural design in the contemporary practice. 

The approach of the office is to study the native and traditional design and construction methods 

in order to continue and incorporate those mature and nuanced visions into the modern-day 

 practice. This is achieved not only through an in-depth analysis of the architecture's past but 

also through an equally rigorous focus on contemporary issues, challenges and opportunities. In 

addition TDC's foresight acknowledges the future potentials for the general direction of Iranian 

architectural design and the need to re-envision the elegant heritage of the past in a modern 

context.

With over a decade of experience in a broad spectrum of types and scale of architecture and 

addressing their corresponding needs and concerns, TDC has established itself as a 

progressive and dynamic contemporary practice among Iranian and international society of 

architecture and has won many national and international awards in field of architecture and 

interior design.
						<?php 
						$files = glob("../img/portfolio/about/*.jpg");
							natsort($files);
							//sort($files , SORT_NUMERIC);
							$files = array_values($files);
						?>
					</p>
					<div class="img_section grid-is">
						<div class="grid-sizer"></div>
						<?php 
							for ($i=0; $i < count($files); $i++) { 
								echo '<div class="grid-item">
										<img src="" data-src="'.str_replace('../', '', $files[$i]).'" onLoad="$(this).addClass(\'img-loaded\');$grid.isotope(\'layout\');">
									</div>';
							}
						 ?>
					</div>
					<div class="fullsize">
						<?php 
							for ($i=0; $i < count($files); $i++) { 
								echo '<div class="full-item">
										<img src="" data-src="'.str_replace('../', '', $files[$i]).'" onLoad="$(this).addClass(\'img-loaded\')" alt="TDC-Office">
									</div>';
							}
						?>
						<div class="close-fullsize close-container">
							<img src="img/up-close.svg">
						</div>
						<div class="fullsize-footer">
							<div class="control">
								<div class="left-arrow arrow">
									<svg version="1.1" class="arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85 85" enable-background="new 0 0 85 85" xml:space="preserve">
										<polygon fill="#FFFFFF" points="85,85 85,0 0,0 0,29.7 0,85 "></polygon>
										<polyline fill="none" stroke="#25582C" stroke-width="2" stroke-miterlimit="10" points="51,59.6 34,42.5 51,25.4 "></polyline>
										<!-- <polygon fill="none" points="0,29.8 0,29.8 0,0 29.8,0 "></polygon> -->
									</svg>
								</div>
								<div class="numbers">
									<p id="num-pic">1</p>
									<img src="img/45degline.svg">
									<p id="all-pic"><?php echo (count($files)) ?></p>
								</div>
								<div class="right-arrow arrow">
									<svg version="1.1" class="arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85 85" enable-background="new 0 0 85 85" xml:space="preserve">
										<polygon fill="#FFFFFF" points="0,0 0,85 85,85 85,55.3 85,0 "></polygon>
										<polyline fill="none" stroke="#25582C" stroke-width="2" stroke-miterlimit="10" points="34,25.4 51,42.5 34,59.6 "></polyline>
										<!-- <polygon fill="none" points="85,55.2 85,55.2 85,85 55.2,85 "></polygon> -->
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content content3">
				<h2>Principal</h2>
				<div class="txt">
					<p class="count3">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
					</p>
					<div class="pricipal-img"><img src="" data-src="img/portfolio/principal/Sara-kalantary-Reza-Sayadiyan.jpg"></div>
					<p class="count3">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
					</p>
				</div>
			</div>
			<div class="content content2">
				<h2>Philosophy</h2>
				<div class="txt">
					<p class="count3">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
					</p>
					<img src="img/landscape33.svg" data-src="img/portfolio/prinsipal/Sara-kalantary-Reza-Sayadiyan.jpg">
				</div>
			</div>

			

			<div class="content content4">
				<h2>Our Team</h2>
				<div class="txt">
					<div class="box">
						<img src="img/landscape33.svg" data-src="img/portfolio/about/about_1.jpg">
						<span class="box-info">
							<h3>Some body</h3>
							<p>Architecture</p>
							<p>Since 1900</p>
						</span>	
					</div>
					<div class="box">
						<img src="img/landscape33.svg" data-src="img/portfolio/about/about_1.jpg">
						<span class="box-info">
							<h3>Some body</h3>
							<p>Architecture</p>
							<p>Since 1900</p>
						</span>	
					</div>
					<div class="box">
						<img src="img/landscape33.svg" data-src="img/portfolio/about/about_1.jpg">
						<span class="box-info">
							<h3>Some body</h3>
							<p>Architecture</p>
							<p>Since 1900</p>
						</span>	
					</div>
					<div class="box">
						<img src="img/landscape33.svg" data-src="img/portfolio/about/about_1.jpg">
						<span class="box-info">
							<h3>Some body</h3>
							<p>Architecture</p>
							<p>Since 1900</p>
						</span>	
					</div>
					
				</div>
			</div>

			</div>
		</div>
	</div>
</section>
