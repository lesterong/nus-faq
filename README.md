# NUS CS FAQ

### To add a new major
1. Enable the category by adding it to the `utils/majors.js` and `utils/majorsToFaculty.js`.
2. Go to `tailwind.config.js`, and add a color for the new major
3. Create a new CSS rule. `.major-content a { @apply text-major; }`
4. Add rules in `./src/utils/styleScheme.js`
