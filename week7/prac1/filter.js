//fetch에서 선언돼서 필요 없음

const filterData = () =>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    } //처음 눌렀을 때 한번만 나오게 (container안에 자식 요소 있으면 지우기)
    
    fetch(url)
    .then((response)=>{
        return response.json() //json 형태로 바꾸고
    })
    .then((response)=>{
        console.log(response.frontend); //여기서 받아서 출력 (.frontend는 value만 출력한단 뜻)
        const datas = response.frontend;

        datas
        .filter((data)=> data.role == '아기사자') //중괄호 하면 return 써줘야
        .map((data)=>{
            const list = document.createElement('div'); //div 태그 가진 list라는 DOM 만듦.
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다-!`

            container.appendChild(list); //가져온 DOM 요소 html container에 list 넣어주기
            console.log(data);
        }) //data 배열의 하나하나 요소, map으로 순회
    })
}