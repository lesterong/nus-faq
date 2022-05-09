# NUS FAQ

NUS FAQ was built to serve as a central location to answer the most asked questions about different majors in NUS. I built this upon seeing the same questions appear on reddit on r/NUS and r/SGExams again, and again. 

The site is deployed [here](https://nusfaq.netlify.app).

### Supported Majors
Currently, only NUS Computer Science is supported. You can contribute to the other majors by submitting your questions and answers [here](https://nusfaq.netlify.app/contribute).

### To add a new major
1. Enable the category by adding it to the `src/utils/majors.js` and `src/utils/majorsToFaculty.js`.
```js
// src/utils/majors.js
const majors = [ 'cs', 'newMajor' ]

// src/utils/majorsToFaculty.js
const majorsToFaculty = {
  cs: 'soc',
  newMajor: 'faculty',
};
```
2. Go to `tailwind.config.js`, and add a color for the new major.
```js
module.exports = {
  ...
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      gray: '#F8F8FA',
      black: '#31081F',
      red: '#B91C1C',
      default: '#DB2777',
      cs: '#4357AD',
      newMajor: 'color'
    },
  },
  ...
};

```
3. Add a new CSS rule in `src/index.css` to apply the new colors to links. 
```css
/* index.css */
.major-content a { 
  @apply text-major;
}
```
4. Add rules in `src/utils/styleScheme.js` to apply the styles across the application.
```js
// src/utils/styleScheme.js
...
const newMajor = {
  bgColor: 'bg-newMajor',
};

const styleScheme = { ... newMajor }
```