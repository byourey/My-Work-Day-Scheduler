
// var d = new Date();
//   var n = d.toDateString();document.getElementById("demo").innerHTML = d;

// // Added current date

var currentDay = document.getElementById('demo');
currentDay.textContent = dayjs().format('MMMM D, YYYY');

let hourlyTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "6pm"];
let container = document.querySelector('.container');
let militaryTimeHour = dayjs().get('hour');
let dataHour = 9;

// let now = dayjs();
// let hour = now.hour();
// console.log('Hour: ${hour}');





// Create a function for past present and future hours

function timeBlocks() {
    let text = document.querySelectorAll('.text-input');
    text.forEach(function(test) {
        if(parseInt(test.dataset.hour) < militaryTimeHour) {
            test.classList.add('past');        
        } else if(parseInt(test.dataset.hour) === militaryTimeHour) {
            test.classList.add('present');      

         } else {
            test.classList.add('future');        
         }
      })
    };

    // create a function for hourly time blocks

    function renderTimeBlock() {
        for (let i = 0; i < hourlyTime.length; i++) {
            dataHour++;
        }
    };
        renderTimeBlock()        




// Create a local storage function to save the input from the user

// $('.text-input').on("keyup", function(event) {
var timeData = $(this).parent("#hourBlock");
var textData = $(this).parent(".text-input");
localStorage.setItem('timeData', 'textData');



// create a function when the user refreshes the page the input still stays
localStorage.getItem('timeData');



















