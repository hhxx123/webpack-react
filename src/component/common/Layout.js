import React from "react";
import {Link, Route, Switch, BrowserRouter as Router, HashRouter} from "react-router-dom"
import {Layout, Button, Menu} from "antd";

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;
import styles from "../index.less";

export default class App extends React.Component {
  handleClick = e => {
    window.location.href = "/about.html";
  };

  render() {
    const { children} = this.props;
    return (
      <div>
        <Layout>
          <Header className={styles.lyHeader}>this is header</Header>
          <Layout>
            <Sider>
              <Menu
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
              >
                <SubMenu key="sub1" title="Navigation One">
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Two">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title="Navigation Three">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content>{React.Children.map(children, child => {
              return !!child.type ? React.cloneElement(child) : child
            })}</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <Button type="primary">test</Button>
      </div>
    )
  }
}