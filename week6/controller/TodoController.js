import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todoText){
        this.todoText=todoText;
        this.newTodo = new Todo(todoText);
        this.delBtnNode = this.newTodo.getdelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', ()=> {
            this.complete();
            this.delTodo();
        }); //ctrl + alt + 아래
        this.comBtnNode.addEventListener('click', ()=> {
            this.doneTodo();
        });
        this.completeController = new CompleteController();
    }
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = ''; //처리 완료되면 비워줌
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow()); //appendChild와 반대
    }
    doneTodo(){
        this.innerNode.classList.toggle('done-text');
        const imgElement = this.comBtnNode.querySelector('img');

        if(currentSrc.includes('../images/check.png')){
            imgElement.src = '../images/re.png';
        }
        else{
            imgElement.src = '../images/check.png';
        }
    }
    complete(){
        //this.doneTodo();
        //this.completeController.addTodo();
        const completeController = new CompleteController(this.todoText);
        completeController.addTodo();
        //const completeController=new CompleteController(this.newTodo.getInnerText());
        //completeController.addTodo();
        //const completeController = new CompleteController(this.newTodo.getInnerText());
        //const completeController = new CompleteController(input.value);
        //this.CompleteController.addTodo();
        //const completeList = document.getElementById("complete-list");
        //const input = document.querySelector('input');
        //completeList.appendChild(this.newTodo.addRow());
    }
}

export default TodoController;