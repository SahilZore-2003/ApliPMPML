const expireDiv = document.getElementById("expireTime");
const dateDiv = document.querySelectorAll(".date");

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

function getFormattedDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

dateDiv.forEach((e) => e.innerText = getFormattedDate())