const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('show'); 
        }
      
    })
})
const hiddens = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('lift'); 
        }
      
    })
})
const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('show'); 
        }
      
    })
})
const hiddenElements = document.querySelectorAll('.observer'); 
const hidden = document.querySelectorAll('.hidden')
const observes = document.querySelectorAll('observe'); 


hiddenElements.forEach((el)=>
    observer.observe(el)
)
hidden.forEach((el)=>
    hiddens.observe(el)
)
observes.forEach((el)=>{
    observe.observe(el)
})