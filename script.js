function BreakTheText(){
  const h1 = document.querySelector('h1');
const h1Text = h1.textContent;
const splittedText = h1Text.split("");
const halfvalue = splittedText.length/2;
console.log(halfvalue)
let clutter = "";
splittedText.forEach((elem,idx)=>{
  if(idx<halfvalue){
    clutter += `<span class='a'>${elem}</span>`;
  }else{
    clutter += `<span class='b'>${elem}</span>`;
  }
});
h1.innerHTML = clutter;
console.log(clutter)
}
BreakTheText();
gsap.from('h1 .a', {
  opacity:0,
  y: 30,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.2,
})
gsap.from('h1 .b', {
  opacity:0,
  y: 30,
  duration: 0.6,
  delay: 0,
  stagger: -0.25,
})