/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:19:59
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-06 20:34:03
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
