const disable = true;

// BUTTONS
const backThisProjectBtn = document.querySelector(".backtoproj");
const selectPledge = document.querySelectorAll('input[name="radio"]');
const selectReward = document.querySelectorAll(".reward-btn");
const continuePledge = document.querySelectorAll(".pledge-reward-btn"); // continue button in select reward
const selectRadio = document.querySelectorAll(".selected-radio"); // radio buttons
const closeBTN = document.querySelector(".close-btn");
const inputPledgeValue = document.getElementsByName("costpledge"); // placeholder values for input
const endingButton = document.querySelector(".endingbutton"); 
const bookmark = document.querySelector(".bookmark"); 
const hamburgMenu = document.querySelector(".hamburger"); //HAMBURGER MENU 
const closeMenu = document.querySelector('.close-nav'); 

// DISPLAYS
const modelContainer = document.getElementById("model-container"); // Model Container
const pledgeContainer = document.querySelectorAll(".pledge"); // Pledge containers
const progressionBar = document.querySelector(".progession");
const endingModel = document.querySelector(".endingModel"); 
const bookmarkEffect = document.querySelector(".bookmark-effect");

//HTML DISPLAY CLASSES
const valueBackedhtml = document.querySelector(".amount-backed");
const totalBackershtml = document.querySelector(".total-backed");
const title = document.querySelectorAll(".item-title"); //titles
const pledge = document.querySelectorAll(".item-pledge"); // pledges min amounts
const itemPara = document.querySelectorAll(".item-para"); // Paragraphs
const itemLeft = document.querySelectorAll(".number"); // Items left
const productTitle = document.querySelectorAll(".product-title");
const productPledge = document.querySelectorAll(".product-pledge");
const productPara = document.querySelectorAll(".pledge-para");
const productLeft = document.querySelectorAll(".pledge-left");

//Starting values
let valueBacked = 89914;
let totalBackers = 5007;
let daysleft = 56;

// Item Products
const products = [
  {
    id: 1,
    title: "Bambo Stand",
    min: 25,
    pledge: "Pledge $25 or more.",
    paragraph:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    left: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    min: 75,
    pledge: "Pledge $75 or more.",
    paragraph:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 64,
  },

  {
    id: 3,
    title: "Mahongany Special Edition",
    min: 200,
    pledge: "Pledge $200 or more.",
    paragraph:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];

// Display of products
products.forEach((obj, index) => {
  title[index].textContent = obj.title;
  productTitle[index].textContent = obj.title;
  pledge[index].textContent = obj.pledge;
  productPledge[index].textContent = obj.pledge;
  itemPara[index].textContent = obj.paragraph;
  productPara[index].textContent = obj.paragraph;
  itemLeft[index].textContent = obj.left;
  productLeft[index].textContent = obj.left;
});

// IF Items left are zero
function stockInventory() {
  itemLeft.forEach((e) => {
    if (parseInt(e.textContent) === 0) {
      e.closest(".item-containers").style.opacity = 0.4;
      e.parentElement.nextElementSibling.textContent = "Out of Stock";
      e.parentElement.nextElementSibling.disabled = true;
    }
  });
  // for model products if zero
  productLeft.forEach((e) => {
    if (parseInt(e.textContent) === 0) {
      e.closest(".item-containers").style.opacity = 0.4;
      e.parentElement.nextElementSibling.textContent = "Out of Stock";
    }
  });
}
stockInventory();

//OPEN MODEL SECTION  DISPLAY
backThisProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modelContainer.showModal();
  document.body.classList.add('overflow'); 
});

selectReward.forEach((select) => {
  select.addEventListener("click", () => {
    modelContainer.showModal();
    document.body.classList.add('overflow'); 
  });
});

closeBTN.addEventListener('click', ()=>{ 
  modelContainer.close()
})


// HAMBURGER MENU 
hamburgMenu.addEventListener('click', () => { 
  document.getElementById('navbar-container').classList.add('nav-active');
  hamburgMenu.style.display = ('none'); 

  if (hamburgMenu.style.display === 'none') { 
    closeMenu.style.display = "block"
  }

});

//close nav menu if menu is OPEN
closeMenu.addEventListener('click', () => { 
  document.getElementById('navbar-container').classList.remove('nav-active');
  closeMenu.style.display = "none"; 

  if (hamburgMenu.style.display === 'none') {
   hamburgMenu.style.display = ('block');
  }
}); 




//Open Radios
selectRadio.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".item-containers").forEach((e) => {
      e.classList.remove("borderActive");
    });

    pledgeContainer.forEach((e) => {
      e.classList.add("visible");
    });

    if (e.checked) {
      e.parentElement.parentElement.lastElementChild.classList.remove(
        "visible");
        e.parentElement.parentElement.lastElementChild.classList.remove(
          "displayFlex" );
      e.parentElement.parentNode.classList.add("borderActive");
    }
  });
});


// Open Ending Model 
function OpenEndingModel() { 

  endingModel.showModal(); 
  document.body.classList.add('overflow'); 

}

// CLose ending model 
endingButton.addEventListener('click', (e) => { 
  e.preventDefault(); 
endingModel.close();
document.body.classList.remove('overflow'); 
})
// MODEL INPUT PlaceHOLDER
products.forEach((obj, index) => {
  inputPledgeValue[index].setAttribute("min", obj.min);
});

// Display of value added

function displayValue(e) {
  let stringNumbers = e.toString();
  let lastthree = stringNumbers.length - 3;
  let curentValue =
    "$" +
    stringNumbers.slice(0, lastthree) +
    "," +
    stringNumbers.slice(lastthree);

  return (valueBackedhtml.textContent = curentValue);
}
displayValue(valueBacked); // show default

//Display of backers amount backed
function displayBacker(e) {
  let stringNumbers = e.toString();
  let lastthree = stringNumbers.length - 3;
  let curentValue =
    stringNumbers.slice(0, lastthree) + "," + stringNumbers.slice(lastthree);

  return (totalBackershtml.textContent = curentValue);
}
displayBacker(totalBackers); //show default

function updateProgressBar(e) {
  let total = 100000;
  let progressWidth = (e * 100) / total;
  progressionBar.style.width = progressWidth + "%";
}

updateProgressBar(valueBacked);

continuePledge.forEach((e) => {
  e.addEventListener(
    "click",
    () => {

      const disable = false; 
      const inputElement = e.previousElementSibling.lastElementChild;
      const inputMin = +inputElement.min;
      let delclaredPrice = inputElement.value;
      
      

      if (delclaredPrice >= inputMin) {
        
        valueBacked += +delclaredPrice;
        totalBackers += 1;

        displayValue(valueBacked);
        displayBacker(totalBackers);
        updateProgressBar(valueBacked);

        inputElement.textContent = null; 


        for (let i = 0; i < products.length; i++) {
          if (e.dataset.id == products[i].id) {
          products[i].left -= 1;
          itemLeft[i].textContent = products[i].left;
          productLeft[i].textContent = products[i].left;
          
          stockInventory();
          } 
        }
        OpenEndingModel(); 
       
        
      }

      else if( delclaredPrice < inputMin || delclaredPrice == " ") { 
        console.log(['not working'])
        setTimeout(() => { e.disabled = true;  
        }, 1000)
      
      }
  
      
    }
  );
});


// Bookmark 
bookmark.addEventListener('click', (e) => { 
 e.preventDefault()
  const fillMode =  document.querySelector(".bookmark-circle").style.fill

  if ( fillMode == "black") { 
  document.querySelector(".bookmark-circle").style.fill="hsl(176, 50%, 47%)"
  document.querySelector(".bookmark-flag").style.fill="white"

  bookmarkEffect.style.color="hsl(176, 50%, 47%)";
  bookmarkEffect.textContent = "Bookmarked"; 

  }

  else { 
    document.querySelector(".bookmark-circle").style.fill="black"
    document.querySelector(".bookmark-flag").style.fill="#B1B1B1"

    bookmarkEffect.style.color="hsl(0, 0%, 48%)"; 
    bookmarkEffect.textContent = "Bookmark"; 
  }
 
  }
) 