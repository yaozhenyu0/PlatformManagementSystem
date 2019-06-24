import React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Menu from '../../components/Menu';
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

import Class from '../Home/classmanage/addClass';
console.log(userDisp)
const { Content, Sider } = Layout;
function IndexPage(props) {
    return <Layout className={styles.container}>
        <div className={styles.top_y}>
            <img className={styles.img_left_y} src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
            <img className={styles.img_right_y} src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
        </div>
        <Layout>
            <Sider>
                <Menu></Menu>
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

export default IndexPage;