// Created by running: npx eslint --init & answering the prompts.
module.exports = {
  "env": {
    // Both "node" and "browser" appear here so that ESLint will recognize functions from node's API
    // as well as from typical browsers' APIs (fetch(), for example).
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // This may lead to more verbose code, but being able to easily see that a variable is coming
    // from props makes code more readable imo.
    "react/destructuring-assignment": 0
  }
};
