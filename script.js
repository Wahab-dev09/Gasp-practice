gsap.to(".fanta", {
  x: '-185%',                  // Move 20% to the left
  y: '200%',                  // Move 150% down
  rotate: -10,
  duration: 1,
  scrollTrigger:{
    trigger: ".page2",
    start: "top 100%",
    end: "top 30%",
    scrub: 2,
  }
})
gsap.to(".orange", {
  x: '200%',                  // Move 20% to the left
  y: '330%',                  // Move 150% down
  rotate: -10,
  duration: 1,
  scrollTrigger:{
    trigger: ".page2",
    start: "top 100%",
    end: "top 30%",
    scrub: 2,
  }
})