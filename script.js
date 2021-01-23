// Added current date

var currentDay = document.getElementById("demo");
currentDay.textContent = dayjs().format('dddd MMMM D, YYYY');
// var currentHour = document.getElementById("dem");
// currentHour.textContent = dayjs().format('HH:MM');

let hourlyTime = ["9AM", "10AM", "11AM", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let time = document.createElement('div');
time.classList.add('hour')
let currentHour = dayjs().get('hour')
let theHour = 9;




// Create a function for past present and future hours

function timeBlocks() {
    let text = document.querySelectorAll('.text-input');
    text.forEach(function(area) {
        if(parseInt(area.dataset.hour) < currentHour) {
            area.classList.add('past');        
        } else if(parseInt(area.dataset.hour) === currentHour) {
            area.classList.add('present');

         } else {
            area.classList.add('future');        
         }
      })
    }

    // create a function for hourly time blocks

    function ShowTime() {
        for (let i = 0; i < hourlyTime.length; i++) {
            theHour++;
        }
        timeBlocks();
    };
        ShowTime()        


// Create a local storage function to save the input from the user

const addText = (ev) => {
    let time = [];
  
    let fields = document.querySelectorAll("#hourBlock, #hourBlock1, #hourBlock2, #hourBlock3, #hourBlock4, #hourBlock5, #hourBlock6, #hourBlock7, #hourBlock8");
    fields.forEach(function (element) {
      time.push({
        field: element.id,
        text: element.querySelector(".text-input").value
      });
    });
    // console.log(time);
    localStorage.setItem("timeData", JSON.stringify(time));
  };
  
  document.querySelectorAll(".saveButton").forEach(function (btn) {
    btn.addEventListener("click", addText);
  });
  
  // on page load
  let stored = JSON.parse(localStorage.getItem("timeData"));
  if (stored) {
    // console.log(stored);
    stored.forEach(function (item) {
      document
        .querySelector("#" + item.field)
        .querySelector(".text-input").value = item.text;
    });
  }


  // const colorcode = document.getElementsByClassName(".text-input");
// let now = dayjs();
// let hour = now.hour();

// let textInput = document.querySelectorAll('.text-input')

//   textInput.forEach(function(colorcodedDiv){
//     let colorcodeHour = parseInt(colorcodedDiv.id);
//     if (colorcodeHour) {
//         if (hour === colorcodeHour) {
//             setColor(colorcodedDiv, "Red");
//         } else if (hour < colorcodeHour) {
//             setColor(colorcodedDiv, "Green");
//           } else (hour > colorcodeHour) {
//             setColor(colorcodedDiv, "LightGrey");
//           } 
//         }
//       });
//       function setColor(element, color) {
//           element.style.backgroundColor = color;
//       }

// var currentHour = (new Date()).getHours();

// let now = dayjs();
// let hour = now.hour();
// $('.text-input').each(function(){
  
//     var val = parseInt($(this).prop('id'));
//     if(val > currentHour) {
//         $(this).css('background-color','Green');
//     }else if(val < currentHour){
//         $(this).css('background-color','Grey');
//     }else if(val === currentHour){
//         $(this).css('background-color','Red');
//     }
// });































