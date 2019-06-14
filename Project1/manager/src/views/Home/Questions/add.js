import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from './add.scss';
import { Input, Select, Button, Form } from 'antd';
import Editor from 'for-editor';
import './add.scss';
import { connect } from 'dva';
// import { Divider } from 'antd';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            valueTheme: '', //题目主题
            addlist: [],  //
            protion: [],
            protiontype: [],
            addTry: [],
            valueAnswer: "",  // 答案信息
            value: '',  //题目
            user_id: 0,
            addtrys: "",

        }
    }
    componentDidMount() {
        this.props.questions()
        this.props.protion()
        this.props.protiontype()
        this.props.userof()
        let eate = JSON.parse(window.localStorage.str)
    }
    componentWillReceiveProps(newProps) {
        // console.log(newProps)
        this.setState({
            //考试类型
            addlist: newProps.addlist,
            //课程类型
            protion: newProps.protions,
            //  试题类型
            protiontype: newProps.protiontypes,
            //用户id
            user_id: newProps.userofs,
            addtrys: newProps.addtrys
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            let params = values
            if (!err) {
                values.user_id = this.state.user_id
                this.props.addLists(params)
            }
        })
    }
    render() {
        // 代码选择器
        const { getFieldDecorator } = this.props.form;
        // Select选择器
        const { Option } = Select;

        // console.log(this.props.form.setFieldsValue)
        let eate = JSON.parse(window.localStorage.str)
        console.log(eate)
        let { addlist, protion, protiontype } = this.state
        return (
            <div className={styles.wrap_y}>
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>{eate.title ? "更改试题" : "添加试题"}</div>
                    <div className={styles.topic_y}>
                        <Form onSubmit={this.handleSubmit} className="login-form" className={styles.inp_y}>
                            <div className={styles.title_y}>题目信息</div>
                            <div className={styles.title_y}>题干</div>
                            <Form.Item>
                                {
                                    getFieldDecorator('questions_stem', {
                                        validateTrigger: "onInput",
                                        rules:
                                            [{ required: true, message: '请输入题目不能超过20个字!' }],
                                    })(
                                        <Input className={styles.ipt_y} placeholder="请输入题目标题，不能超过20字" />
                                    )
                                }
                            </Form.Item>
                            <div className={styles.theme_y}>题目主题</div>
                            <Form.Item>
                                {
                                    getFieldDecorator('title', {
                                    })(
                                        <Editor height='auto' />
                                    )
                                }
                            </Form.Item>
                            <div className={styles.select_box_y}>
                                <div className={styles.select_classify_y}>请选择考试类型</div>
                                <Form.Item>
                                    {
                                        getFieldDecorator('exam_id', {
                                            initialValue: "请选择考试类型"
                                        })(
                                            <Select className={styles.select_y} style={{ width: 180 }} >
                                                {addlist && addlist.map((item, index) => {
                                                    return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                                                })}
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className={styles.select_box_y}>
                                <div>请选择课程类型</div>
                                <Form.Item>
                                    {
                                        getFieldDecorator('subject_id', {
                                            initialValue: "请选择课程类型"
                                        })(
                                            <Select className={styles.select_y} style={{ width: 180 }} >
                                                {protion && protion.map((item, index) => {
                                                    return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                                })}
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className={styles.select_box_y}>
                                <div>请选择题目类型</div>
                                <Form.Item>
                                    {
                                        getFieldDecorator('questions_type_id', {
                                            initialValue: "请选择题目类型"
                                        })(
                                            <Select className={styles.select_y} style={{ width: 180 }} >
                                                {protiontype && protiontype.map((item, index) => {
                                                    return <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>
                                                })}
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className={styles.message_y}>答案信息</div>
                            <Form.Item>
                                {
                                    getFieldDecorator('questions_answer', {
                                    })(
                                        <Editor height='auto' />
                                    )
                                }
                            </Form.Item>
                            <Button className={styles.btn_y} htmlType="submit" type="primary">提交</Button>
                        </Form>
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
        //试题类型
        protiontype() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/protiontype',

            })
        },
        //添加试题
        addLists(payload) {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/questionsadd',
                payload
            })
        },
        //当前用户信息
        userof() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/userof',

            })
        },

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Add))