import TodoController from "./controller/TodoController.js";
//import CompleteController from "./controller/CompleteController.js";

const addBtn = document.getElementById('input'); //버튼은 id
const allBtn = document.getElementById('all');
const input = document.querySelector('input');

addBtn.addEventListener('click', () => {
    const todoText = input.value.trim();
    //console.log(input.value);
    const todoController = new TodoController(todoText);
    //const completeController = new CompleteController(input.value);
    todoController.addTodo();
    //completeController.addTodo();
}); //function(){}와 동일

allBtn.addEventListener('click', () => {
    todoController.allTodo();
});

/*
this.delBtnNode.addEventListener('click', ()=> {
    const completeController = new CompleteController(input.value);
    completeController.addTodo();
}); //ctrl + alt + 아래
*/
