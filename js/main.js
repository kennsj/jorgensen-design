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

  // TweenMax.fromTo(
  //   projectImage,
  //   2.5, {
  //     // skewX: 30,
  //     scale: 1.5
  //   }, {
  //     scale: 1,
  //     // skewX: 0,
  //     transformOrigin: "0% 100%",
  //     // repeat: -1,
  //     // repeatDelay: 1,
  //     ease: Power2.easeOut
  //   }
  // );

  TweenMax.set(".overlay", {
    perspective: 500
  });


  animatePreview
    .fromTo(overlay, 1.3, {
      skewX: '-40px'
    }, {
      xPercent: -100,
      skewX: 0,
      ease: Sine.easeInOut,
    })
    .fromTo(projectImage, .9, {
      scale: 1.1,
      // skewY: '5px'
    }, {
      scale: .98,
      skewY: 0,
      delay: .1,
      ease: Sine.easeInOut,
    }, '-=1')
    .fromTo(projectInfo, .3, {
      opacity: 0,
      ease: Sine.easeInOut
    }, {
      opacity: 1,
      ease: Sine.easeInOut
    }, '-=.6')
    .from(projectH6, .3, {
      autoAlpha: 0,
      yPercent: '+=20px',
      ease: Sine.easeInOut,
    }, '-=.5')
    .from(projectParagraph, .4, {
      autoAlpha: 0,
      yPercent: '+=20px',
      ease: Sine.easeInOut,
    }, '-=.3')
    .to(projectLink, .4, {
      autoAlpha: 1,
      ease: Sine.easeInOut,
    }, '-=.2');


  let animateProjects = new ScrollMagic.Scene({
      triggerElement: el,
      offset: -window.innerHeight / 4,
      // reverse: false,
      // duration: window.innerHeight / 1.3
    })
    .setTween(animatePreview).addTo(controller);
  // .addIndicators()

});

/////////////////////////////////
////* Animate video preview *////
/////////////////////////////////

// window.onload = function () {

//   let animateVideOverlay = new TweenMax.to('.video-overlay', .9, {
//       bottom: '-100vw',
//       // opacity: 0,
//       ease: Power4.easeIn,
//       duration: 0
//     })
//     .delay(.2)

// }

// window.onload = function () {

//   let animateVideOverlay = new TweenMax.fromTo('.video-overlay', .9, {
//       scale: 1.7,
//       xPercent: '10%',
//       skewX: '-35px',
//       autoAlpha: 1,
//       ease: Sine.easeIn,
//       duration: 0
//     }, {
//       skewX: '0',
//       xPercent: '-125%',
//     })
//     .delay(.3)

//   let hideVideoOverlay = new TweenMax.to('.video-overlay', 1, {
//     autoAlpha: 0
//   }).delay(1)

// }

///////////////////////////////
////* Animate quote texts *////
///////////////////////////////

// let quoteHeaders = document.querySelectorAll('h3')

// Array.prototype.forEach.call(quoteHeaders, function showHeaders(el) {

//   let animateHeaders = new TimelineMax();

//   animateHeaders
//     .fromTo(el, .8, {
//       // opacity: 0,
//       // autoAlpha: 0,
//       right: '-80vw',
//       // visibility: 'hidden',
//       // ease: Power4.easeOut
//     }, {
//       // visibility: 'visible',
//       // opacity: 1,
//       // autoAlpha: 0,
//       left: '-100vw',
//       // ease: Power4.easeInOut
//     });

//   let scrollAnimateHeaders = new ScrollMagic.Scene({
//       triggerElement: el,
//       offset: 0,
//       triggerHook: .5,
//       duration: window.innerHeight
//     })
//     .setTween(animateHeaders)
//     .addTo(controller);
//   // .addIndicators();

// });

/////////////////////////////////////
////* Animate background colors *////
/////////////////////////////////////

let aboutIntroBackground = new TweenMax.to('#about, html', 1.5, {
  backgroundColor: '#252525'
});

new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .5,
    duration: window.innerHeight / 4
  })
  .setTween(aboutIntroBackground)
  .addTo(controller);
  // .addIndicators();

// let aboutBackground = new TweenMax.to('#about', 1.5, {
//   backgroundColor: '#F2ECE5'
// });

// new ScrollMagic.Scene({
//     triggerElement: '#about',
//     triggerHook: 0,
//     offset: window.innerHeight / 2,
//     duration: window.innerHeight / 12
//   })
//   .setTween(aboutBackground)
//   .addTo(controller)
//   .addIndicators();

let aboutBackground = new TweenMax.to('html', 1.5, {
  backgroundColor: '#F2ECE5'
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

////////////////////////////////////
////* Animate about me section *////
////////////////////////////////////

// let aboutMeElement = document.querySelector('.about-me');
let animateAboutElement = new TimelineMax();

animateAboutElement
  .fromTo('.about-me', 0.8, {
    opacity: 0
  }, {
    opacity: 1
  });

new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 1,
    duration: window.innerHeight / 2
  })
  .setTween(animateAboutElement)
  .addTo(controller);
  // .addIndicators();

let animateAboutParagraph = new TimelineMax();

animateAboutParagraph
  .fromTo('.first-paragraph', 0.5, {
    opacity: 0,
    yPercent: '20px'
  }, {
    opacity: 1,
    yPercent: 0
  })
  .fromTo('.second-paragraph', 0.3, {
    opacity: 0,
    yPercent: '20px'
  }, {
    opacity: 1,
    yPercent: 0
  })
  .fromTo('.about-me a', 0.3, {
    opacity: 0
  }, {
    opacity: 1
  });

// Hide H1-about

let hideH1About = new TimelineMax();

hideH1About
  .fromTo('.fixed-h1', 0.8, {
    opacity: 1
  }, {
    opacity: 0
  });

new ScrollMagic.Scene({
    triggerElement: '.about-me',
    triggerHook: 0,
    offset: -window.innerHeight / 1.5,
    duration: window.innerHeight / 2
  })
  .setTween(hideH1About)
  .addTo(controller);
// .addIndicators();

new ScrollMagic.Scene({
    triggerElement: ".about-me",
    offset: -window.innerHeight / 12
    // troggerHook: 0.5,
    // duration: window.innerHeight
  })
  .setTween(animateAboutParagraph)
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