const bc = new BroadcastChannel('test');
const container = document.getElementById("msgs")
const button = document.querySelector("#broadcast");

bc.addEventListener('message', ev => {
    const message = ev.data;
    container.innerHTML = container.innerHTML + `<li class='other'>From X: ${message}</li>`
})


button.addEventListener('click', () => {
    const tBox = document.querySelector("#text");
    bc.postMessage(tBox.value);
    container.innerHTML = container.innerHTML + `<li class='mine'>Me: ${tBox.value}</li>`
    tBox.value = '';
})
