const input = document.querySelector('.input-field')
const addBtn = document.querySelector('.btn.add')
const list = document.querySelector('.list')
const deleteBtn = document.querySelector('.btn.delete')

let tasks = []
const addTask = () => {
  let newTask = ''
  newTask = input.value
  tasks.push(newTask)
  let li = document.createElement('li')
  list.appendChild(li)
  const listContainer = document.createElement('div')
  listContainer.classList.add('list-flex')
  li.appendChild(listContainer)
  const itemContainer = document.createElement('div')
  itemContainer.classList.add('item')
  listContainer.appendChild(itemContainer)
  itemContainer.innerText = newTask
  const btnContainer = document.createElement('div')
  btnContainer.classList.add('btn-flex')
  listContainer.appendChild(btnContainer)
  const doneBtn = document.createElement('div')
  doneBtn.classList.add('btn')
  doneBtn.classList.add('done')
  doneBtn.innerText = 'Done'
  btnContainer.appendChild(doneBtn)
  const deleteBtn = document.createElement('div')
  deleteBtn.classList.add('btn')
  deleteBtn.classList.add('delete')
  deleteBtn.innerText = 'Delete'
  btnContainer.appendChild(deleteBtn)
  doneBtn.addEventListener('click', (e) => {
    doneTask(e)
  })
  deleteBtn.addEventListener('click', (e) => {
    deleteTask(e)
  })
  input.value = ''
}

addBtn.addEventListener('click', () => {
  addTask()
})

const deleteTask = (e) => {
  let newBtn = e.target
  newBtn.parentElement.parentElement.parentElement.remove()
}

const doneTask = (e) => {
  let checkContainer = e.target
  const checkMark = document.createElement('div')
  checkMark.classList.add('checked')
  checkContainer.appendChild(checkMark)
}
