//import Button from "./Button.js";
import Button from "./imgButton.js";
import Div from "./Div.js";

class Todo{
    constructor(todo){
        this.row = new Div('', 'row').node; //긴 부모 태그 하나
        this.textBox = new Div(todo, 'text-box'); //text
        this.completeBtn = new Button('', 'complete-btn', '../images/check.png');
        this.delBtn = new Button('', 'del-btn', '../images/x.png');

        //this.completeBtn = new Button('완료', 'complete-btn'); //버튼 한개
        //this.delBtn = new Button('삭제', 'del-btn'); //버튼 두개
    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node); //row 태그 아래 넣겠다
        })

        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getdelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    } //todo
}

export default Todo;