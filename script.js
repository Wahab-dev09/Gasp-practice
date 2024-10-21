const mian = document.querySelector('.main');
const cursor = document.querySelector('.cursor');
mian.addEventListener('mousemove', (dets)=>{
  gsap.to(cursor,{
    x: dets.x,
    y: dets.y
  })
})