const mcqs = {
  html: [
    {
      question: "What does HTML stands for?",
      options: [
        "Hypertext Machine language.",
        "Hypertext and links markup language.",
        "Hypertext Markup Language.",
        "Hightext machine language",
      ],
      correct: 2,
    },
    {
      question: "How is document type initialized in HTML5.?",
      options: [
        "</DOCTYPE HTML>",
        "</DOCTYPE>",
        "<!DOCTYPE HTML>",
        "</DOCTYPE html>",
      ],
      correct: 2,
    },
    {
      question:
        "Which of the following HTML Elements is used for making any text bold ?",
      options: ["<p>", "<i>", "<li> ", "<b>"],
      correct: 3,
    },
    {
      question:
        "Which of the following HTML element is used for creating an unordered list?",
      options: ["<ui>", "<i>", "<em>", "<ul>"],
      correct: 3,
    },
    {
      question: "Which of the following characters indicate closing of a tag? ",
      options: [".", "/", "//", "!"],
      correct: 1,
    },
  ],
  javascript: [
    {
      question: "Javascript is an _______ language?",
      options: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question:
        "Which one of the following also known as Conditional Expression:",
      options: [
        "  Alternative to if-else",
        "Switch statement",
        "If-then-else statement",
        "immediate if",
      ],
      correct: 3,
    },
    {
      question: "In JavaScript, what is a block of statement?",
      options: [
        "Conditional block",
        "block that combines a number of statements into a single compound statement",
        "both conditional block and a single statement",
        "block that contains a single statement",
      ],
      correct: 1,
    },
    {
      question:
        "When interpreter encounters an empty statements, what it will do:",
      options: [
        "Shows a warning",
        "Prompts to complete the statement",
        "Throws an error",
        "Ignores the statements",
      ],
      correct: 3,
    },
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
  ],
  css: [
    {
      question:
        "Which of the following is the correct syntax for referring the external style sheet?",
      options: [
        "<style src = example.css>",
        "<style src = 'example.css' >",
        "<stylesheet> example.css </stylesheet>",
        "<link rel='stylesheet' type='text/css' href='example.css'></link>",
      ],
      correct: 3,
    },
    {
      question:
        "The property in CSS used to change the background color of an element is -",
      options: ["bgcolor", "color", "background-color", "All of the above"],
      correct: 2,
    },
    {
      question:
        "The property in CSS used to change the text color of an element is -",
      options: ["bgcolor", "color", "background-color", "All of the above"],
      correct: 1,
    },
    {
      question: "The CSS property used to control the element's font-size is -",
      options: ["text-style", "text-size", "font-size", "None of the above"],
      correct: 2,
    },
    {
      question: "The HTML attribute used to define the inline styles is -",
      options: ["style", "styles", "class", "None of the above"],
      correct: 2,
    },
  ],
  python: [
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
    {
      question: "The 'function' and 'var' are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      correct: 2,
    },
  ],
};

// ye static ke liye jab aapne
// ye dynamically access karne ke liye
// console.log(obj[a][0].value);
let index = 0;
const question_disp = document.querySelector(".que");
const opt_1 = document.querySelector("#a");
const opt_2 = document.querySelector("#b");
const opt_3 = document.querySelector("#c");
const opt_4 = document.querySelector("#d");
const f = document.querySelector(".container_1");
const container_2 = document.querySelector(".container_2");
const score_disp = document.querySelector("#score_disp");
let btn_value = undefined;
const disp_fun = () => {
  question_disp.textContent = mcqs[btn_value][index].question;
  opt_1.textContent = mcqs[btn_value][index].options[0];
  opt_2.textContent = mcqs[btn_value][index].options[1];
  opt_3.textContent = mcqs[btn_value][index].options[2];
  opt_4.textContent = mcqs[btn_value][index].options[3];
  f.reset();
};

const start = (value) => {
  document.querySelector(".btn_container").style.display = "none";
  f.style.display = "flex";
  f.style.flexDirection = "column";
  btn_value = value;
  disp_fun();
};
let score = 0;
const check_mcq = () => {
  const elem = document.querySelector('input[name="cbox"]:checked');
  if(elem==null){alert("Please Select Any Option")}
  const opt_checked = elem.dataset.id;
  const corr = mcqs[btn_value][index].correct;
  if (corr == opt_checked) {
    score++;
  }
  console.log("score", score);
  if (index < 4) {
    index++;
  } else {
    f.style.display = "none";
    container_2.style.display = "flex";
    score_disp.textContent = "your score is " + score + "/5";
  }

  disp_fun();
};
