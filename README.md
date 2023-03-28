# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)




## Overview

This interactive Crowd Funding page has been expertly crafted using the dynamic trio of HTML, CSS, and JavaScript. It enables users to keep track of purchased products, with each product bought incrementally increasing the total amount backed.


### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/crowdfundingwithvanillajs-mZfSm7y0v3]
- Live Site URL: [https://app.netlify.com/sites/symphonious-narwhal-a6100f/overview] 

## My process

For this project I started with HTML and CSS styling with a mobile first focus. Once I had the fundations created for this project, I started input Javascript in the page. This was a challenge since I involved me learning new methods, such as; 

```js 
.parentElement
.lastElementChild
``` 

There was a lot of vanilla javascript to be input along with the queryselectors for the DOM. 

This project was also a create learing lesson of passing in data in a JSON format to be render on the front page. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript


### What I learned


1. The backdrop effect on dialogs was tricking. I learned since the backdrop effect is a pesudo effect, you have to use js to open and close the models to use the backdrop. 

```js 
// CLose ending model 
endingButton.addEventListener('click', (e) => { 
  e.preventDefault(); 
endingModel.close();
document.body.classList.remove('overflow');
``


2. using Grid. For the mediaQs, I used a grid creator to help create complex layouts. 


.plege-select {
  display: grid;
  grid-template-columns: [first] 20% [second] 100%;
  grid-template-rows: [row-start] 30% [row-end] auto;
}``



3. Understanding the forEach() Method. I had to use two arguements to match the index with the object. 

``products.forEach((obj, index) => {
  inputPledgeValue[index].setAttribute("min", obj.min);
});
``` 

2. Another Challenge was passing JSON values to be rendered. A this was my first time doing this work on my own, there was a learning curve. After this project, passing JSON formated data is effective and learned. 

```js
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
``` 