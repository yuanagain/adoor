const header_html = `<div class="container">
  <div class="header-main-wrapper">
    <div class="navbar-header">
`
const header_logos_light = `<div class="logo logo-black pull-left"><a href="index.html" class="header-logo logoheader"><img class="logoheader" src="assets/images/grc/logoaDoorSmall.png" alt=""/></a></div>
      <div class="logo logo-white pull-left"><a href="index.html" class="header-logo logoheader"><img class="logoheader" src="assets/images/grc/logoaDoorSmall.png" alt=""/></a></div>
      `
const header_logos_dark = `<div class="logo logo-black pull-left"><a href="index.html" class="header-logo logoheader"><img class="logoheader" src="assets/images/grc/logodarksmall.jpeg" alt=""/></a></div>
      <div class="logo logo-white pull-left"><a href="index.html" class="header-logo logoheader"><img class="logoheader" src="assets/images/grc/logodarksmall.jpeg" alt=""/></a></div>
      `

const header_tail = `
  <button type="button" data-toggle="collapse" data-target=".navigation" class="navbar-toggle btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
    </div>
    <nav class="navigation collapse navbar-collapse pull-right">
      <ul class="nav-links nav navbar-nav">
        <li><a href="contact.html" class="main-menu">Home</a></li>

        <li class="dropdown"><a href="javascript:void(0)" class="main-menu">Team<span class="fa fa-angle-down icons-dropdown"></span></a>
          <ul class="dropdown-menu dropdown-menu-1">
            <li><a href="team.html#agents" class="link-page">Agents</a></li>
            <li><a href="team.html#builders" class="link-page">Builders</a></li>
            <li><a href="team.html#designers" class="link-page">Designers</a></li>
          </ul>
        </li>

        <li class="dropdown"><a href="javascript:void(0)" class="main-menu">Portfolio<span class="fa fa-angle-down icons-dropdown"></span></a>
          <ul class="dropdown-menu dropdown-menu-1">
            <li><a href="portolio.html#listings" class="link-page">Current Listings</a></li>
            <li><a href="portolio.html#past" class="link-page">Showcase</a></li>
            <li><a href="portolio.html#upcoming" class="link-page">Upcoming Developments</a></li>
            <li><a href="https://www.junctionatwesthill.com/" class="link-page">The Junction at West Hill</a></li>
          </ul>
        </li>
        
        <li><a href="contact.html" class="main-menu">Contact</a></li>
      </ul>
    </nav>
  </div>
</div>
`

customElements.define('header-grc-light', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html + header_logos_light + header_tail;
  }
});

customElements.define('header-grc-dark', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html + header_logos_dark + header_tail;
  }
});
