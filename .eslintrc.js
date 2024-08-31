module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Add your custom ESLint rules here
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'react/prop-types': 'off',
  },
};
