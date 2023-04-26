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
const closeMenu = document.querySelector(".close-nav");

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
  document.body.classList.add("overflow");
});

selectReward.forEach((select) => {
  select.addEventListener("click", () => {
    modelContainer.showModal();
    document.body.classList.add("overflow");
  });
});

closeBTN.addEventListener("click", () => {
  modelContainer.close();
});

// HAMBURGER MENU
hamburgMenu.addEventListener("click", () => {
  document.getElementById("navbar-container").classList.add("nav-active");
  hamburgMenu.style.display = "none";

  if (hamburgMenu.style.display === "none") {
    closeMenu.style.display = "block";
  }
});

//close nav menu if menu is OPEN
closeMenu.addEventListener("click", () => {
  document.getElementById("navbar-container").classList.remove("nav-active");
  closeMenu.style.display = "none";

  if (hamburgMenu.style.display === "none") {
    hamburgMenu.style.display = "block";
  }
});

//Open Radios
selectRadio.forEach((e) => {            // loops through all radio buttons with class "select-radio"
  e.addEventListener("click", () => {   // adds a "click" event listener to each radio button
    document.querySelectorAll(".item-containers").forEach((e) => {   // selects all elements with class "item-containers"
      e.classList.remove("borderActive");    // removes class "borderActive" from all "item-containers" elements
    });

    pledgeContainer.forEach((e) => {  // selects all elements with class "pledge-container"
      e.classList.add("visible");    // adds class "visible" to all "pledge-container" elements
    });

    if (e.checked) {    // checks if the clicked radio button is checked
      e.parentElement.parentElement.lastElementChild.classList.remove(
        "visible"
      );   // removes class "visible" from the last child element of the parent element of the clicked radio button
      e.parentElement.parentElement.lastElementChild.classList.remove(
        "displayFlex"
      );   // removes class "displayFlex" from the last child element of the parent element of the clicked radio button
      e.parentElement.parentNode.classList.add("borderActive");  // adds class "borderActive" to the parent element of the clicked radio button
    }
  });
});

// Open Ending Model
function OpenEndingModel() {
  endingModel.showModal();
  document.body.classList.add("overflow");
}

// CLose ending model
endingButton.addEventListener("click", (e) => {
  e.preventDefault();
  endingModel.close();
  document.body.classList.remove("overflow");
});
// MODEL INPUT PlaceHOLDER
products.forEach((obj, index) => {
  inputPledgeValue[index].setAttribute("min", obj.min);
});


// function to display a value as a formatted dollar amount
function displayValue(e) {
  let stringNumbers = e.toString(); // convert input value to a string
  let lastthree = stringNumbers.length - 3; // determine the index of the last three digits
  let curentValue =
    "$" + // add dollar sign to the beginning of the formatted string
    stringNumbers.slice(0, lastthree) + // slice the string to include all digits except the last three
    "," + // add a comma to separate the last three digits
    stringNumbers.slice(lastthree); // add the last three digits to the string

  // update the text content of the specified element with the formatted string
  return (valueBackedhtml.textContent = curentValue);
}

displayValue(valueBacked); // call the function to display the default value


// function to display the number of backers with commas
function displayBacker(e) {
  let stringNumbers = e.toString();
  let lastthree = stringNumbers.length - 3;
  let curentValue =
    stringNumbers.slice(0, lastthree) + "," + stringNumbers.slice(lastthree);

  return (totalBackershtml.textContent = curentValue);
}
displayBacker(totalBackers); //show default

// function to update the progress bar based on the current amount backed
function updateProgressBar(e) {
  let total = 100000;
  let progressWidth = (e * 100) / total;
  progressionBar.style.width = progressWidth + "%";
}

updateProgressBar(valueBacked);

continuePledge.forEach((e) => {
  e.addEventListener("click", () => {
    
    const inputElement = e.previousElementSibling.lastElementChild;
    const inputMin = +inputElement.min;
    let declaredPrice = inputElement.value;

    // Check if the declared price is greater than or equal to the minimum pledge amount
    if (declaredPrice >= inputMin) {
      valueBacked += +declaredPrice; // Add the declared price to the total amount backed
      totalBackers += 1; // Increase the total number of backers

      displayValue(valueBacked); // Update the displayed value
      displayBacker(totalBackers); // Update the displayed number of backers
      updateProgressBar(valueBacked); // Update the progress bar

      console.log("here")

      inputElement.value = ""; // Clear the input field
     


      for (let i = 0; i < products.length; i++) {

        console.log("second")
        console.log(products[i])
        console.log(e.dataset)
       
        if (e.dataset === products[i].id) {
          console.log("third")
          products[i].left -= 1;
          itemLeft[i].textContent = products[i].left;
          productLeft[i].textContent = products[i].left;
      

          stockInventory();
        }
      }
      OpenEndingModel(); // Open the success modal
    }
    // Disable the button if the declared price is less than the minimum pledge amount or empty
    else if (declaredPrice < inputMin || declaredPrice.trim() === "") {
      e.disabled = true;
      setTimeout(() => {
        e.disabled = false; // Re-enable the button after 1 second
      }, 1000);
    }
  });
});


// add event listener to the bookmark button
bookmark.addEventListener("click", (e) => {
  e.preventDefault();
  const fillMode = document.querySelector(".bookmark-circle").style.fill;

  // toggle the bookmark button between bookmarked and not bookmarked
  if (fillMode == "black") {
    document.querySelector(".bookmark-circle").style.fill =
      "hsl(176, 50%, 47%)";
    document.querySelector(".bookmark-flag").style.fill = "white";

    bookmarkEffect.style.color = "hsl(176, 50%, 47%)";
    bookmarkEffect.textContent = "Bookmarked";
  } else {
    document.querySelector(".bookmark-circle").style.fill = "black";
    document.querySelector(".bookmark-flag").style.fill = "#B1B1B1";

    bookmarkEffect.style.color = "hsl(0, 0%, 48%)";
    bookmarkEffect.textContent = "Bookmark";
  }
});
