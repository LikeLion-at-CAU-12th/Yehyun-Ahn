import Div from "./Div.js";

class Complete{
    constructor(complete){
        this.row = new Div('', 'row').node; //긴 부모 태그 하나
        this.textBox = new Div(complete, 'text-box'); //text
    }
    addRow(){
        [this.textBox].forEach((dom) => {
            this.row.appendChild(dom.node); //row 태그 아래 넣겠다
        })

        return this.row;
    }
    getRow(){
        return this.row;
    }
    getInnerText(){
        return this.textBox.node;
    } //todo
}

export default Complete;