module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: ['error', 2],
    'import/export': 0,
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: true,
      arraysInObjects: true
    }],
    'space-in-parens': ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'warn',
    'space-before-function-paren': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'template-curly-spacing': ['error', 'always'],
    'prefer-promise-reject-errors': 'off',
    'react/prop-types': 0
  }
}
