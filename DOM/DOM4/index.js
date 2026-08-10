const users = [
  { name: "John", role: "Developer" },
  { name: "Jane", role: "Designer" },
  { name: "Mike", role: "Developer" },
  { name: "Sara", role: "Manager" },
  { name: "Alex", role: "Developer" }
];

const h3 = document.createElement('h3')
h3.innerText = "search: "

const form = document.createElement('form')
form.className = 'search-container'
form.action = '/search'
form.method = 'GET'

const input = document.createElement('input')
input.type = "search" 
input.id = "search-input" 
input.name = "search-input" 
input.placeholder = "Search for items..." 

form.append(input)

const searchRow = document.createElement('div')
searchRow.className = 'search-row-layout'


const div1=document.createElement('div')

users.forEach(obj => {
  const li=document.createElement('li')
  li.innerText=`${obj.name} - ${obj.role}`
  div1.append(li)
})

div1.style.marginTop="10px"

searchRow.append(h3, form,div1)

document.body.append(searchRow)

input.addEventListener('input',(event) => {
  const filterText = event.target.value.toLowerCase();
  const listItems = div1.querySelectorAll('li');

  listItems.forEach(li => {
    const text = li.innerText.toLowerCase();
    li.style.display = text.includes(filterText) ? "" : "none";
  });
})
