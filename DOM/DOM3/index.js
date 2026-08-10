const parent=document.body


parent.style.display = 'flex';
parent.style.flexDirection = 'column';
parent.style.alignItems = 'flex-start'; 



const input=document.createElement('input')
input.id='todoInput'
input.type='text'


const btn=document.createElement('button')
btn.id='addTodo'
btn.innerText='Add'
btn.style.marginTop='10px'

const ul=document.createElement('ul')
ul.id='todoList'

document.body.append(input,btn,ul)

btn.addEventListener('click',(event)=>{
  if (input.value.trim() === "") return;
  const li=document.createElement('li')
  li.textContent=input.value
  const btn1=document.createElement('button')
  btn1.innerText='Delete'
  li.append(btn1)
  ul.append(li)
  input.value=""
  btn1.style.marginLeft ="10px"

  li.style.marginTop="10px"

  btn1.addEventListener('click',(event)=>{
     li.remove()
  })

})