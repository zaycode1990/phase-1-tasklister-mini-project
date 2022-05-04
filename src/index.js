document.addEventListener("DOMContentLoaded", () => {
 
  // your code here
 let form = document.querySelector("form")
 
 form.addEventListener('submit', (e) => {
   e.preventDefault()
 buildATask(e.target.querySelector('#new-task-description').value)

 form.reset()

  })
})

function buildATask(task){
  let li = document.createElement('li')
  document.querySelector('#tasks').appendChild(li)
  let btn = document.createElement('button')
  let styleSpan = document.createElement("span")
  btn.addEventListener('click', handleDelete)
  btn.textContent = '  delete'
  // add text to button to make known it's intent for the user 
  styleSpan.textContent = `${task}  ` 
  // make task enclosed in the span tag.for styling
  li.appendChild(styleSpan)
  li.appendChild(btn)
  const prio = document.querySelector("#priority")
  if (prio.value === "Urgent") {
    styleSpan.style.color = "red"
  } else if (prio.value === "Neutral") {
    styleSpan.style.color = "blue"
  }

  else {
    styleSpan.style.color = "green"
  }
  
  console.log(li)
  // this console log showed the value of each option in relation to select tag id
}

function handleDelete(e){
  e.target.parentNode.remove()
}
// handleDelete gives button delete functionality



