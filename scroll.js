function scrollEvent() {
  // t0
  // let t0 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.t0',
  //     start: 'center center',
  //     end: () => '+=' + innerHeight * 5,
  //     scrub: 1,
  //     pin: true,
  //     anticipatePin: 1,
  //     markers: true
  //   }
  // })
  // t0.from('.img-groom', {opacity: 0}, 0)
  // t0.from('.greeting.groom', {color: '#1d1d1f', duration: 0.1}, 0)
  // t0.from('.greeting.groom .greeting-text-1', {transform: 'scale(0)', height:0}, 0)
  // t0.to('.greeting.groom', {y: -innerHeight, opacity: 0})
const t0 = document.querySelector('.aaa');
  gsap.to(".greeting-groom", {
    scrollTrigger: {
      trigger: '.t0',
      // start: () => t0.offsetHeight,
      start: 'top top',
      end: () => '+=' + innerHeight,
      // end: 'bottom bottom',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // markers: true
    },
    opacity: 1,
    y: -10
  });

  gsap.to(".greeting-bride", {
    scrollTrigger: {
      trigger: '.t1',
      start: 'top top',
      end: 'top bottom',
      // end: () => '+=' + innerHeight,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // markers: true
    },
    opacity: 1,
    y: -10
  });

  gsap.to(".img-bksh", {
    scrollTrigger: {
      trigger: '.t2',
      start: 'center center',
      end: () => '+=' + innerHeight * 3,
      scrub: 1,
      pin: true,
      // markers: true
    },
    opacity: 1
  });

  // gsap.to(".info-transition", {
  //   scrollTrigger: {
  //     trigger: '.t3',
  //     start: 'center center',
  //     end: () => '+=' + innerHeight * 2,
  //     scrub: 1,
  //     pin: true,
  //     // markers: true
  //   },
  //   opacity: 1
  // });

  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t3',
      start: 'center center',
      end: () => '+=' + innerHeight * 0.5,
      scrub: 1,
      // pin: true,
      // anticipatePin: 1,
      // markers: true
    }
  })
  // t3.to('.info-transition', {
  //   opacity: 1
  // }, 0)
  t3.to('.text-info-so, .text-info-when', {
    y: -30
  }, 0)

  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t4',
      start: 'center center',
      end: () => '+=' + innerHeight * 1,
      scrub: 1,
      // pin: true,
      // anticipatePin: 1,
      // markers: true
    }
  })
  // t4.from('.info-text-when-content', {
  //   opacity: 0
  // })
  t4.to('.info-text-when-content', {
    y: -30
  })

  let t5 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t5',
      start: 'center center',
      end: 'bottom' + '+=' + innerHeight * 4,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // markers: true
    }
  })
  t5.to('.absolute-center.where', {
    y: -30,
    duration: 0.5
  })
  t5.to('.absolute-center.where', {
    opacity: 0
  })
  t5.fromTo('.absolute-center.here', {
    opacity: 0,
  }, {
    opacity: 1,
    y: -30
  })
  t5.to('.absolute-center.here', {
    transform: 'scale(10)',
    opacity: 0,
    duration: 1
  }, 2)
  t5.fromTo('.img-map', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.5
  }, 2)
  t5.from('.point-wrapper', {
    opacity: 0,
    top: 50
  })
  t5.to('.point-wrapper', {
    duration: 1
  })

  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t6',
      start: 'top top',
      end: 'bottom' + '+=' + innerHeight * 1,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t6.from('.album-item.img-01', {
    opacity: 0,
    scale: 10,
    y: -100
  }, 0)
  t6.from('.album-item.img-02', {
    opacity: 0,
    x: -100
  }, 0)
  t6.from('.album-item.img-03', {
    opacity: 0,
    scale: 2,
    x: 100
  }, 0)
  t6.from('.album-item.img-04', {
    opacity: 0,
    scale: 1.5,
    y: 100
  }, 0)
  t6.from('.album-item.img-05', {
    opacity: 0,
    x: 100,
    y: 100
  }, 0)
  t6.from('.t6 .info-text', {
    opacity: 0,
    y: 10
  }, 1)

  let t7 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t7',
      start: 'top 30%',
      end: 'bottom' + '+=' + innerHeight * 1,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t7.from('.t7 .text-bottom', {
    opacity: 0,
    y: 10
  })
  t7.to('.t7 .text-top', {
    color: '#6e6e73'
  }, 0)
  t7.from('.t7 .img-well', {
    opacity: 0,
    y: 100
  }, 0)
  t7.to('.t7 .img-well', {
    width: '100vw'
  })


  let t9 = gsap.timeline({
    scrollTrigger: {
      trigger: '.t9',
      start: 'top top',
      end: 'bottom' + '+=' + innerHeight * 8,
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
  t9.to('.t9 figure img', {
    attr: {src: `images/video/farewell_0.0241.jpg`},
    duration: 10
  }, 0)
  t9.to('.t9 .info-text', {
    x: 50,
    y: 50,
    scale: 10,
    opacity: 0,
    duration: 2,
    delay: 0.15
  }, 0)
  // t9.to('.t9 figure', {
  //   opacity: 0
  // })

}

window.onload = () => {
  scrollEvent();
}
// window.addEventListener('resize', scrollEvent);