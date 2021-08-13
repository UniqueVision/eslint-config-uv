const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  extends: [
    './index.js',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    
    // plugin: vue
    'vue/no-v-html': IGNORE,
    'vue/no-multiple-template-root': IGNORE,
    'vue/html-self-closing': [ERROR, {
      'html': {
        'void': 'always',
      },
    }],
    'vue/max-attributes-per-line': [ERROR, {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    'vue/one-component-per-file': IGNORE,
  },
};
