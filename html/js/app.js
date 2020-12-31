(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".t1",
      start: "center center",
      end: () => '+=' + innerHeight * 1.2,
      // markers: true,
      scrub: 1,
      pin: true
    }
  })
  .from('.img-groom', { opacity: 0 }, 0)
  .from('.t1 .g-text-00, .t1 .g-text-02, .t1 .g-text-03', { color: '#000' }, 0)
  .from('.t1 .g-text-01', {
    fontSize: 0,
    opacity: 0
  }, 0)
  .to('.groom-greeting', {y: -10})

  gsap.timeline({
    scrollTrigger: {
      trigger: ".t2",
      start: "top top",
      end: () => '+=' + innerHeight * 1.2,
      // markers: true,
      scrub: 1,
      pin: true
    }
  })
  .from('.t2 .g-text-00, .t2 .g-text-02, .t2 .g-text-03', { color: '#000' }, 0)
  .from('.img-bride', { opacity: 0 }, 0)
  .from('.t2 .g-text-01', {
    fontSize: 0,
    opacity: 0
  }, 0)
  .to('.bride-greeting', {y: -10})

  gsap.timeline({
    scrollTrigger: {
      trigger: ".t3",
      start: "center center",
      end: () => '+=' + innerHeight * 2,
      markers: true,
      scrub: 1,
      pin: true
    }
  })
  .to('.section-1-headline', {transform: 'scale(30)', opacity: 0})
  .fromTo('.img-together', {
    opacity: 0,
    transform: 'scale(0)'
  }, {
    opacity: 1,
    transform: 'scale(2)',
    borderRadius: 0,
  }, 0)
  // .to('.t3', {backgroundColor: '#1d1d1f'},0)
  .to('.img-together', {y: -50, transform: 'scale(2.5)'})

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t4',
      start: 'top top',
      end: () => '+=' + innerHeight * 2,
      markers: true,
      scrub: 1,
      pin: true
    }
  })
  .fromTo('.so', {opacity: 0}, {opacity: 1, y: -10})
  .to('.so', {opacity: 0})
  .to('.t4', {backgroundColor: '#fff'})
  .fromTo('.when', {opacity: 0}, {opacity: 1, y: -10})
  .to('.when', {fontSize: '10vw'})
  .fromTo('.when-answer', {opacity: 0}, {opacity: 1, y: -10})
  .to('.when-wrapper', {opacity: 0})
  .fromTo('.where', {opacity: 0}, {opacity: 1, y: -10})
  .to('.where', {fontSize: '10vw'})
  .fromTo('.where-answer', {opacity: 0}, {opacity: 1, y: -10})
  .fromTo('.dark-background span', {
    transform: 'scale(0)'
  }, {
    transform: 'scale(100)'
  })
  .to('.t4', {backgroundColor: '#1d1d1f'})
  .fromTo('.img-map', {
      opacity: 0,
      transform: 'scale(5)'
    }, {
      opacity: 1,
      transform: 'scale(1)'
    })

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.t5',
  //     start: 'top top',
  //     end: () => '+=' + innerHeight * 2,
  //     markers: true,
  //     scrub: 1,
  //     pin: true
  //   }
  // })
  // .fromTo('.img-map', {
  //   opacity: 0,
  //   transform: 'scale(5)'
  // }, {
  //   opacity: 1,
  //   transform: 'scale(1)'
  // })

})();