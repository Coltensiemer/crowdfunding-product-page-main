// BUTTONS 
const backThisProjectBtn = document.querySelector(".backtoproj"); 
const selectRadio1 = document.querySelector("selected-1"); 
const selectRadio2 = document.querySelector("selected-2"); 
const selectRadio3 = document.querySelector("selected-3"); 

// DISPLAYS 
const modelContainer = document.getElementById("model-container"); 
const plegeOne = document.querySelector("pledge-1"); 
const plegeTwp = document.querySelector("pledge-2"); 
const plegeThree = document.querySelector("pledge-3"); 


//Open modal selection 
backThisProjectBtn.addEventListener('click', (e) => { 
    e.preventDefault(); 
    modelContainer.style.display= "block";
}); 


// Select RADIO 

selectRadio1.addEventListener('click', (e) => { 
    e.preventDefault(); 
    console.log("works")
    plegeOne.style.display="block"; 
})