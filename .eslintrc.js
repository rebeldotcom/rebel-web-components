module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks', 'prettier'],
  globals: {
    document: true,
    window: true,
    localStorage: true,
  },
  env: {
    node: true,
  },
  rules: {
    /* 
      "off" or 0 - turns rule off
      "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
      "error" or 2 - turn the rule on as an error (exit code will be 1)
    */
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'no-useless-escape': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,

    'react/boolean-prop-naming': 2,
    'react/display-name': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-key': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-default-props': 2,
    'react/destructuring-assignment': 2,
    'jsx-a11y/label-has-for': 0, // TODO: deprecated but airbnb uses this
    'jsx-a11y/label-has-associated-control': 2,
    'react/prefer-stateless-function': 1,
    'react/forbid-foreign-prop-types': 2,
    'react/no-danger': 0,
    'react/sort-prop-types': 2,
    'react/jsx-sort-props': 2,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: [
          // "static-methods", TODO: need to move this around
          'constructor',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'tree-shaking/no-side-effects-in-initialization': [
      0,
      { compatibility: 'rollup' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-mutable-exports': 0,
        'react/prop-types': 0,
        'react/sort-prop-types': 0,
        'react/require-default-props': 0,
        'react/no-unused-prop-types': 0,
        'react-hooks/rules-of-hooks': 0,
        'no-plusplus': 0,
        'no-bitwise': 0,
        'no-use-before-define': 0,
        'no-multi-assign': 0,
        'no-restricted-globals': 0,
        'no-shadow': 0,
        camelcase: 0,
        'consistent-return': 0,
        'default-case': 0,
      },
    },
  ],
}
