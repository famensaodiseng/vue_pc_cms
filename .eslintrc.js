/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:19:59
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-04 10:52:51
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
    "no-unused-vars": 'off',
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
