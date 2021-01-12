btnOne = document.querySelector("#buttonOne");
btnTwo = document.querySelector("#buttonTwo");
btnThree = document.querySelector("#buttonThree");
btnFour = document.querySelector("#buttonFour");
nextLi = document.querySelector("#nextLi");

const buttons = [btnOne, btnTwo, btnThree, btnFour];

for (let button of buttons) {
    button.addEventListener("click", function () {
        nextLi.classList.remove("d-none");
        get_answer(button, true).then((value) => {
            if (value === "correct") {
                correct_buttons_change(button);
            } else {
                wrong_buttons_change(button);
            }
        });
    });
}

function correct_buttons_change(button) {
    make_correct(button)
    const others = other_buttons(button)
    for (let item of others) {
        make_irrelevant(item)
    }
}

function wrong_buttons_change(button) {
    const others = other_buttons(button)
    for (let button of others) {
        get_answer(button, false).then((value) => {
            if (value === "correct") {
                make_correct(button)
            } else {
                make_irrelevant(button)
            }
        });
    }
make_wrong(button)
}

function other_buttons(button) {
    const others = buttons.filter(function (value, index, arr) {
        return value !== button;
    });
    return others
}

function make_correct(button) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    button.classList.add("disabled");
}

function make_wrong(button) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
    button.classList.add("disabled");   
}

function make_irrelevant(button) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-secondary");
    button.classList.add("disabled");
}

async function get_answer(button, marker) {
    let result = await makeRequest(button, marker);
    return result;
}

function makeRequest(button, marker) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/answer", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            resolve(this.responseText);
        } else {
            reject({
            status: this.status,
            statusText: this.statusText,
            });
        }
        };
        xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: xhr.statusText,
        });
        };
        const data = {
            text: button.innerText,
            marker: marker
        }
        xhr.send(JSON.stringify(data));
    });
}