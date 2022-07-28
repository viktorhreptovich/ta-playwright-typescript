module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.eslint.json', 'tsconfig.json'],
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'max-len': ['warn', { code: 120 }],
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
