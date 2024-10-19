gsap.from('.page1 .box', {
  rotate: 360,
  duration: 1,
  delay: 1 ,
})
gsap.from('.page2 .box', {
  rotate: 360,
  duration: 1,
  delay: 0 ,
  scrollTrigger: '.page2 .box',
})