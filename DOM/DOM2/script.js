const h1=document.createElement('h1')
h1.id='count'
h1.textContent=0

const btn1=document.createElement('button')

const btn2=document.createElement('button')

const btn3=document.createElement('button')

btn1.id='increase'
btn1.innerText="Increase"

btn2.id='decrease'
btn2.innerText="Decrease"
btn2.style.marginLeft='10px'

btn3.id='reset'
btn3.innerText="Reset"
btn3.style.marginLeft='10px'


document.body.append(h1,btn1,btn2,btn3)

const btn=document.querySelectorAll('button')

btn.forEach(x => {
  x.addEventListener('click',(event)=>{
    if(x.id==='increase')h1.textContent++
    if(x.id==='decrease')h1.textContent--
    if(x.id==='reset')h1.textContent=0
  })
})