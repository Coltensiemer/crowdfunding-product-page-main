// BUTTONS 
const backThisProjectBtn = document.querySelector(".backtoproj"); 


// DISPLAYS 
const modelContainer = document.getElementById("model-container"); 





//Open modal selection 
backThisProjectBtn.addEventListener('click', (e) => { 
    e.preventDefault(); 

if(modelContainer.style.display === 'none'){
    modelContainer.style.display="block";
console.log('hello')
 }


})