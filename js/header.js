let headerContent = ""
//header-content
addheader =  function(){
    let header = document.getElementById("page-header");
    let content ="";
    content += '<div class="carousel slide carousel-fade pointer-event" data-ride="carousel">'+
                    '<div class="carousel-inner">' +
                        '<div class="carousel-item active">' +
                            '<img src="assets/images/'+ headerContent.image +'" class="d-block w-100" alt="...">'+
                            '<div id = "landing-page-text-wrapper">'+
                                '<h1>'+ headerContent.header1 +'</h1>'+ 
                                '<p>' + headerContent.header2 + '</p>'        
                            '</div>'+
                        '</div>'+
                    '</div>'+      
                '</div>';
    header.innerHTML = content;
}

addheader();

addfooter = function(){
    let footer = document.getElementById("footer");
    let content = "";
    content +='<div id="footer-content" class = "display-flex">'+
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                        '<div class="footer-logo-wrapper">'+
                            '<a href="https://www.albany.edu/">'+
                                '<img class="footer-logo" src="assets/logos/logo.png" />'+
                            '</a>'+
                        '</div>'+
                        '<address>'+
                            '<a href="https://www.google.com/maps/place/1400+Washington+Ave,+Albany,+NY+12222/@42.6859115,-73.8287166,17z/data=!3m1!4b1!4m5!3m4!1s0x89de0b3ce5c93e45:0x4cdbe8d7b52fa412!8m2!3d42.6859115!4d-73.8265279"'+
                            'target="_blank">'+
                            '1400 Washington Avenue <br>'+
                            'Albany, NY 12222'+
                            '</a>'+
                            '<br>Undergraduate Admissions: <a href="tel:5184425435">(518) 442-5435</a>'+
                            '<br>Graduate Admissions: <a href="tel:5184423980">(518) 442-3980</a>'+
                            '<br>Main: <a href="tel:5184423300">(518) 442-3300</a>'+
                        '</address>'+
                    '</div>'+
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                        '<p class="footer-navigation-header">RESOURCES</p>'+
                        '<ul class="footer-navigation">'+
                            '<li><a href="https://wiki.albany.edu/display/middlestates2020/Middle+States+2020+Home" target="_self" rel="">Accreditation</a></li>'+
                            '<li><a href="http://police.albany.edu/ASR.shtml">Campus Safety Report</a></li>'+
                            '<li><a href="http://www.albany.edu/contact-ualbany">Contact Us</a></li>'+
                            '<li><a href="http://www.albany.edu/main/employment.shtml">Jobs</a></li>'+
                            '<li><a href="http://www.albany.edu/emergency/index.php">UAlbany Alert</a></li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                        '<p class="footer-navigation-header">TOPICS</p>'+
                        '<ul class="footer-navigation">'+
                            '<li><a href="http://www.albany.edu/diversityandinclusion/">Diversity and Inclusion</a></li>'+
                            '<li><a href="http://www.albany.edu/strategicplan/">Strategic Planning &amp; Initiatives</a></li>'+
                            '<li><a href="http://www.albany.edu/gogreen/">Sustainability</a></li>'+
                            '<li><a href="http://www.albany.edu/equity-compliance/">Title IX</a></li>'+
                            '<li><a href="http://www.albany.edu/accessible-web/">Web Accessibility</a></li>'+   
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<section id="copyright-content">'+
                    '<p>© 2019&nbsp;University at Albany</p>'+
                '</section>';
    footer.innerHTML = content;
}

addfooter();