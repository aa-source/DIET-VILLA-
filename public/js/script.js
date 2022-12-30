let bars = document.getElementById('bars'); 
let nav = document.getElementById('nav');
let cross = document.getElementById('cross'); 

bars.addEventListener('click',()=>{
    nav.style.display = 'block'
    bars.style.display = 'none'
  cross.style.display = 'block'
})