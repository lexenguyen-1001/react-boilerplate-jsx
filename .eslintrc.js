module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'linebreak-style': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
