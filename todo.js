//functions []
let Todolist = [];
function addTask() {
    const input = document.getElementById('taskInput');
    const tasktext = input.value.trim();
    if(tasktext === "") return;

    const newtask = {
        id: Todolist.length+1,
        task: tasktext,
        completed:false


    };
    Todolist.push(newtask);
    input.value = "";
    showtasks();

}

function showtasks(){
    const list = document.getElementById('tasklist');
    list.innerHTML = "";
    Todolist.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.task;
    li.innerHTML = `${task.task} - ${task.completed ? 'completed' : `<button onclick="completeTask(${task.id})">complete task</button>`}
        <button onclick="deleteTask(${task.id})">Delete</button>`;
    list.appendChild(li);
    });
}
function completeTask(id) {
const tasku = Todolist.find(t => t.id === id);
if(tasku) tasku.completed = true;
showtasks();
}
function deleteTask(id){
    Todolist=Todolist.filter(t => t.id !== id);
    showtasks();
}

const products = [
    {id:1, name:"grapes", price:300},
    {id:2, name:"Apples", price:200},
    {id:3, name: "pineapple",price:500},
    {id:4, name: "orange", price:600}

];

function filterProducts() {
  const list = document.getElementById('filteredlist') 
  const filtered = products.filter(p => p.price < 500);
  list.innerHTML = '';
  filtered.forEach(products => {
    const li = document.createElement('li');
    li.textContent = `${products.name} - ${products.price}`;
    list.appendChild(li);

  } ) ;
}



    