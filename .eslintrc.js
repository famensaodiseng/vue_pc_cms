/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:19:59
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-12 09:41:31
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {

    "camelcase": [1, { "properties": "never" }],
    "camelcase": ["error", { "allow": ["aa_bb"] }],
    'linebreak-style': 0,
    'linebreak-style': [0, 'windows'],
    "no-unused-vars": 'off',
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
