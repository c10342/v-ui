module.exports = {
  "*.{css,scss}": ["stylelint **/*.{css,scss} --fix"],
  "*.{jsx,js,vue,tsx,ts,.mts}": ["prettier --write", "eslint --fix", "eslint"]
};
