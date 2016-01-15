import './App.css';
import 'antd/lib/index.css';

import React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import Container from './Container';

const SubMenu = Menu.SubMenu;

export class App extends React.Component {
  render() {
    return (
      <div className="ant-layout-topaside">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo">云BI</div>
            <Menu theme="dark" mode="horizontal"
              defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
              <Menu.Item key="1">导航一</Menu.Item>
              <Menu.Item key="2">导航二</Menu.Item>
              <Menu.Item key="3">导航三</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-subheader">
          <div className="ant-layout-wrapper">
            <Menu mode="horizontal"
              defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
              <Menu.Item key="1">二级导航</Menu.Item>
              <Menu.Item key="2">二级导航</Menu.Item>
              <Menu.Item key="3">二级导航</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 600 }}>
                <Container />
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          © 2015
          </div>
        </div>
      </div>
    );
  }
}
