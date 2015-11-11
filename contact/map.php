
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>TDC location</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="TDC Design" />
		<meta name="keywords" content="TDC" />
		<meta name="author" content="Dokmeh" />
		<link rel="shortcut icon" href="favicon.ico">
		<meta http-equiv="Pragma" content="no-cache" />
    	<meta http-equiv="expires" content="0" />
		<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
        <script type="text/javascript" src="../js/jquery.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        <script type="text/javascript">
        
	
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
            	var WindoWitdh = window.innerWidth;
                var mapOptions = {
                    zoom: 15,
                    center: new google.maps.LatLng(35.799123, 51.461419),
                    styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "4.55"
            },
            {
                "saturation": "80"
            },
            {
                "gamma": "1.24"
            },
            {
                "lightness": "-30"
            },
            {
                "hue": "#00ffa0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "5"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "77"
            },
            {
                "color": "#1bd577"
            },
            {
                "gamma": "6.47"
            },
            {
                "visibility": "simplified"
            },
            {
                "saturation": "81"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "63"
            },
            {
                "color": "#00ff73"
            },
            {
                "saturation": "28"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "lightness": "60"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#64c0d3"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
                };
                var mapElement = document.getElementById('map-canvas');
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(35.799123, 51.461419),
                    map: map,
                    title: 'TDC office'
                });
		     
            }
	</script>
	<style type="text/css">
	body,html{
		position: absolute;
		height: 100%;
		width: 100%;
		padding: 0;
		margin:0;
	}
	#map-canvas{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	</style>
	</head>

<body>
	<div id="map-canvas"></div>
</body>
</html>