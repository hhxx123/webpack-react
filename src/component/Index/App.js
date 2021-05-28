import React from "react";
import {Link, Route, Switch, BrowserRouter as Router, HashRouter} from "react-router-dom"
import {Layout, Button,Menu} from "antd";

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;
import styles from "../index.less";
import CommonLayout from "../common/Layout"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CommonLayout>
          what is the content?？？？？？？？？
            <img alt="" src="../../../public/images/logo.png"/>
        </CommonLayout>
      </div>
    )
  }
}