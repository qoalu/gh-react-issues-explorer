module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": ["airbnb-typescript", "plugin:prettier/recommended", "prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "no-tabs": "off",
    "eol-last": 1,
    "import/no-extraneous-dependencies": "off",
    "import/extentions": [
      "off",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-curly-brace-presence": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": "off",
    "camelcase": "off",
    "import/no-absolute-path": "off",
    "import/no-cycle": "off",
    "no-plusplus": "off",
    "prefer-destructuring": "off",
    "spaced-comment": "off",
    "arrow-parens": "off",
    "react/forbid-prop-types": "off",
    "react/destructuring-assignment": "off",
    "import/order": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "operator-linebreak": "off",
    "object-curly-newline": "off",
    "quotes": [
      1,
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "jsx-quotes": [1, "prefer-single"],
    "indent": "off",
    "import/no-useless-path-segments": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "jsx-a11y/label-has-for": "off",
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ],
    "react/prop-types": [
      1,
      {
        "ignore": ["className"]
      }
    ],
    "prefer-arrow-callback": "off",
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "trailingComma": "es5",
        "tabWidth": 2,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "bracketSpacing": true
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/no-unused-prop-types": ["warn"]
  },

}
