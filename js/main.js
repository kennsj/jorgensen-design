let rellax = new Rellax('.project-info');
let controller = new ScrollMagic.Controller();
let allowScroll;

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 160,
  offset: '50vh'
});

/////////////////////////////
////* Animate preloader *////
/////////////////////////////

window.onload = function () {

  allowScroll = false;

  // var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

  let animateProgressBar = new TweenMax.fromTo('.progress-bar', 2, {
    xPercent: '-120',
    bottom: '0',
    ease: Sine.easeInOut
  }, {
    xPercent: '0',
    ease: Sine.easeInOut
  });
  // .duration(loadTime);

  let animatePreload = new TweenMax.fromTo('.preload-info', .5, {
      autoAlpha: 0,
      ease: Sine.easeInOut
    }, {
      autoAlpha: 1,
      ease: Sine.easeInOut
    })
    .delay(1)

  let animateProgressBarUp = new TweenMax.to('.progress-bar', 1.2, {
      padding: '100vh',
      ease: Sine.easeInOut
    })
    .delay(2)

  let animatePreloaderOut = new TweenMax.fromTo('.preloader', .5, {
      position: 'fixed',
      autoAlpha: 1,
      ease: Sine.easeInOut,
    }, {
      display: 'none',
      autoAlpha: 0,
      ease: Sine.easeInOut,
    })
    .delay(2.7)

  let animatePreloaderH1 = new TweenMax.to('.preloader h1', .3, {
    autoAlpha: 1,
    ease: Sine.easeInOut
  })
  // .delay(.5)

  setTimeout(() => {
    allowScroll = true;
  }, 2700);

}

setInterval(() => {
  if (allowScroll) {
    document.querySelector('html').style.overflowY = 'scroll';
  } else if (!allowScroll) {
    document.querySelector('html').style.overflowY = 'hidden';
  }
}, 500);

// if (!allowScroll) {
//   document.querySelector('html').style.overflowY = 'hidden';
// } else if (allowScroll === true) {
//   document.querySelector('html').style.overflowY = 'scroll';
// }

////////////////////////////////////
////* Animate project previews *////
////////////////////////////////////

let projects = document.querySelectorAll('.project')

Array.prototype.forEach.call(projects, function showProjects(el) {

  let overlay = el.querySelectorAll('.overlay');
  let projectImage = el.querySelectorAll('.project-image img');
  let projectInfo = el.querySelectorAll('.project-info');
  var projectH6 = el.querySelectorAll('.project-info h6');
  var projectParagraph = el.querySelectorAll('.project-info p');
  var projectH4 = el.querySelectorAll('.project-info h4');
  var projectLink = el.querySelectorAll('.project-info a');

  let animatePreview = new TimelineMax();

  TweenMax.set(".overlay", {
    perspective: 500
  });


  animatePreview
    .fromTo(overlay, .9, {
      skewX: '-40px'
    }, {
      xPercent: -100,
      skewX: 0,
      ease: Sine.easeInOut,
    })
    .fromTo(projectImage, .9, {
      scale: 1,
    }, {
      scale: .95,
      skewY: 0,
      delay: .3,
      ease: Sine.easeInOut,
    }, '-=.7')
    .fromTo(projectInfo, .3, {
      opacity: 0,
      ease: Sine.easeInOut
    }, {
      opacity: 1,
      ease: Sine.easeInOut
    }, '-=1.2')
    .from(projectH6, .3, {
      autoAlpha: 0,
      yPercent: '+=20px',
      ease: Sine.easeInOut,
    }, '-=.9')
    .from(projectParagraph, .4, {
      autoAlpha: 0,
      yPercent: '+=20px',
      ease: Sine.easeInOut,
    }, '-=.8')
    .fromTo(projectLink, .4, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Sine.easeInOut,
    }, '-=.7');


  let animateProjects = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: .75,
      offset: -window.innerHeight / 4,
      // duration: window.innerHeight / .75
      // reverse: false,
      // duration: window.innerHeight / 1.3
    })
    .setTween(animatePreview)
    .addTo(controller);
    // .addIndicators();

});

/* Animate info boxes */


/* let infoBoxes = document.querySelectorAll('.info-box')

Array.prototype.forEach.call(infoBoxes, function showProjects(el) {

  let infoBoxHeading = el.querySelectorAll('.info-box h4');
  let infoBoxParagraph = el.querySelectorAll('.info-box p');

  let animateInfoBoxes = new TimelineMax();


  animateInfoBoxes
    .fromTo(el, 1.3, {
      autoAlpha: 0,
      skewX: '-1px'
    }, {
      autoAlpha: 1,
      skewX: 0,
      ease: Sine.easeInOut,
    })
    // .fromTo(el, 1.3, {
    //   autoAlpha: 0
    // }, {
    //   autoAlpha: 1,
    //   ease: Sine.easeInOut,
    // })
    .fromTo(infoBoxHeading, .9, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Sine.easeInOut,
    }, '-=1')
    .fromTo(infoBoxParagraph, .3, {
      opacity: 0,
      ease: Sine.easeInOut
    }, {
      opacity: 1,
      ease: Sine.easeInOut
    }, '-=.6')

  let animateInfoBox = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: .75,
      // offset: -window.innerHeight / 4,
      // duration: window.innerHeight / 4,
      offset: -window.innerHeight / 8,
      duration: window.innerHeight / 3
    })
    .setTween(animateInfoBoxes)
    .addTo(controller);
    // .addIndicators();

}); */

/////////////////////////////////////
////* Animate background colors *////
/////////////////////////////////////

let aboutIntroBackground = new TweenMax.to('#about, html', 1.5, {
  backgroundColor: '#252525'
});

new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .75,
    duration: window.innerHeight / 1
  })
  .setTween(aboutIntroBackground)
  .addTo(controller);
  // .addIndicators();

let aboutBackground = new TweenMax.to('html', 1.5, {
  // backgroundColor: '#F2ECE5'
});

new ScrollMagic.Scene({
    triggerElement: 'footer',
    triggerHook: 0,
    offset: -window.innerHeight / 2,
    duration: window.innerHeight / 4
  })
  .setTween(aboutBackground)
  .addTo(controller);
// .addIndicators();

// Lazy load images and video

var lazyLoadInstance = new LazyLoad({
  elements_selector: '.project-image img, video',
});

// Pause/play header video

document.querySelector('video').addEventListener('mousedown', function () {

  if (this.paused)
    this.play();
  else
    this.pause();

})