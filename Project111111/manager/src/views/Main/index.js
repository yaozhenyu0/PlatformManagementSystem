
import { Layout, Dropdown, Menu ,Modal, Button } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import React, { useEffect,useState } from 'react';
import Menus from '../../components/Menu';
import styles from './index.css'
import './index.css'
import Add from '../Home/Questions/add/add';
import Classify from '../Home/Questions/classify/classify';
import Exam from '../Home/Questions/exam/exam';
import Particulars from '../Home/Questions/examParticulars/examParticulars';
import Detalis from '../Home/Questions/examDetalis/examDetalis';
import Adduser from '../Home/Questions/addUser/addUser'
import userDisp from '../Home/UserManagement/userDisplay';
import addExam from '../Home/examManage/addExam';
import Examlist from '../Home/examManage/examList';
import classIf from '../Home/Questions/classmanage/classmanage';
import studentIf from '../Home/Questions/studentmanage/studentmanage';
import {connect} from 'dva';
import Class from '../Home/classmanage/addClass';
import {removeToken} from '@/utils/user'
const { Content, Sider } = Layout;
const confirm = Modal.confirm;

function IndexPage(props) {
    const [visible,setvisible]=useState(false)
    const [val,setval]=useState('https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg')
    let onClick = ({ key }) => {
        if(key*1 === 4){
            let {history:{push}} = props
            confirm({
                title: '你确定要退出当前的账号吗?',
                content: 'Are you sure you want to log out of your current account?',
                okText: 'Yes/我确定ε(┬┬＿┬┬)3',
                okType: 'danger',
                cancelText: 'No/考虑一下( ͡° ͜ʖ ͡°)✧',
                onOk() {
                    removeToken()
                    push('/login')
                    window.localStorage.clear()
                },
                onCancel() {
                  console.log('Cancel');
                },
            });
            
        }else if(key*1===1){
            setvisible(true)
        }
    };
    let onclick = ({ key }) => {
        if(key*1 === 1*1){
            console.log(6666)
            props.changeLocal('zh')
        }else{
            props.changeLocal('en')
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
    const zhes = (
        <Menu onClick={onclick}>
            <Menu.Item key="1">中文</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">英文</Menu.Item>
        </Menu>
    );
    let showModal = () => {
        setvisible(true)
    };
  
   let handleOk = e => {
      setvisible(true)
    };
  
    let handleCancel = e => {
      setvisible(false)
    };
    let inpChange=e=>{
        console.log(e)
        let files=e.target.files
        console.log(files)
        var reader=new FileReader()
        reader.onload=function(){
            setval(this.result)
        }
        reader.readAsDataURL(files[0])
    }
    return <Layout className={styles.container}>
    <div>
     
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p><input type="file" onChange={inpChange}/></p>
        </Modal>
      </div>
        <div className={styles.top_y}>
            <img className={styles.img_left_y} style={{width:'120px',height:'25px',marginLeft:'50px'}} src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
           
        </div>
        <div style={{display:'flex',alignItems:'center',position:'absolute',right:'70px',top:'20px'}}>
                    <Dropdown overlay={zhes}>
                        <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>国际化</span>
                    </Dropdown>
                    <Dropdown overlay={menu}>
                        <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={val} style={{ width: '30px', height: '30px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px'}} alt="" />chenmanjie</span>
                    </Dropdown>
                </div>
        <Layout>
            <Sider>
                <Menus></Menus>
            </Sider>
            <Content>

                <Switch>
                    <Route path='/questions/Add' component={Add}></Route>
                    <Route path='/questions/Classify' component={Classify}></Route>
                    <Route path='/questions/Exam' component={Exam}></Route>
                    <Route path='/questions/examParticulars' component={Particulars}></Route>
                    <Route path='/questions/examDetalis' component={Detalis}></Route>
                    <Route path='/questions/addUesr' component={Adduser}></Route>
                    <Route path='/questions/userDisplay' component={userDisp}></Route>
                    <Route path='/questions/addExam' component={addExam}></Route>
                    <Route path='/questions/examList' component={Examlist}></Route>
                    <Route path='/questions/classmanage' component={classIf}></Route>
                    <Route path='/questions/studentmanage' component={studentIf}></Route>
                    <Route path='/questions/addClass' component={Class}></Route>
                    <Redirect exact from="/" to="/questions/Add" />
                </Switch>
            </Content>
        </Layout>

    </Layout>
}
const mapStateToProps = state=>{
    return {
    //   locale: state.global.locale,
    //   myView: state.user.myView,
    //   forbiddenView: state.user.forbiddenView
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return {
      changeLocal: payload=>{
        dispatch({
          type: 'global/changeLocale',
          payload
        })
      }}
  }
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)