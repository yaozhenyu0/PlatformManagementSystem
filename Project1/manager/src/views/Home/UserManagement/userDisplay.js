import React, { Component } from 'react';
import styles from './addUser.scss';
import { Tabs, Table } from 'antd';
import Editor from 'for-editor';
import './addUser.scss';
import { connect } from 'dva';
import 'antd/dist/antd.css'

class UserDisplay extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            userData: [],
            idenData: [],
            apiPort: [],
            idenApi: [],
            viewData: [],
            idenView: [],
        }
    }
    componentDidMount() {
        console.log(this.props.userShow)
        this.props.userShow()
        this.props.idenData()
        this.props.apiPort()
        this.props.idenApis()
        this.props.viewData()
        this.props.idenView()
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            userData: newProps.data,  //用户数据
            idenData: newProps.datas,   //用户管理
            apiPort: newProps.dataApi,    //api权限接口
            idenApi: newProps.apiIden,    //身份和api接口关系
            viewData: newProps.viewdata,    //视图接口名称
            viewIdens: newProps.viewIdenData    //身份和视图权限关系
        })

    }
    handleSubmit = e => {

    }

    callback(key) {
        console.log(key);
    }
    render() {
        const columns = [
            [
                {
                    title: '用户名',
                    dataIndex: 'user_name',
                },
                {
                    title: '密码',
                    dataIndex: 'user_pwd',
                },
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                }
            ],
            [
                {
                    title: '身份名称',
                    dataIndex: 'identity_text',
                }

            ], [
                {
                    title: 'api权限名称',
                    dataIndex: 'api_authority_text',
                },
                {
                    title: 'api权限url',
                    dataIndex: 'api_authority_url',
                },
                {
                    title: 'api权限方法',
                    dataIndex: 'api_authority_method',
                }

            ], [
                {
                    title: '身份名称',
                    dataIndex: 'identity_text',
                },
                {
                    title: 'api权限名称',
                    dataIndex: 'api_authority_text',
                },
                {
                    title: 'api权限url',
                    dataIndex: 'api_authority_url',
                },
                {
                    title: 'api权限方法',
                    dataIndex: 'api_authority_method',
                }

            ], [
                {
                    title: '视图权限名称',
                    dataIndex: 'view_authority_text',
                },
                {
                    title: '视图id',
                    dataIndex: 'view_id',
                }

            ], [
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                },
                {
                    title: '视图名称',
                    dataIndex: 'view_authority_text',
                },
                {
                    title: '视图id',
                    dataIndex: 'view_id',
                }

            ]
        ];
        let { userData, idenData, apiPort, idenApi, viewData, viewIdens } = this.state
        const data = [
            userData, idenData
        ];


        const { TabPane } = Tabs;
        let { index } = this.state
        return (

            <div className={styles.wrop_y}>
                <div className={styles.userShow_y}>用户展示</div>
                <div className={styles.tab_y}>


                    <Tabs type="card" onChange={this.callback}>
                        <TabPane tab="用户数据" key="1">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>用户数据</h4>
                                    <Table columns={columns[index]} dataSource={userData} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="身份数据" key="2">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>身份数据</h4>
                                    <Table columns={columns[index]} dataSource={idenData} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="api接口权限" key="3">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>api接口权限</h4>
                                    <Table columns={columns[index]} dataSource={apiPort} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="身份和api接口关系" key="4">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>身份和api接口关系</h4>
                                    <Table columns={columns[index]} dataSource={idenApi} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="视图接口权限" key="5">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>视图接口权限</h4>
                                    <Table columns={columns[index]} dataSource={viewData} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="身份和视图权限关系" key="6">
                            <div className={styles.tab_con_y}>
                                <div>
                                    <h4>身份和视图权限关系</h4>
                                    <Table columns={columns[index]} dataSource={viewIdens} size="middle" />
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
    callback = (key) => {
        console.log(key)
        this.setState({
            index: key - 1
        })
    }
}
const mapStateToProps = state => {
    return { ...state.useroption }
}
const mapDisaptchToProps = dispatch => {
    return {
        //用户展示
        //用户数据
        userShow() {
            dispatch({
                type: 'useroption/options',
            })
        },
        //身份数据
        idenData() {
            dispatch({
                type: 'useroption/optionsData',
            })
        },
        //api接口权限
        apiPort() {
            dispatch({
                type: 'useroption/apiPorts',
            })
        },
        //身份和api接口关系
        idenApis() {
            dispatch({
                type: 'useroption/idenApi',
            })
        },
        //视图接口权限
        viewData() {
            dispatch({
                type: 'useroption/dataview',
            })
        },
        //视图接口权限
        idenView() {
            dispatch({
                type: 'useroption/idenViews',
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(UserDisplay)