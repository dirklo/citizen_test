const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const questionObjects = require('./seeds/question_maker');

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(methodOverride('_method'));
app.use(express.static('public'));

let questions = questionObjects


app.get('/', (req, res) => {
    questions = questionObjects
    for (let question of questions) {
        question.answered = false
        question.correct = false
    }
    res.render('start')
})

app.get('/next', (req, res) => {
    unanswered = questions.filter(function (value, index, arr) {
        if (value.answered === false) {
            return value
        }
    })

    if (unanswered.length > 0){
        currentQuestion = unanswered.sort(() => Math.random() - 0.5)[0];
        correctAnswers = currentQuestion.correctAnswers
        res.render('show');
    } else {
        incorrect = []
        for (question of questions) {
            if (question.correct === false){
                incorrect.push(question)
            }
        }

        total = questions.length
        correct = total - incorrect.length
        percent = `${Math.round(correct / total * 100)}`
        res.render('results')
    }
})

app.post('/config', (req, res) => {
    if (req.body.type === "tenQuestions") {
        questions = questions.sort(() => Math.random() - 0.5)
        questions = questions.filter(function (value, index, arr) {
            if (index < 10) {
                return value
            } 
        })
    } else if (req.body.type === "allQuestions") {
        questions = questionObjects
    } else {
        questions = questions.sort(() => Math.random() - 0.5)
        questions = questions.filter(function (value, index, arr) {
            if (value.category === req.body.type) {
                return value
            }
        })
    }
    res.redirect('next')
})

app.post('/answer', (req, res, next) => {
    if (currentQuestion.correctAnswers.includes(req.body.text)){
        if (req.body.marker === true) {
            currentQuestion.correct = true;
        }
        currentQuestion.answered = true;
        text = "correct";
    } else {
        currentQuestion.answered = true;
        text = "incorrect";
    }
    res.send(text)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})