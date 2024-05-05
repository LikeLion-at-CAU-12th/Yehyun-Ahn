const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

const container = document.getElementById("container");

const option = {
  serviceKey:
    "mucsvP6fxRUURgF3e8jkjoOO%2BmPL4fHhH3rusMXZ7TMkEKtZumjjnHAo190wYj%2BJUQb0bUREKyG82fQe%2FsaKBg%3D%3D",
  numofRows: 5,
  MobileApp: "test",
  MobileOS: "ETC",
  arrange: "A",
  _type: "json",
  pageNo: 1,
};

let count = 0;
let imsi = 0;

async function getData() {
  //const random = Math.floor(Math.random() * 100 + 1);
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${imsi}&serviceKey=${option.serviceKey}`;

  const fetchData = await fetch(url);
  //console.log(fetchData);

  const toJson = await fetchData.json();
  //console.log(toJson);

  const datas = await toJson.response.body.items.item;
  //console.log(datas);

  datas.map((data, i) => {
    imsi++;
    const list = document.createElement("div");
    list.id = "list";

    const image = document.createElement("img");
    image.src = data.galWebImageUrl;

    const info = document.createElement("span");
    info.innerText = `
        📌 ${i + 1 + 5 * count}번째 사진
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}`;

    const button = document.createElement("button");
    button.innerText = "더보기";

    button.addEventListener("click", () => {
      openDetailPage(data);
    });

    list.appendChild(image);
    list.appendChild(info);
    list.appendChild(button);

    container.appendChild(list);
  });
  count++;
}

function openDetailPage(data) {
  const detailUrl = `detail.html?id=${data.galId}&title=${encodeURIComponent(data.galTitle)}&time=${encodeURIComponent(data.galCreatedtime)}&photographer=${encodeURIComponent(data.galPhotographer)}&keyword=${encodeURIComponent(data.galSearchKeyword)}`;
  window.open(detailUrl, '_blank');
}

getData();