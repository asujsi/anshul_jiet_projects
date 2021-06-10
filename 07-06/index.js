function display(val) {
    document.querySelector("#result").value += val;
}

function solve() {
    let x = document.querySelector("#result").value;
    let y = eval(x);
    document.querySelector("#result").value = y;
}

function clr() {
    document.querySelector("#result").value = "";
}