const initialPath = `M 0 80 Q 300 -20 600 80`;
const finalPath = `M 0 80 Q 300 100 600 80`;
const string=document.querySelector('.string');
string.addEventListener('mousemove',(dets)=>{
  const path = `M 0 80 Q ${dets.x} ${dets.y} 600 80`;
  console.log(path);
  gsap.to("svg path",{
    attr: {d:path},
    duration:0.2,
    ease:'power3.out'
  })
})
string.addEventListener('mouseleave',()=>{
  gsap.to('svg path',{
    attr:{d:finalPath},
    duration:1.6,
    ease:'elastic.out(1.2,0.1)',
  })
})