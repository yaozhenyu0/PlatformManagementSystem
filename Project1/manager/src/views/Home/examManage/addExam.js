import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from './addExam.scss';
import { Input, Select, Button, Form, InputNumber, DatePicker } from 'antd';
import Editor from 'for-editor';
import './addExam.scss';
import { connect } from 'dva';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            addlist: [],
            protion: [],
            protiontype: [],
            addTry: [],
            startValue: null,
            endValue: null,
            endOpen: false,
            startTime: "",
            endTime: ""

        }
    }

    //  获取时间
    disabledStartDate = startValue => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        this.onChange('startValue', value);
        console.log(value._d * 1)
        console.log(Number(value))
        this.setState({
            startTime: value._d * 1

        })
    };

    onEndChange = value => {
        this.onChange('endValue', value);
        this.setState({
            endTime: value._d * 1
        })
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };



    componentDidMount() {
        this.props.questions()
        this.props.protion()
        this.props.protiontype()
        this.props.userof()
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
            // console.log(values)
            values.start_time = this.state["startTime"]
            values.end_time = this.state["endTime"]
            console.log(values)
            let params = values
            if (!err) {
                this.props.addsExam(params)
                console.log(params)
            }
        })
    }
    render() {
        // 代码选择器
        const { getFieldDecorator } = this.props.form;
        // Select选择器
        const { Option } = Select;

        // 时间选择器
        const { startValue, endValue, endOpen } = this.state;

        let { addlist, protion, protiontype } = this.state
        return (
            <div className={styles.wrap_y}>
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>添加考试</div>
                    <div className={styles.topic_y}>
                        <Form onSubmit={this.handleSubmit} className="login-form" className={styles.inp_y}>
                            <div className={styles.title_y}>*试卷名称：</div>
                            <Form.Item>
                                {
                                    getFieldDecorator('title', {
                                    })(
                                        <Input className={styles.ipt_y} />
                                    )
                                }
                            </Form.Item>
                            <div className={styles.select_box_y}>
                                <div className={styles.select_classify_y}>请选择考试类型</div>
                                <Form.Item>
                                    {
                                        getFieldDecorator('exam_id', {
                                            initialValue: "选择考试类型"
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
                                <div>选择课程：</div>
                                <Form.Item>
                                    {
                                        getFieldDecorator('subject_id', {
                                            initialValue: "选择课程"
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
                                <div>设置题量：</div>
                                <Form.Item>
                                    {getFieldDecorator('number', { initialValue: 4 })(<InputNumber min={3} max={10} />)}
                                </Form.Item>
                            </div>
                            <div className={styles.message_y}>考试时间</div>
                            <Form.Item>
                                {
                                    getFieldDecorator('questions_answer', {
                                    })(
                                        <div>
                                            <DatePicker
                                                disabledDate={this.disabledStartDate}
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                                value={startValue}
                                                placeholder="开始时间"
                                                onChange={this.onStartChange}
                                                onOpenChange={this.handleStartOpenChange}
                                            />
                                            <DatePicker
                                                disabledDate={this.disabledEndDate}
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                                value={endValue}
                                                placeholder="结束时间"
                                                onChange={this.onEndChange}
                                                open={endOpen}
                                                onOpenChange={this.handleEndOpenChange}
                                            />
                                        </div>
                                    )
                                }
                            </Form.Item>
                            <Button className={styles.btn_y} htmlType="submit" type="primary">创建试卷</Button>
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
        //添加考试
        addsExam(payload) {
            // console.log(payload)
            dispatch({
                //命名空间+异步操作名字
                type: 'add/addExams',
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