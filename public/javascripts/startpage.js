const tenQuestions = document.querySelector("#tenQuestions");
const allQuestions = document.querySelector("#allQuestions");
const principlesQuestions = document.querySelector("#principlesQuestions");
const systemQuestions = document.querySelector("#systemQuestions");
const rightsQuestions = document.querySelector("#rightsQuestions");
const colonialQuestions = document.querySelector("#colonialQuestions");
const eighteenQuestions = document.querySelector("#eighteenQuestions");
const recentQuestions = document.querySelector("#recentQuestions");
const symbolsQuestions = document.querySelector("#symbolsQuestions");

buttons = [tenQuestions, allQuestions, principlesQuestions, systemQuestions, rightsQuestions, colonialQuestions, eighteenQuestions, recentQuestions, symbolsQuestions]

for (let button of buttons) {
    button.addEventListener("click", () => {
        startRequest(button.id);
    })
};

function startRequest(type) {
    let data = {
        type: type,
    };
    fetch("/config", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => {
            window.location.href = res.url;
        })
        .catch(function (err) {
            console.info(err + " url: " + url);
        });
}