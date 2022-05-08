# NUS CS FAQ

### Removing the Contribute All page
1. Remove the link to contribute from `Home.js`
2. Delete `ContributeAll.js`
3. Delete Route in `App.js`.

### To add a new major
1. Enable the category by adding it to the `utils/Majors.js`
2. Go to `tailwind.config.js`, and add a color for the new major
3. Create a new CSS rule. `.major-content a { @apply text-major; }`
4. Update all `switch` statements. 
