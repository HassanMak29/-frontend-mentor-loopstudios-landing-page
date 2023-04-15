# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./screenshots/screenshot.jpg)
![](./screenshots/screenshot-mobile.jpg)
![](./screenshots/screenshot-mobile-menu.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/HassanMak29/frontend-mentor-loopside-landing-page)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [Vite](https://vite.dev/) - JS tool
- [PostCSS](https://postcss.org/) - For styles

### What I learned

In this project I used learned to use the clamp operator for widths and font sizes.|

```css
header {
  height: clamp(70vh, 67vw, 65rem);
}

header .wrapper {
  width: clamp(30rem, 56vw, 64rem);
}

h1 {
  font-size: clamp(3.8rem, 6.5vw, 7rem);
}

h2 {
  font-size: clamp(3rem, 6.5vw, 5rem);
}

main {
  padding: clamp(3rem, 6vw, 18rem);
}

.info p {
  font-size: clamp(1.5rem, (2rem - 0.3vw), 2.5rem);
}

.grid-item h3 {
  font-size: clamp(2.5rem, 5vw, 4rem);
}
```

## Author

- Website - [Abdelmounaim H. Makhloufi](https://www.makhloufi.me)
- Frontend Mentor - [@HassanMak29](https://www.frontendmentor.io/profile/HassanMak29)
