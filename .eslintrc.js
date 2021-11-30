/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 11, sourceType: 'module' },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js', 'tailwind.config.js'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier plugin
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-onchange': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
}
