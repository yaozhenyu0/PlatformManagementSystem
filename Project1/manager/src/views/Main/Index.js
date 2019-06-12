import { connect } from 'dva';
import styles from './domePage.css';
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon,Layout  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { SubMenu }  = Menu;

class domePage extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (<div>
        <div className={styles.header}>
              {/* <Header>Header</Header> */}
        </div>
      <Layout className={styles.box}>
      <Sider className={styles.slider}>
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
        theme="dark"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>试题管理</span>
            </span>
          }
        >
          <Menu.Item key="1">添加试题</Menu.Item>
          <Menu.Item key="2">试题分类</Menu.Item>
          <Menu.Item key="3">查看试题</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>用户管理</span>
            </span>
          }
        >
          <Menu.Item key="4">添加用户</Menu.Item>
          <Menu.Item key="5">用户展示</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span>考试管理</span>
            </span>
          }
        >
          <Menu.Item key="6">添加考试</Menu.Item>
          <Menu.Item key="7">试卷列表</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="appstore" />
              <span>班级管理</span>
            </span>
          }
        >
          <Menu.Item key="8">班级管理</Menu.Item>
          <Menu.Item key="9">教室管理</Menu.Item>
          <Menu.Item key="10">学生管理</Menu.Item>
        </SubMenu>
       
      
        <SubMenu
          key="sub5"
          title={
            <span>
              <Icon type="setting" />
              <span>阅卷管理</span>
            </span>
          }
        >
          <Menu.Item key="11">待批班级</Menu.Item>
        </SubMenu>
      </Menu>
      </Sider>
        
        <Content>Content</Content>
     
    </Layout>
    </div>
    );
  }
}
export default connect()(domePage);