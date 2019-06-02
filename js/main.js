let rellax = new Rellax('.project-info')
let controller = new ScrollMagic.Controller();

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
	// speedAsDuration: true
});

/////////////////////////////////////
////* Add fixed position to h1  *////
/////////////////////////////////////

function stickyHeader() {

  let fixedH1 = document.querySelector('.fixed-h1');
  let about = document.getElementById('about-intro');
  let aboutTop = about.offsetTop;

  if (window.scrollY >= aboutTop) {
    fixedH1.classList.add('sticky-h1');
  } else {
    fixedH1.classList.remove('sticky-h1');
  }
}

document.addEventListener('scroll', function() {
  stickyHeader();
})

////////////////////////////////////
////* Animate project previews *////
////////////////////////////////////

let projects = document.querySelectorAll('.project')

Array.prototype.forEach.call(projects, function showProjects(el) {

  let overlay = el.querySelectorAll('.overlay');
  let projectInfo = el.querySelectorAll('.project-info');
  var projectH6 = el.querySelectorAll('.project-info h6');
  var projectParagraph = el.querySelectorAll('.project-info p');
  var projectH4 = el.querySelectorAll('.project-info h4');
  var projectLink = el.querySelectorAll('.project-info a');


  let animatePreview = new TimelineMax();

  animatePreview
    .fromTo(overlay, .8, {
      scale: 1
    }, {
      xPercent: 100,
      transformOrigin: '0% 100%',
      ease: Power4.easeInOut
    }, '-=2')
    .from(projectInfo, .3, {
      // scaleY: 0,
      opacity: 0,
      // transformOrigin: 'left'
    }, '-=1.4')
    .from(projectH6, .2, {
      opacity: 0,
      yPercent: '+=20px'
    }, '+=0')
    .from(projectParagraph, .3, {
      opacity: 0,
      yPercent: '+=10px'
    })
    .from(projectLink, .3, {
      opacity: 0
    }, '-=.2');


  let animateProjects = new ScrollMagic.Scene({
      triggerElement: el,
      offset: -window.innerHeight / 4
    })
    .setTween(animatePreview).addTo(controller);
  // .addIndicators()

});

///////////////////////////////
////* Animate quote texts *////
///////////////////////////////

let quoteHeaders = document.querySelectorAll('h3')

Array.prototype.forEach.call(quoteHeaders, function showHeaders(el) {

  let animateHeaders = new TimelineMax();

  animateHeaders
    .fromTo(el, .8, {
      opacity: 0,
      right: '-80vw',
      visibility: 'hidden',
      // ease: Power4.easeOut
    }, {
      visibility: 'visible',
      opacity: 1,
      left: '-100vw',
      // ease: Power4.easeInOut
    });

  let scrollAnimateHeaders = new ScrollMagic.Scene({
      triggerElement: el,
      offset: 0,
      triggerHook: .5,
      duration: window.innerHeight
    })
    .setTween(animateHeaders)
    .addTo(controller);
  // .addIndicators();

});

/////////////////////////////////////
////* Animate background colors *////
/////////////////////////////////////

let aboutIntroBackground = new TweenMax.to('#about-intro', 1.5, {
  backgroundColor: '#252525'
});

new ScrollMagic.Scene({
    triggerElement: '#about-intro',
    triggerHook: 0,
    duration: window.innerHeight / 2
  })
  .setTween(aboutIntroBackground)
  .addTo(controller);
// .addIndicators();

let aboutBackground = new TweenMax.to('#about', 1.5, {
  backgroundColor: '#FBF4EC'
});

// create a scene
new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0,
    offset: window.innerHeight / 2,
    duration: window.innerHeight / 2
  })
  .setTween(aboutBackground)
  .addTo(controller);
// .addIndicators();

////////////////////////////////////
////* Animate about me section *////
////////////////////////////////////

let aboutMeElement = document.querySelector('.about-me');
console.log(aboutMeElement.offset);


let animateAboutElement = new TimelineMax();

animateAboutElement
  .fromTo('.about-me', 0.8, {
    opacity: 0
  }, {
    opacity: 1
  });

new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .75,
    duration: window.innerHeight
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
  .fromTo('.second-paragraph', 0.5, {
    opacity: 0,
    yPercent: '20px'
  }, {
    opacity: 1,
    yPercent: 0
  })
  .fromTo('.about-me a', 0.5, {
    opacity: 0
  }, {
    opacity: 1
  });

new ScrollMagic.Scene({
    triggerElement: ".about-me",
    // troggerHook: 0.5,
    // duration: window.innerHeight
  })
  .setTween(animateAboutParagraph)
  .addTo(controller);
  // .addIndicators();