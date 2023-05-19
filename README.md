# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/Screenshot%202023-05-18%20233453.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/faqaccordioncardv-Lkj39PKmjd](https://www.frontendmentor.io/solutions/faqaccordioncardv-Lkj39PKmjd)
- Live Site URL: [https://tahobbit11.github.io/faq-accordion-card/](https://tahobbit11.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to make a toggleable button that can switch from displaying content and not displaying.

```html
<div class="wrapper">
        <h2 class="question">How many team members can I invite?
          <span>
            <button>
              <img src="./images/icon-arrow-down.svg" alt="arrow-down">
            </button>
          </span>
        </h2>
        <p class="answer">
          You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
        </p>
      </div>
```
```css
     @keyframes up-n-down {
      from {
        transform: translate(-55%, -55%);
      }
      50% {
        transform: translate(-55%, -57.5%);
      }
      to {
        transform: translate(-55%, -55%);
      }
     }
```
```js
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    });
});
```

### Continued development

I could come back to try to fix the static height I gave the desktop view since some of the text can go off the screen


## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
