let todos = [];

function addTodo(){
    const input = document.querySelector('#input');
    const data = input.value;

    todos.push( {data} );
    input.value = '';
    renderTodos();
}


function createTodoComponent(todo){
    const div = document.createElement('div');
    div.className = "todo";
    const h3 = document.createElement('h3'); 
    h3.innerHTML = todo.data; 

    const buttons = document.createElement("button");
    buttons.innerHTML = 'delete'; 

    buttons.onclick = function(){
        const index = todos.indexOf(todo);
        todos.splice(index,1);
        renderTodos();
    }
    div.appendChild(h3);
    div.appendChild(buttons);
    return div;


}
function renderTodos(){
    const ele = document.querySelector('#todos'); 
    ele.innerHTML = '';
    todos.forEach(todo =>{
        const elem = createTodoComponent( todo);
        ele.appendChild(elem);

    })
}