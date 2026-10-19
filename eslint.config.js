module.exports = [
  {
    ignores: ['eslint.config.js'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
    rules: {
      'arrow-parens': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'always'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
    },
  },
];
