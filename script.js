// ================================
// UnlockMyAnswer
// Version 1.0
// ================================


// ---------- Elements ----------

const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

const overlay = document.getElementById("overlay");

const unlockBtn = document.getElementById("unlockBtn");


// ---------- Variables ----------

let expression = "";

let hiddenAnswer = "";

// ---------- Tasks ----------

const tasks = [

{
    type:"type",
    title:"🍌 Banana Test",
    text:"Type exactly: banana",
    answer:"banana"
},

{
    type:"type",
    title:"❤️ Loyalty Test",
    text:"Type exactly: I love UnlockMyAnswer",
    answer:"I love UnlockMyAnswer"
},

{
    type:"type",
    title:"🧠 Brain Test",
    text:"Type exactly: Math is fun",
    answer:"Math is fun"
},

{
    type:"type",
    title:"🔢 Number Test",
    text:"Type exactly: 12345",
    answer:"12345"
},

{
    type:"type",
    title:"🚪 Gate Test",
    text:"Type exactly: Open the gate",
    answer:"Open the gate"
}

];


let currentTask = null;


// ---------- Calculator ----------

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        handleButton(value);

    });

});


// ---------- Button Logic ----------

function handleButton(value){

    if(value === "C"){

        clearCalculator();

        return;

    }

    if(value === "="){

        calculateAnswer();

        return;

    }

    expression += value;

    updateDisplay(expression);

}



// ---------- Display ----------

function updateDisplay(text){

    display.innerText = text || "0";

}



// ---------- Clear ----------

function clearCalculator(){

    expression = "";

    hiddenAnswer = "";

    updateDisplay("0");

}



// ---------- Calculate ----------

function calculateAnswer(){

    if(expression === "") return;

    try{

        hiddenAnswer = eval(expression);

        showPopup();

    }

    catch{

        updateDisplay("Error");

        expression = "";

    }

}



// ---------- Popup ----------

function showPopup(){

    generateTask();

    overlay.classList.remove("hidden");

}


function closePopup(){

    overlay.classList.add("hidden");

}
function generateTask(){

    currentTask =
    tasks[Math.floor(Math.random()*tasks.length)];

    document.getElementById("taskTitle").innerText =
    currentTask.title;

    document.getElementById("taskText").innerText =
    currentTask.text;

    taskInput.value="";

    message.innerText="";

}



// ---------- Unlock ----------

const taskInput = document.getElementById("taskInput");
const message = document.getElementById("message");

unlockBtn.addEventListener("click", verifyTask);

function verifyTask(){

    const answer = taskInput.value.trim();

    if(answer === currentTask.answer){

        message.style.color = "green";
        message.innerText = "✅ Correct!";

        setTimeout(()=>{

            closePopup();

            updateDisplay(hiddenAnswer);

            expression = hiddenAnswer.toString();

            taskInput.value = "";
            message.innerText = "";

        },700);

    }

    else{

        message.style.color = "red";
        message.innerText = "❌ Incorrect! Try Again.";

    }

}