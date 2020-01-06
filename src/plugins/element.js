/*
 * @Descripttion: element
 * @version: 1.3
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-06 10:16:25
 */
import Vue from 'vue'
import { Button, Form, Cascader, Select, Option, Tree, Tag, MessageBox, Dialog, Pagination, Tooltip, Switch, Table, TableColumn, Card, Row, Col, FormItem, Input, Message, Container, Header, Aside, Main, Menu, menuItem, Submenu, Breadcrumb, BreadcrumbItem } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Tree)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Tag)
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
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
