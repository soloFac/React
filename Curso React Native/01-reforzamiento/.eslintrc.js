module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint-config-prettier',
    'standard',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    'import/export': 0,
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: true,
      arraysInObjects: true
    }],
    'react/prop-types': 'off',
    'space-in-parens': ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': ['error', {
      component: true,
      html: false
    }],
    'no-unused-vars': 'warn',
    'no-use-before-define': [
      'warn',
      {
        classes: true,
        functions: true,
        typedefs: true
      }
    ]
  }
}
