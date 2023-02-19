module.exports = {
  extends: ["next/core-web-vitals", "airbnb", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ["react-hooks"],
  rules: {
    "react/function-component-definition": ["off"],
    "import/prefer-default-export": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/control-has-associated-label": ["off"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "max-len": [
      "warn",
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx", "global"],
      },
    ],
    "react/prop-types": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".vue"],
        paths: ["."],
      },
    },
  },
  parser: "@babel/eslint-parser",
};
