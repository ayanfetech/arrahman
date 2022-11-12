let $ = document;
// MOBILE NAVIGATION MENU
const navMenu = $.querySelector('.nav-menu');
const navToggle = $.querySelector('.nav-toggle');
const navClose = $.querySelector('.nav-close');
if(navMenu){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
        navToggle.classList.add('hide-toggle')
    });
};
if(navMenu){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('hide-toggle')
    });
}

// NAV MENU CLOSE ON CLICK
const navLinks = $.querySelectorAll('.nav-links');
 function linkAction(){
     navMenu.classList.remove('show-menu')
     navToggle.classList.remove('hide-toggle')
 }
 navLinks.forEach(navLink=>navLink.addEventListener('click',linkAction));

// NAVBAR ACTIVE ON SCROLL
  let navbarlinks = $.querySelectorAll('.nav-list .scrollto')
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = $.querySelector(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  $.addEventListener('scroll', navbarlinksActive)

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
  /**
   * Initiate Pure Counter 
   */
  new PureCounter();
    /**
   * Back to top button
   */
  let backtotop = $.querySelector('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    $.addEventListener('scroll', toggleBacktotop)
  }
// Loader active
let loader = $.querySelector(".loader");
setTimeout(() => {
    loader.classList.add("hide");
}, 2000);