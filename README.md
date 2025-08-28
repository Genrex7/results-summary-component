# Frontend Mentor - Results summary component

This is a solution to the [Result summary component][result-summary-component] challenge on [Frontend Mentor][fronendmentor]. Frontend Mentor challenges help you improve your coding skill by building realistic projects.

## Table of contents

- [Frontend Mentor - Results summary component](#frontend-mentor---results-summary-component)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

## The challenge

User should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Frontend-Mentor/result-summary-component](./preview.jpg)

### Links

- Solution URL: [Github/Result-Summary-Component]()
- Live Site URL: [Frontend-Mentor/Result-Summary-Component]()

## My process

### Built with

- ![Vite][vite]
- ![NPM][npm]
- ![HTML][html]
- ![CSS][css]
- ![Tailwind CSS][tailwind-css]
- ![Google fonts][google-fonts]
- ![Flexbox][flexbox]

### What I learned

1.  **Custom Breakpoints in Tailwind CSS**: While building this project, I learned how to define custom breakpoints in Tailwind CSS to make the design responsive beyond the default `sm`, `md`, `lg`, etc.

    ```css
    --breakpoint-mobile: 23.4375rem;
    --breakpoint-mobile-large: 26.5625rem;
    --breakpoint-desktop: 90rem;
    ```

2.  **Dynamically populate the content**: I use the local JSON data to dynamically populate HTML content (for example, cards showing category, score, and icon).
    ```js
    fetch('/data.json')
    	.then((res) => res.json())
    	.then((data) => {
    		console.log(data);
    		// card render in done here
    	})
    	.catch((err) => console.error('Error loading JSON:', err));
    ```

### Useful resources

- [Vite - DOCS](https://vitejs.dev/guide/) - This helped me understand how to set up a project using Vite and connect it to my HTML and CSS files.
- [Tailwind CSS - DOCS](https://tailwindcss.com/docs/installation/using-vite) - This helped me understand how to use tailwind css for styling the html page.
- [Google Fonts](https://fonts.google.com/) - A great resource for importing fonts easily and making text look unique.

## Author

- Frontend Mentor - [@Genrex7](https://www.frontendmentor.io/profile/Genrex7)
- Twitter - [@DeepakKMeena07](https://x.com/DeepakKMeena07)

<!-- LINKS -->

[fronendmentor]: https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white
[result-summary-component]: (https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)
[vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[npm]: https://img.shields.io/badge/NPM-green?style=for-the-badge&logo=npm&logoColor=white
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[css]: https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff
[tailwind-css]: https://img.shields.io/badge/Tailwind_CSS-000?style=for-the-badge&logo=tailwind-css&logoColor=00ADFF
[google-fonts]: https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white
[flexbox]: https://img.shields.io/badge/Flexbox-violet?style=for-the-badge&logo=flexbox&logoColor=white
[mobile-first-workflow]: https://img.shields.io/badge/Mobile%20First%20Workflow-000?style=for-the-badge&logo=mobile&logoColor=**white**
