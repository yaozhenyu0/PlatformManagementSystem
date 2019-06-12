import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

function MenuComp(props) {
    return <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['questions']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="user" />试题管理
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="questions/add">添加试题</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="questions/add">试题分类</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="questions/add">查看试题</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="user" />用户管理
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="questions/add">添加用户</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="questions/add">用户展示</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="user" />考试管理
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="questions/add">添加考试</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="questions/add">试卷列表</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="user" />班级管理
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="questions/add">班级管理</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="questions/add">教室管理</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="questions/add">学生管理</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="user" />阅卷管理
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="questions/add">待批班级</Link>
            </Menu.Item>
        </SubMenu>
    </Menu>
}

export default MenuComp;