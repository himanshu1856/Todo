const addTodoBtn = document.querySelector('.add-todo')
const todoInput = document.querySelector('.todo-input')
const listContainer = document.querySelector('.list-container')
addTodoBtn.addEventListener('click',addTodo)
todoInput.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        addTodo()
    }
})

function addTodo(){
    let input = todoInput.value 
    if(!input){
        return
    }
    createTodo(input)
    todoInput.value = ''
}

function createTodo(todo){
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-item')

    let pTag = document.createElement('p')
    pTag.classList.add('todo-input')
    pTag.textContent = todo

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-todo')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click',(e)=>{
        e.target.parentNode.remove()
    })

    todoDiv.appendChild(pTag)
    todoDiv.appendChild(deleteBtn)
    listContainer.appendChild(todoDiv)
}