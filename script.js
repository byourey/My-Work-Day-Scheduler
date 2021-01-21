// // Added current date

// var d = new Date();
//   var n = d.toDateString();document.getElementById("demo").innerHTML = d;

var currentDay = document.getElementById('demo');
currentDay.textContent = dayjs().format('MMMM D, YYYY');

let hourlyTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let container = document.querySelector('.container');

// let dataHour = 3;





// create a function for the save button
// function renderTimeBlock() {
//     for (let i = 0; i < hourlyTime.length; i++) {
//         // let timeBlock = document.createElement('div');
//         let hourDiv = document.createElement('div');
//         let hourP = document.createElement('p');
//         let planDiv = document.createElement('div');
//         let planLabel = document.createElement('label');
//         let planTextArea = document.createElement('textarea');
//         let saveDiv = document.createElement('div');
//         let saveBtn = document.createElement('button');
//         let saveIcon = document.createElement('i');
//         timeBlock.classList.add('time-block');
//         hourDiv.classList.add('hour');
//         hourP.setAttribute('data-index', i);
//         hourP.textContent = hourlyTime[i];
//         planDiv.classList.add('plan-input');
//         planLabel.setAttribute('for', 'hour');
//         planTextArea.setAttribute('data-hour', dataHour);
//         planTextArea.setAttribute('data-index', i);
//         planTextArea.setAttribute('name', 'hour');
//         planTextArea.classList.add('text-input');
//         planTextArea.setAttribute('placeholder', 'Your text here...');
//         saveDiv.classList.add('save');
//         saveBtn.setAttribute('data-index', i);
//         saveBtn.classList.add('saveBtn');
//         saveIcon.classList.add('far', 'fa-save', 'save-icon');
//         container.append(timeBlock);
//         hourDiv.append(hourP);
//         timeBlock.append(hourDiv);
//         planDiv.append(planLabel);
//         planDiv.append(planTextArea);
//         timeBlock.append(planDiv);
//         saveBtn.append(saveIcon);
//         saveDiv.append(saveBtn);
//         timeBlock.append(saveDiv);
//         dataHour++;
//     };
//     pastPresentFuture();
//     setLocalTextareas();
//     getLocalTextareas();
// };
// renderTimeBlock()

// create a function for hourly time blocks


// Create a function to save inputs from user
// let userInput = document.querySelector('.input').value
// localStorage.setItem("My Input", userInput);

// document.querySelector('.input').value = localStorage.getItem('My Input')

// let userText= [];
// const saveInput = (ev)=> {
//     ev.preventDefault();
//     let newText = {
//         myText: document.querySelector('.text-input').value,
//     }
// userText.push(newText);
// localStorage.setItem("My scoreTable", JSON.stringify(userText));

// }

document.querySelector('.text-input').addEventListener("keyup", function(event) {
    localStorage.setItem('inputValue', event.target.value);

});


// const userInput = document.querySelector('.input')
// document.querySelector('.saveButton').addEventListener("click", userInput)


//     localStorage.setItem('text', JSON.stringify(userInput));




// window.localStorage.getItem('My scoreTable')
// JSON.parse(window.localStorage.getItem('My scoreTable'))






// Create a local storage function to save the input from the user



// create a function when the user refreshes the page the input still stays


