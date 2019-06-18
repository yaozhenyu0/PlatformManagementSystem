import React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Menu from '../../components/Menu';
import styles from './index.css'
import './index.css'
import Add from '../Home/Questions/add';
import Classify from '../Home/Questions/classify';
import Exam from '../Home/Questions/exam';
import Particulars from '../Home/Questions/examParticulars';
import Detalis from '../Home/Questions/examDetalis';
// import AddUesr from '../Home/UserManagement/addUesr';
import UserDisplay from '../Home/UserManagement/userDisplay';
import ExamManage from '../Home/examManage/addExam';
import ExamList from '../Home/examManage/examList';

const { Content, Sider } = Layout;
// console.log(Add)
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
                    {/* 添加试题 */}
                    <Redirect exact from="/" to="/questions/Add" />
                    {/* 添加试题分类 */}
                    <Route path='/questions/Add' component={Add}></Route>
                    {/* 试题分类 */}
                    <Route path='/questions/Classify' component={Classify}></Route>
                    {/* 查看试题 */}
                    <Route path='/questions/Exam' component={Exam}></Route>
                    {/* 修改试题跳转 */}
                    <Route path='/questions/examParticulars' component={Particulars}></Route>
                    {/* 详情跳转 */}
                    <Route path='/questions/examDetalis' component={Detalis}></Route>
                    {/* 添加用户 */}
                    {/* <Route path='/UserManagement/addUesr' component={AddUesr}></Route> */}
                    {/* 用户展示 */}
                    <Route path='/UserManagement/userDisplay' component={UserDisplay}></Route>
                    {/* 添加考试 */}
                    <Route path='/examManage/addExam' component={ExamManage}></Route>
                    <Route path='/examManage/examList' component={ExamList}></Route>
                </Switch>
            </Content>
        </Layout>

    </Layout>
}

export default IndexPage;