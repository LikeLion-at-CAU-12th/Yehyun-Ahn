document.addEventListener('DOMContentLoaded', () => {
    // URL에서 쿼리 파라미터 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const photoId = urlParams.get('id');
    const photoTitle = decodeURIComponent(urlParams.get('title'));
    const photoTime = decodeURIComponent(urlParams.get('time'));

    const formatDateTime = (dateTimeStr) => {
        const year = dateTimeStr.substr(0, 4);
        const month = dateTimeStr.substr(4, 2);
        const day = dateTimeStr.substr(6, 2);
        const hour = dateTimeStr.substr(8, 2);
        const minute = dateTimeStr.substr(10, 2);
        const second = dateTimeStr.substr(12, 2);

        return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    };

    const photoTitleContainer = document.getElementById('photoTitle');
    if (photoTitleContainer) {
    const titleElement = document.createElement('div');
    titleElement.textContent = `선택한 사진 제목: ${photoTitle}`;
    photoTitleContainer.appendChild(titleElement);

    const formattedDateTime = formatDateTime(photoTime);
    const timeElement = document.createElement('div');
    timeElement.textContent = `날짜: ${formattedDateTime}`;
    photoTitleContainer.appendChild(timeElement);
}


});



