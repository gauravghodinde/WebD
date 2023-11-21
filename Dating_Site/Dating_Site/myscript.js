// To keep track of the current data index
let currentIndex = 0;
const card = document.getElementsByClassName("card");
const nextButton = document.querySelector(".Next");
animateButton.addEventListener('click', () => {
    // Add the 'animate' class to trigger the animation
    card.classList.add('swipeNext');
    // Remove the 'animate' class after the animation is complete
    animatedElement.addEventListener('transitionend', () => {
        animatedElement.classList.remove('swipeNext');
    });
});


// document.addEventListener("DOMContentLoaded", function() {
// const nextButton = document.getElementById('nextButton');
// nextButton.addEventListener('click', displayNextData);
//         function nextOne() {
//   // Fetch the JSON file

//         fetch('mydata.json')
//     .then(response => response.json())
//     .then(data => {
//       // Store the data
//       const jsonData = data;

//       // Display the initial data
//       displayData(jsonData, currentIndex);
//     })
//     .catch(error => {
//       console.error('Error fetching JSON:', error);
//     });
// };

function displayData(data, i) {
let name = data[i].name;
let catchPhrase = data[i].catchphrase;
let link = data[i].imageLink;
document.getElementById("catchPhrase").innerHTML = catchPhrase;
document.getElementById("name").innerHTML = name;
var img = document.getElementById('fimage');
img.src = link;
}

function displayNextData() {
    
    
fetch('data.json')
.then(response => response.json())
.then(data => {
// Store the data
const jsonData = data;


// Display the initial data
displayData(jsonData, currentIndex);
if(currentIndex<jsonData.length-1) currentIndex++;
else currentIndex = 0;
})
.catch(error => {
console.error('Error fetching JSON:', error);
if(error == "TypeError: Cannot read properties of undefined (reading 'name')"){
currentIndex = 0;
}
//   if (currentIndex => jsonData.length) {

//     }
});
// Move to the next data index
//   displayData(jsonData, currentIndex);

// Reset index if it goes beyond the data length

}

// function nextOne() {
//     fetch("mydata.json")
//         .then(response => response.json())
//         .then(data => {
//             for (var i = 0; i<data.items.length; i++){
//                 let name = data.items[i].name;
//                 let catchPhrase = data.items[i].catchPhrase;
//                 let link = data.items[i].link;
//                 document.getElementById("catchPhrase").innerHTML = catchPhrase;
//                 document.getElementById("name").innerHTML = name;
//                 var img = document.getElementById('fimage');
//                 img.src = link;
                    
//             }
//         })
    
// }
function dateHimHer(){

document.getElementById("myAudio").play();
}
