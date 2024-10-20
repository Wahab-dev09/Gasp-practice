const initialPath = `M 0 80 Q 300 -20 600 80`;
const finalPath = `M 0 80 Q 300 -20 600 80`;
const string=document.querySelector('.string');
string.addEventListener('mousemove',(dets)=>{
  const path = `M 0 80 Q 300 ${dets.y} 600 80`;
  console.log(path);
  gsap.to("svg path",{
    attr: {d:path}
  })
})
string.addEventListener('mouseleave',()=>{
  console.log("Leaved!")
})