class DOM{
    constructor(tagname, innerText, className){
        this.node = document.createElement(tagname); //전달된 tagname의 요소가 생성됨
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className); //className이 존재하면 class 목록에 className 적용
    }
}

export default DOM;