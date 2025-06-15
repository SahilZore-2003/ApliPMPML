const expireDiv = document.getElementById("expireTime");

function getTimeUntilNextNoon() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `Expires in ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

}




setInterval(() => {
    expireDiv.innerText = getTimeUntilNextNoon()
}, 1000)

// const colors = ["#f44336", "#4CAF50", "#2196F3", "#FF9800", "#9C27B0"];
// let index = 0;
// document.body.onclick = function () {
//     // Change background color
//     document.body.style.backgroundColor = colors[index];
//     index = (index + 1) % colors.length;
//   };