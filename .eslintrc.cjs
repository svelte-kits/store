module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: { browser: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // eslint
    'consistent-return': 'warn',
    'curly': 'warn',
    'default-case-last': 'warn',
    'eqeqeq': 'error',
    'func-name-matching': 'error',
    'func-style': 'error',
    'no-lonely-if': 'warn',
    'no-multi-assign': 'error',
    'no-sequences': 'error',
    'no-unneeded-ternary': 'warn',
    'no-useless-rename': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'spaced-comment': 'warn',

    // unicorn
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-at': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/prevent-abbreviations': 'off',

    // import
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-default-export': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'warn',

    // simple-import-sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.', '^.*\\u0000$']],
      },
    ],

    // prettier
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['./.eslintrc.cjs', './*.config.{js,cjs,ts}'],
      parserOptions: { project: null },
      rules: {
        'import/no-nodejs-modules': 'off',
        'import/no-default-export': 'off',
      },
      env: { node: true },
    },
    {
      files: ['src/**/*.ts', 'tests/**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        '@typescript-eslint/no-confusing-void-expression': [
          'warn',
          { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {},
      typescript: {},
    },
  },
};
