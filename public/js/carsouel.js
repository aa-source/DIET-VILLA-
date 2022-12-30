let i = 1; 
let radio1 = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')
let radio4 = document.getElementById('radio4')

const play = ()=>{  radio1.addEventListener('click' , ()=>{
    i = 1 
})
radio2.addEventListener('click' , ()=>{
    i = 2
})
radio3.addEventListener('click' , ()=>{
    i = 3
})
radio4.addEventListener('click' , ()=>{
    i = 4 
})
}
play()
setInterval(() => {
    document.getElementById('radio'+ i ).checked = true; 
    i++;
    if(i>4){
        i=1
    }

}, 2000);
