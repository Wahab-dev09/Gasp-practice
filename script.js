const menu = document.querySelector("#menu")
const close = document.querySelector("#close")
const tl = gsap.timeline();
tl.to(".drawer",{
  right:0,
  duration: 0.4,
})
tl.from(".drawer>h2",{
  opacity:0,
  x:100,  duration: 0.4,
  stagger:0.3,
})
tl.from(".drawer>svg",{
  opacity:0,
  stagger:0.3,
})
tl.pause();
menu.addEventListener('click', ()=>{
  tl.play();
})
close.addEventListener('click', ()=>{
  tl.reverse();
})