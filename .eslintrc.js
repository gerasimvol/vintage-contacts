module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'object-property-newline': 'off',
    'camelcase': 'off',
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'vue/name-property-casing': 'off',
    'vue/html-self-closing': ['error', {
      'html': { 'normal': 'never' }
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'prefer-const': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
