module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  globals: {
    io: 'readonly',
  },
  rules: {
    'no-proto': 0,
    'no-console': 0,
    'max-len': ['error', { code: 80, ignoreComments: true }],
  },
  plugins: ['jest'],
};
