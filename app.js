// questions with 4 answers (a,b,c,d)
// click answer and submit button
// show end score when finished

debugger;

const quizQuestions = [
    {
        question: "Who was the first US president?",
        answers: {
            a: "George Washington",
            b: "Abraham Lincoln",
            c: "Elon Musk",
            d: "Thomas Jefferson"
        },
        correctAnswer: "a"
    }, {
        question: "How many materials do you need for a full set of armor in Minecraft?",
        answers: {
            a: "69",
            b: "420",
            c: "24",
            d: "32"
        },
        correctAnswer: "c"
    }, {
        question: "What is the most subbed channel on YouTube?",
        answers: {
            a: "PewDiePie",
            b: "Cocomelon - Nursery Rhymes",
            c: "SET India",
            d: "T-Series"
        },
        correctAnswer: "d"
    }, {
        question: "Who is the most followed Twitch streamer?",
        answers: {
            a: "xQcOW",
            b: "Ninja",
            c: "Asmongold",
            d: "Tfue"
        },
        correctAnswer: "b"
    }
];
const aText = document.getElementById("a-Text");
const bText = document.getElementById("b-Text");
const cText = document.getElementById("c-Text");
const dText = document.getElementById("d-Text");
const submitBtn = document.getElementById('SubmitButton');
let quizScore = 0;

loadQuiz();

function loadQuiz() {

};