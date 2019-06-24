import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router';
const { SubMenu } = Menu;
// import { injectIntl } from 'react-intl'

function MenuComp(props) {
    // console.log(props)
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="user" />
                        {/* {props.intl.formatMessage({ id: 'router.questions' })} */}
                        试题管理
                </span>
                }
            >
                <Menu.Item key="1">
                    <Link to="/questions/Add">添加试题</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/questions/Classify">试题分类</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/questions/Exam">查看试题</Link>
                </Menu.Item>

            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="laptop" />
                        用户管理
                </span>
                }
            >
                <Menu.Item key="5">
                    <Link to="/questions/addUesr">添加用户</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/questions/userDisplay">用户展示</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
                        <Icon type="notification" />
                        考试管理
                </span>
                }
            >
                <Menu.Item key="9">
                    <Link to="/questions/addExam">添加考试</Link>
                </Menu.Item>
                <Menu.Item key="10">
                    <Link to="/questions/examList">试卷列表</Link>
                </Menu.Item>

            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <Icon type="notification" />
                        班级管理
                </span>
                }
            >
                <Menu.Item key="14">
                    <Link to="/questions/addClass">教室管理</Link>
                </Menu.Item>
                <Menu.Item key="13">
                    <Link to="/questions/Classmanage">班级管理</Link>
                </Menu.Item>
                <Menu.Item key="15">
                    <Link to="/questions/Studentmanage">学生管理</Link>
                </Menu.Item>

            </SubMenu>
            <SubMenu
                key="sub5"
                title={
                    <span>
                        <Icon type="notification" />
                        阅卷管理
                </span>
                }
            >
                <Menu.Item key="17">待批班级</Menu.Item>

            </SubMenu>
        </Menu>
    )
}
export default MenuComp