
const disable = true; 

// BUTTONS
const backThisProjectBtn = document.querySelector(".backtoproj"); 
const selectPledge = document.querySelectorAll('input[name="radio"]');
const selectReward = document.querySelectorAll('.reward-btn'); 

// DISPLAYS
const modelContainer = document.getElementById("model-container"); // Model Container 


//HTML DISPLAY CLASSES 
const valueBackedhtml = document.querySelector("amount-backed"); 
const title= document.querySelectorAll(".item-title"); //titles
const pledge = document.querySelectorAll(".item-pledge"); // pledges min amounts 
const itemPara = document.querySelectorAll(".item-para"); // Paragraphs 
const itemLeft = document.querySelectorAll(".number"); // Items left 
const productTitle = document.querySelectorAll('.product-title'); 
const productPledge = document.querySelectorAll('.product-pledge'); 
const productPara = document.querySelectorAll('.pledge-para'); 
const productLeft = document.querySelectorAll('.pledge-left'); 

//Starting values 
const valueBacked = 89914; 
const totalBackers = 5007; 
const daysleft = 56 

// Item Products
const products = [
  {
    id: 1,
    title: "Bambo Stand",
    pledge: "Pledge $25 or more.",
    paragraph:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    left: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    pledge: "Pledge $75 or more.",
    paragraph:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 64,
  },

  {
    id: 3,
    title: "Mahongany Special Edition",
    pledge: "Pledge $200 or more.",
    paragraph:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];

// Display of products 
products.forEach((obj, index) => { 
    title[index].textContent = obj.title
    productTitle[index].textContent = obj.title
    pledge[index].textContent = obj.pledge
    productPledge[index].textContent = obj.pledge
    itemPara[index].textContent = obj.paragraph
    productPara[index].textContent = obj.paragraph
    itemLeft[index].textContent = obj.left
    productLeft[index].textContent = obj.left
}) 

// IF Items left are zero
function stockInventory() { 
   itemLeft.forEach((event) => { 
        if (parseInt(event === 0)) { 
            event.parentElement.nextElementSibling.textContent ="Out"
        } 
        else { 
            console.log('no works')
        }
    })
}





//Open modal selection
backThisProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modelContainer.style.display = "block";
});

// selectPledge.addEventListener("click", (e) => {
//   e.preventDefault();
// });
