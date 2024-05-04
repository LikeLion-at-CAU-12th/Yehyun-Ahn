class Button {
    constructor(text, className, imagePath) {
        this.node = document.createElement('button'); // 버튼 요소 생성

        if (className) {
            this.node.classList.add(className); // className이 주어진 경우 클래스 추가
        }

        if (imagePath) {
            // 이미지 버튼을 위해 <img> 요소 생성
            const img = document.createElement('img');
            img.src = imagePath; // 이미지 경로 설정
            this.node.appendChild(img); // 버튼에 이미지 추가
        } else {
            // 텍스트 버튼 생성
            this.node.textContent = text; // 버튼 텍스트 설정
        }
    }
}

export default Button;
