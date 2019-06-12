import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'dva/router';
import Menu from '../../components/Menu';
import styles from './index.css'

const { Header, Content, Sider } = Layout;

function IndexPage(props) {
    return <Layout className={styles.container}>
        <Header>
            <p>顶部信息</p>
        </Header>
        <Layout>
            <Sider>
                <Menu></Menu>
            </Sider>
            <Content>
                <Switch>
                    <Route path='/qusetions/add' component={null}></Route>
                    <Route path='/qusetions/type' component={null}></Route>
                    <Route path='/qusetions/view' component={null}></Route>
                </Switch>
            </Content>
        </Layout>
    </Layout>
}

export default IndexPage;