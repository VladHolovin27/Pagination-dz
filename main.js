const fetchPostsBtn = document.querySelector('.btn')
function a() {
    fetch('https://pixabay.com/api/?key=42629002-9d7d7e0f76ae1b8339ce7d0b4&q=')
    .then(response => response.json())
    .then(api => {
    if(api.hits && api.hits.length > 5) {
        const img = document.createElement('img');
        img.src = api.hits[0].webformatURL; 
        document.body.appendChild(img);
    }
    })
    return;
}
a();

let page = 1;

fetchPostsBtn.addEventListener("click", () => {
  try {
    a();
    page += 1;

    if (page > 1) {
      fetchPostsBtn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

// У моєму коді, api.hits перевіряє, чи існує масив hits в отриманому JSON з URL.
// Якщо hits існує і його довжина більша за 5, то створюється новий елемент зображення,
// його URL-адреса встановлюється на URL-адресу першого зображення в hits,
// і це зображення додається до тіла документа.