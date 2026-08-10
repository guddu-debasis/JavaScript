const s=document.querySelectorAll('.button')
const div=document.querySelector('.canvas')
const h2=document.createElement('h2')
div.append(h2)

s.forEach((s)=>{
  s.addEventListener('click',(event)=>{
    document.body.style.backgroundColor=`${s.id}`
    h2.innerText=`The color of the backgound is:${s.id}`
  })
})

