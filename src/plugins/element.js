/*
 * @Descripttion: element
 * @version: 1.3
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-03 21:36:58
 */
import Vue from 'vue'
import { Button, Form, MessageBox, Dialog, Pagination, Tooltip, Switch, Table, TableColumn, Card, Row, Col, FormItem, Input, Message, Container, Header, Aside, Main, Menu, menuItem, Submenu, Breadcrumb, BreadcrumbItem } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(menuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Switch)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
