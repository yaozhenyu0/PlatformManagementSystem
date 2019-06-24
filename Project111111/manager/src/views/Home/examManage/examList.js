import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from './examList.scss';
import { Select, Button, Form, Tabs } from 'antd';
// import Editor from 'for-editor';
import './examList.scss';
import { connect } from 'dva';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            addlist: [],
            protion: [],
            protiontype: [],
            addTry: [],
            examList: [],
            startTime: "",
            endTime: "",
        }
    }

    componentDidMount() {
        this.props.questions()
        this.props.protion()
        this.props.examLists()
    }
    componentWillReceiveProps(newProps) {
        if (newProps.examlist) {
            // console.log()
            this.setState({
                // 试卷列表
                examList: newProps.examlist,
                // endTime: newProps.examlist.exam[0].end_time * 1,
                // startTime: newProps.examlist.exam[0].start_time * 1
            })
        }
        this.setState({
            //考试类型
            addlist: newProps.addlist,
            //课程类型
            protion: newProps.protions,
        })
    }

    detalise = (item) => {
        console.log(item)
        console.log(this.props);
        // window.localStorage.str = JSON.stringify(item)
        this.props.history.push(`children?id=${item}`)
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // console.log(values)
            // values.exam_exam_id= this.state.exam_exam_id
            let params = values
            if (!err) {
                // this.props.addsExam(params)
            }
        })
    }
    render() {
        // 代码选择器
        const { getFieldDecorator } = this.props.form;
        // Select选择器
        const { Option } = Select;

        const { TabPane } = Tabs;

        let { addlist, protion, examList, startTime, endTime } = this.state
        // console.log(examList)
        return (
            <div className={styles.wrap_y}>
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>试卷列表</div>
                    <div className={styles.topic_y}>
                        <Form onSubmit={this.handleSubmit} className="login-form" className={styles.inp_y}>
                            <div className={styles.select_big}>
                                <div className={styles.select_classify_y}>考试类型：</div>
                                <div className={styles.select_box_y}>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('exam_id', {
                                                initialValue: "考试类型"
                                            })(
                                                <Select className={styles.select_y} style={{ width: 160 }} >
                                                    {addlist && addlist.map((item, index) => {
                                                        return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                                                    })}
                                                </Select>
                                            )
                                        }
                                    </Form.Item>
                                </div>
                                <div className={styles.select_classify_ke_y}>课程：</div>
                                <div className={styles.select_box_bottom_y}>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('subject_id', {
                                                initialValue: "课程"
                                            })(
                                                <Select className={styles.select_y} style={{ width: 160 }} >
                                                    {protion && protion.map((item, index) => {
                                                        return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                                    })}
                                                </Select>
                                            )
                                        }
                                    </Form.Item>
                                </div>
                                <Button className={styles.btn_y} htmlType="submit" type="primary">查询</Button>
                            </div>
                        </Form>
                    </div>
                    <div className={styles.examList_y}>
                        <div className={styles.examList_top_left_y}>试卷列表</div>
                        <div className={styles.examList_top_right_y}>
                            <Tabs onChange={this.callback} type="card">
                                <TabPane tab="全部" key="1">
                                    <ul>
                                        <li>判卷信息</li>
                                        <li>班级</li>
                                        <li>创建人</li>
                                        <li>开始时间</li>
                                        <li>结束时间</li>
                                        <li>操作</li>
                                    </ul>
                                    {
                                        examList.exam && examList.exam.map((item, i) => {
                                            console.log(item)
                                            return <ol key={i}>
                                                <li>
                                                    <div>{item.title}</div>
                                                    <div>0{(item.end_time - item.start_time) / 1000 / 60 / 60}:00:00</div>
                                                </li>
                                                <li>
                                                    <div>考试班级</div>
                                                    <div className={styles.list_y}>{item.grade_name}
                                                        {/* {
                                                            item.grade_name.map((items, i) => {
                                                                <div>{items}</div>
                                                            })

                                                        } */}
                                                    </div>


                                                </li>
                                                <li>{item.user_name}</li>
                                                <li>{new Date(startTime).toLocaleString()}</li>
                                                <li>{new Date(endTime).toLocaleString()}</li>
                                                <li className={styles.goToChild_y} onClick={this.detalise.bind(this, item.exam_exam_id)} >详情</li>
                                            </ol>
                                        })
                                    }


                                </TabPane>
                                <TabPane tab="进行中" key="2">
                                    Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab="已结束" key="3">
                                    Content of Tab Pane 3
                                </TabPane>
                            </Tabs>,
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { ...state.add }
}
const mapDisaptchToProps = dispatch => {
    return {
        //考试类型
        questions() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/questions',

            })
        },
        //课程类型
        protion() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/protion',

            })
        },
        // 试卷列表
        examLists() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/examlist',

            })
        },
        // //添加考试
        // addsExam(payload) {
        //     console.log(payload)
        //     dispatch({
        //         //命名空间+异步操作名字
        //         type: 'add/addExams',
        //         payload
        //     })
        // },
        // //当前用户信息
        // userof() {
        //     dispatch({
        //         //命名空间+异步操作名字
        //         type: 'add/userof',

        //     })
        // },

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Add))