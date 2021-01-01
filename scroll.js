(() => {

  // t0
  let t0 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t0',
      start: 'center center',
      end: () => '+=' + innerHeight,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t0.from('.img-groom', {opacity: 0}, 0)
  t0.from('.greeting.groom', {color: '#1d1d1f', duration: 0.1}, 0)
  t0.from('.greeting.groom .greeting-text-1', {fontSize: 0}, 0)
  t0.to('.greeting.groom', {y: -innerHeight, opacity: 0})

  // t1
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t1',
      start: 'center center',
      end: () => '+=' + innerHeight,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t1.from('.img-bride', {opacity: 0}, 0)
  t1.from('.greeting.bride', {color: '#1d1d1f', duration: 0.1}, 0)
  t1.from('.greeting.bride .greeting-text-1', {fontSize: 0}, 0)
  t1.to('.greeting.bride', {y: -innerHeight, opacity: 0})

  //t2
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t2',
      start: 'center center',
      end: () => '+=' + innerHeight * 2,
      scrub: 1,
      pin: true,
      // markers:  true
    }
  })
  t2.to('.t2 .img-groom', {x: -67.9 + '%', delay: 0.19}, 0)
  t2.to('.t2 .img-bride', {x: 32 + '%'}, 0)
  t2.fromTo('.we-get-married', {opacity: 0}, {opacity: 1, delay: 0.5}, 1)
  t2.to('.we-get-married', {transform: 'scale(10)', opacity: 0, delay: 1, duration: 5}, 1)
  // t2.to('.t2 .flex-center', {backgroundColor: '#1d1d1f', delay: 0.45}, 1)
  // t2.to('.we-get-married', {opacity: 0, delay: 0.15}, 1)
  t2.to('.img-together-wrapper', {backgroundColor: '#1d1d1f'}, 2)
  t2.to('.img-together-wrapper img', {opacity: 0}, 2)

  //t3
  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t3',
      start: 'center center',
      end: () => '+=' + innerHeight,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t3.fromTo('.text-so', {opacity: 0}, {opacity: 1, y: -10})
  t3.fromTo('.text-when', {opacity: 0}, {opacity: 1, y: -10})
  t3.from('.when-answer', {opacity: 0})
  t3.to('.text-so, .text-when', {opacity: 0})
  t3.to('.when-answer, .when-answer p', {fontSize: '2rem', display: 'flex', y: -20, duration: 1})
  t3.fromTo('.text-where', {opacity: 0}, {opacity: 1, y: -10})
  t3.fromTo('.text-where-answer', {opacity: 0}, {opacity: 1, y: -10})
  t3.from('.dark-background', {x: -50 + '%', y: -50 + '%', transform: 'scale(0)'})

  //t4
  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t4',
      start: 'center center',
      end: () => '+=' + innerHeight * 2,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t4.from('.img-map', {opacity: 0, x: -50 + '%', y: -50 + '%', transform: 'scale(5)', borderRadius: 50 + '%'})

  // t5
  let t5 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t5',
      start: 'center center',
      end: () => '+=' + innerHeight * 2,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t5.from('.text-well', {opacity: 0})
  t5.from('.text-like-this', {opacity: 0}, 1)
  t5.from('.img-together2', {opacity: 0}, 1)
  t5.to('.img-together2', {width: '120%', left: 0, bottom: 0}, 2)
  t5.to('.text-well, .text-like-this', {opacity: 0}, 2)

})();