<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Poradnia Medycyny Podróży</title>
    <link href="https://fonts.googleapis.com/css?family=Mukta+Vaani:300,400,700|Russo+One" rel="stylesheet">

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.1.1.js"
        integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
        crossorigin="anonymous"></script>
    <script src="js/jquery.bxslider.min.js"></script>
    <!-- bxSlider CSS file -->
    <link href="css/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/jquery-jvectormap-2.0.3.css" type="text/css" media="screen"/>
    <script src="js/jquery-jvectormap-2.0.3.min.js"></script>
    
</head>
<body>
    <header>
        <div class="container clearfix">
            <div id="logo_menu"><a href="index.html">Poradnia Medycyny Podróży</a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Strona główna</a></li>
                    <li><a href="cennik.html">Cennik</a></li>
                    <li><a href="porady.php">Porady dla podróżujących</a></li>
                    <li><a href="certyfikat.html">Certyfikat</a></li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                </ul>
            </nav>
        </div>
        
    </header>
    
    <section class="section"> 
        <div class="container clearfix">
            <ul class="bxslider">
                <li><img src="images/1.jpg" /></li>
                <li><img src="images/2.jpg" /></li>
                <li><img src="images/3.jpg" /></li>
                <li><img src="images/4.jpg" /></li>
                <li><img src="images/5.jpg" /></li>
                <li><img src="images/6.jpg" /></li>
            </ul>

                
            <div class='map' id="map">
                <h1>Mapa szczepień</h1>
                    
                <div class="map_image">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:amcharts="http://amcharts.com/ammap" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1005 669">
                       
                    <?php include('baza.php');?>
                    </svg>

                        
                    <section class="vax_info hidden">
                        <div class="test">
                        </div>
                    </section>
                </div>   
            </div>
            
       
        </div>   
    </section>
    
    <footer>
        <div class="container clearfix">
            <span>Copyright (c)2017 PULS Sp. z o.o.</span>
        </div>
    </footer>
    <script src="js/app.js"></script>
</body>

</html>