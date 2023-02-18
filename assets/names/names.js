const form = document.querySelector("#myForm");
const inputText = document.querySelector("#inputText");
const textArea = document.querySelector("#textArea");


const displayArea = document.querySelector("#displayArea");
const hiddenArea = document.querySelector("#hiddenArea");
const fromTwo =  document.querySelector("#myFormTwo");
const timerDisplay = document.querySelector("#timerDisplay");



var btn = document.getElementById("write_more");

// Disable the button
btn.disabled = true;

let timeInterval;
textArea.addEventListener("input", function(event) {
  const textAreaValue = textArea.value.trim();
  let timeInSeconds = 40;
  if (textAreaValue) {
    const timeMatch = textAreaValue.match(/\b\d+\b/);
    if (timeMatch) {
      const [minutes] = timeMatch;
      timeInSeconds = minutes * 60;
      if (timeInSeconds > 420) {
        timerDisplay.innerHTML = "u Break The Rules !!,Check your note rules and the limit";
        return;
      }
    }
  }
  clearInterval(timeInterval);
  timeInterval = setInterval(function() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${seconds}`;
    timeInSeconds--;
    if (timeInSeconds < 0) {
      clearInterval(timeInterval);
      // Enable the button
      btn.disabled = false;
      timerDisplay.innerHTML = "Time's up!";
      // Add a click event listener to the button
      btn.addEventListener("click", function() {
        location.reload();
      });
      }
  }, 1000);
});


// const textArea = document.querySelector("#textArea");
// const timerDisplay = document.querySelector("#timerDisplay");
// let timeInterval;

// textArea.addEventListener("input", function(event) {
//   const textAreaValue = textArea.value;
//   const timeMatch = textAreaValue.match(/\b\d+:\d{2}\b/);
//   if (timeMatch) {
//     const [time] = timeMatch;
//     const timeParts = time.split(":").map(Number);
//     let timeInSeconds;
//     if (timeParts.length === 2) {
//       [minutes, seconds] = timeParts;
//       timeInSeconds = (minutes * 60) + seconds;
//     } else {
//       [minutes] = timeParts;
//       timeInSeconds = minutes * 60;
//     }
//     if (timeInSeconds > 420) {
//       timerDisplay.innerHTML = "u Break The Rules !!,Check your note rules and the limit";
//       return;
//     }
//     clearInterval(timeInterval);
//     timeInterval = setInterval(function() {
//       const minutes = Math.floor(timeInSeconds / 60);
//       const seconds = timeInSeconds % 60;
//       timerDisplay.innerHTML = `${minutes}:${seconds}`;
//       timeInSeconds--;
//       if (timeInSeconds < 0) {
//         clearInterval(timeInterval);
//         timerDisplay.innerHTML = "Time's up!";
//       }
//     }, 1000);
//   }
// });

inputText.addEventListener("input", function(event) {
  const inputValue = inputText.value;
  const isNumber = /\d/.test(inputValue);
  if (isNumber) {
    inputText.value = inputValue.slice(0, -1);
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  displayArea.style.display = "block";
  hiddenArea.style.display = "none";
  emptyError.style.display = "none";
  numbersError.style.display = "none";

    // Get values from inputs
    var name = document.getElementById("#inputText").value;
    var message = document.getElementById("#textArea").value;
  
    // Store values in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("message", message);
  
  
});

fromTwo.addEventListener("submit", function(event) {
  event.preventDefault();
  displayArea.style.display = "none";
  hiddenArea.style.display = "flex";

});
