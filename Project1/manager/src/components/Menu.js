import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Example extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
                                                                                        
  render() {
    return (
      <div> 
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
    style={{ height: '100%', borderRight: 0 }}>
            <SubMenu
              key="questions"
              title={
                <span>
                  <Icon type="database" />
                  <span>试卷管理</span>
                </span>
              } 
            >
              <Menu.Item key="1" ><Link to="/questions/add">添加试题</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/questions/type">试题分类</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/questions/view">查看试题</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="/questions/adduser">添加用户</Link></Menu.Item>
              <Menu.Item key="5">用户展示</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="profile" />
                  <span>考试管理</span>
                </span>
              }
            >
              <Menu.Item key="7">添加考试</Menu.Item>
              <Menu.Item key="8">试卷列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="project" />
                  <span>班级管理</span>
                </span>
              }
            >
              <Menu.Item key="9">班级管理</Menu.Item>
              <Menu.Item key="10">学生管理</Menu.Item>
              <Menu.Item key="11">教室管理</Menu.Item>
            </SubMenu><SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="read" />
                  <span>阅卷管理</span>
                </span>
              }
            >
              <Menu.Item key="12">待批班级</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}
