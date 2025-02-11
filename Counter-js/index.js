let decreasebtn = document.getElementById("decreasebtn");
let resetbtn = document.getElementById("resetbtn");
let increasebtn = document.getElementById("increasebtn");
let countlabel = document.getElementById("countlabel");
let count = 0;

decreasebtn.onclick = () => {
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = () => {
    count = 0;
    countlabel.textContent = count;
}

increasebtn.onclick = () => {
    count++;
    countlabel.textContent = count;
}
