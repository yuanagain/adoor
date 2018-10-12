const footer_html = `
<footer>
  <div class="bg-dark">
    <div class="footer-main">
      <div class="container">
        <div class="footer-main-wrapper padding-top-2 padding-bottom row">
          <div class="col-md-8 col-8">
            <div class="row">
              <div class="col-sm-6 col-xs-6">
                <div class="sunhouse-widget widget">
                  
                  <div class="content-widget">
                    <img class="logomed" src="assets/images/grc/logoaDoor.png" alt=""/>

                    <br/>
                    <br/>

                    <div class="phone-number"><i class="fa fa-phone"></i><span>850-637-1880</span></div>
                    <div class="socials"><a href="#" class="link facebook"><i class="fa fa-facebook-square"></i></a><a href="#" class="link twitter"><i class="fa fa-twitter"></i></a><a href="#" class="link instagram"><i class="fa fa-instagram"></i></a></div>

                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xs-6">
                <div class="widget">
                  <div class="useful-link-widget">
                    <div class="title-widget">Site Map</div>
                    <div class="content-widget">
                      <div class="row">
                        <div class="col-xs-12">
                          <ul class="list-unstyled">

                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio.html#listings">Current Listings</a></li>
                            <li><a href="portfolio.html#upcoming">Upcoming Developments</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-4">
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="widget">
                  <div class="form-blog-widget">
                    <div class="title-widget">News</div>
                    <div class="content-widget">
                      <div class="media">
                        <div class="media-left"><a href="#" class="img-hover"><img src="assets/images/grc/IMG_3729.JPG" alt=""/></a></div>
                        <div class="media-right"><a href="#" class="title">80% sold at the Junction before completion.</a>

                          <div class="info">
                            <div class="date-created item"><a href="#" class="text">Oct 12, 2018</a></div>
                          </div>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-left"><a href="#" class="img-hover"><img src="assets/images/grc/IMG_3746.JPG" alt=""/></a></div>
                        <div class="media-right"><a href="#" class="title">Pool completed in East Hill</a>

                          <div class="info">
                            <div class="date-created item"><a href="#" class="text">Sept 30, 2018</a></div>
                          </div>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-left"><a href="#" class="img-hover"><img src="assets/images/grc/IMG_3730.JPG" alt=""/></a></div>
                        <div class="media-right"><a href="#" class="title">The Junction Open House</a>

                          <div class="info">
                            <div class="date-created item"><a href="#" class="text">Sept 12, 2018</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="hyperlink">
      <div class="container">
        <div class="pull-left hyper-left"><span>&copy; Designed by Graceland Research</span><span class="name"></span></div>
        <div class="pull-right hyper-right">
          <ul>
            <li><a href="index.html" class="link">Home</a></li>
            <li><a href="contact.html" class="link">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
`
customElements.define('footer-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footer_html;
  }
});
