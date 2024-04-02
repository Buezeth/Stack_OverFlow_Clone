
gsap.registerPlugin(TextPlugin);


const changingText = document.querySelector(".changing-text");
console.log(changingText);

let change = ["game developer", "mobile developer", "developer", "data scientist"];

const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
tl.to(changingText, {duration: 4,  text:" is so much fun you should try it some time!"});