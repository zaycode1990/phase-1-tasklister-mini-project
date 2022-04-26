document.addEventListener("DOMContentLoaded", () => {
 
  // your code here
 let form = document.querySelector("form")
 
 form.addEventListener('submit', (e) => {
   e.preventDefault()
 buildATask(e.target.querySelector('#new-task-description').value)
  })
})

function buildATask(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = '  delete'
  li.textContent = `${task}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

