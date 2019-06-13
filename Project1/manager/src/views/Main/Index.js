import React from 'react';
import {Layout,message,Dropdown,Menu} from 'antd';
import { Route, Switch } from 'dva/router';
import Example from '@/components/Menu'
import './Index.scss'
import Add from './Questions/Addexam';
import Type from './Questions/Typeexam';
import View from './Questions/Viewexam';
import Adduser from './Questions/Adduser';


const { Header, Content, Sider } = Layout;

function IndexPage(props){
   let onClick = ({ key }) => {
        if(key*1 === 4){
            message.info(`Click on item ${key}`);
        }
        
      };
  const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">个人中心</Menu.Item>
        <Menu.Item key="2">我的班级</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">设置</Menu.Item>
        <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
);
  return  <div>
  <Layout>
      <Header>
          <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" style={{ width: '150px', height: 'auto' }} alt="" />
          </div>
          <Dropdown overlay={menu}>
              <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" style={{ width: '40px', height: '40px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px' }} alt="" />渲染值</span>
          </Dropdown>
      </Header>
      <Layout>
          <Sider>
              <Example />
          </Sider>
          <Content>
              <Switch>
                  <Route path="/questions/add" component={Add}></Route>
                  <Route path="/questions/type" component={Type}></Route>
                  <Route path="/questions/view" component={View}></Route>
                  <Route path="/questions/adduser" component={Adduser}></Route>
              </Switch>
          </Content>
      </Layout>
  </Layout>
</div>
}

export default IndexPage;
