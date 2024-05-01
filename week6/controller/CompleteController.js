import Complete from "../DOM/Complete.js";

class CompleteController {
    constructor(todo){
        this.todo=todo;
        this.complete = new Complete(this.todo);
        this.innerNode = this.complete.getInnerText();
        //this.completeList = document.getElementById("complete-list");
    }
    addTodo(){
        //const newCompleteTodo=new Complete(todoText);
        //this.completeList.appendChild(newCompleteTodo.addRow());
        const completeList = document.getElementById("complete-list");
        const row = this.complete.addRow();
        completeList.appendChild(row);
        //const input = document.querySelector('input');
        //const row = document.querySelector('input');
        //completeList.appendChild(this.complete.addRow());
    }
}

//const input = document.querySelector('input');
//const inputValue = input.value;

//const controller = new CompleteController(inputValue);

//controller.addTodo;

export default CompleteController;