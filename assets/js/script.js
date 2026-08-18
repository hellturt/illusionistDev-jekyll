
document.addEventListener('DOMContentLoaded', function (event) {
  gsap.registerPlugin(ScrollTrigger);

  // HOME ANIMATION
  const circleDeco = gsap.utils.toArray('.section-title .dot');
  circleDeco.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 0.5,
      duration: .5,
    });
  });

  const sectionTitle = gsap.utils.toArray('.normal h2');
  sectionTitle.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -50,
      duration: .5,
    });
  });

  gsap.from('.reverse h2', {
    scrollTrigger: {
      trigger: '.reverse h2',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: 50,
    duration: .5,
  });

  gsap.from('.main-section .title h1', {
    opacity: 0,
    y: 20,
    duration: .5,
    delay: 2,
    stagger: 0.2, // delay between each .service animation
    scrollTrigger: {
      trigger: '.main-section .title h1', // parent wrapper
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.main-section .title p', {
    opacity: 0,
    x: -10,
    duration: .5,
    delay: 2.5,
    stagger: 0.2, // delay between each .service animation
    scrollTrigger: {
      trigger: '.main-section .title p', // parent wrapper
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.service', {
    opacity: 0,
    y: 50,
    duration: .5,
    stagger: 0.2, // delay between each .service animation
    scrollTrigger: {
      trigger: '.service-container', // parent wrapper
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.project-container', {
    scrollTrigger: {
      trigger: '.project-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: .5,
  });

  gsap.from('.info-container', {
    scrollTrigger: {
      trigger: '.info-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: .5,
  });
});
