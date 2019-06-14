import React, { Component } from 'react';
import styles from './classify.scss'
// import { Button, Input, Modal, Row, Col } from 'antd'
import Editor from 'for-editor';
import { Input, Select, Button, Form } from 'antd';
import { connect } from 'dva';

class Classify extends Component {
    constructor(props) {
        super()
        this.state = {
            obj: {}
        }
    }
    componentDidMount() {
        this.setState({
            obj: window.localStorage.str
        })
        console.log(JSON.parse(window.localStorage.str))
    }
    render() {
        // 代码选择器
        const { getFieldDecorator } = this.props.form;
        // Select选择器
        const { Option } = Select;

        let { addlist, protion, protiontype, valueTheme, valueAnswer } = this.state
        return (
            <div className={styles.wrap_y}>111
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>添加试题</div>
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
    console.log(state)
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {


    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Classify))
