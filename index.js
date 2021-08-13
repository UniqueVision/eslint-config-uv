const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    'arrow-spacing': ERROR,
    'block-spacing': ERROR,
    'brace-style': ERROR,
    'camelcase': [ERROR, {
      properties: 'never',
    }],
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': ERROR,
    'eol-last': [ERROR, 'always'],
    'eqeqeq': ERROR,
    'indent': IGNORE,
    'key-spacing': ERROR,
    'keyword-spacing': ERROR,
    'lines-around-comment': [ERROR, {
      'allowBlockStart': true,
      'beforeLineComment': true,
      'applyDefaultIgnorePatterns': true,
    }],
    'lines-between-class-members': [ERROR, 'always'],
    'no-console': WARN,
    'no-multiple-empty-lines': [WARN, {
      'max': 1,
    }],
    'no-spaced-func': ERROR,
    'no-trailing-spaces': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-var': ERROR,
    'object-curly-spacing': [ERROR, 'always'],
    'object-curly-newline': [ERROR, {
      'ObjectExpression': 'always',
      'ObjectPattern': {
        'multiline': true,
        'minProperties': 2,
      },
      'ImportDeclaration': 'never',
      'ExportDeclaration': {
        'multiline': true,
      },
    }],
    'object-property-newline': [ERROR, {
      'allowAllPropertiesOnSameLine': false,
    }],
    'padded-blocks': [ERROR, 'never'],
    'padding-line-between-statements': [ERROR,
      {
        blankLine: 'always',
        prev: ['case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['if'],
      },
      {
        blankLine: 'always',
        prev: ['if'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['while'],
      },
      {
        blankLine: 'always',
        prev: ['while'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['for'],
      },
      {
        blankLine: 'always',
        prev: ['for'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return'],
      },
    ],
    'prefer-const': ERROR,
    'quotes': [ERROR, 'single'],
    'semi': IGNORE,
    'space-before-blocks': [ERROR, 'always'],
    'space-before-function-paren': [ERROR, {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,

    // plugin: simple-import-sort
    'simple-import-sort/imports': ERROR,

    // plugin: @typescript-eslint
    '@typescript-eslint/ban-ts-comment': WARN,
    '@typescript-eslint/indent': [ERROR, 2],
    '@typescript-eslint/explicit-function-return-type': IGNORE,
    '@typescript-eslint/explicit-member-accessibility': IGNORE,
    '@typescript-eslint/explicit-module-boundary-types': IGNORE,
    '@typescript-eslint/no-object-literal-type-assertion': IGNORE,
    '@typescript-eslint/no-use-before-define': IGNORE,
    '@typescript-eslint/no-inferrable-types': IGNORE,
    '@typescript-eslint/no-empty-interface': IGNORE,
    '@typescript-eslint/no-unused-vars': [ERROR, {
      'argsIgnorePattern': '^_',
    }],
    '@typescript-eslint/semi': [ERROR, 'always', {
      'omitLastInOneLineBlock': true,
    }],
  },
};
