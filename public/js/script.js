
const getAsyncBtn = document.getElementById("getAsync");


getAsyncBtn.addEventListener('click', getDataAsync);

async function getDataAsync() {
    const response = await fetch('http://localhost:3000/social');
    const data = await response.json();
    console.log(data);
}
