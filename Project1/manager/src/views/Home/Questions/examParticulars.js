import React, { Component } from 'react';
import styles from './examParticulars.scss'
import Editor from 'for-editor';
import { Input, Select, Button, Form } from 'antd';
import { connect } from 'dva';
import './examParticulars.scss';

class Classify extends Component {
    constructor(props) {
        super()
        this.state = {
            obj: {},
            addlist: [],  //
            protion: [],
            protiontype: [],
        }
    }
    componentDidMount() {
        this.setState({
            obj: window.localStorage.str
        })
        // console.log(JSON.parse(window.localStorage.str))
        this.props.questions()
        this.props.protion()
        this.props.protiontype()
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
        })
    }
    render() {
        // 代码选择器
        const { getFieldDecorator } = this.props.form;
        // Select选择器
        const { Option } = Select;

        let eate = JSON.parse(window.localStorage.str)

        let { addlist, protion, protiontype, valueTheme, valueAnswer } = this.state
        return (
            <div className={styles.wrap_y}>
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>更改试题</div>
                    <div className={styles.topic_y}>
                        <div className={styles.title_y}>题目信息</div>
                        <div className={styles.title_y}>题干</div>
                        <Input className={styles.ipt_y} value={eate.title} placeholder="请输入题目标题，不能超过20字" />

                        <div className={styles.theme_y}>题目主题</div>
                        <Editor height='auto' value={eate.questions_stem} />
                        <div className={styles.select_box_y}>
                            <div className={styles.select_classify_y}>请选择考试类型</div>
                            <Select className={styles.select_y} value={eate.exam_name} style={{ width: 180 }} >
                                {addlist && addlist.map((item, index) => {
                                    return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                                })}
                            </Select>
                        </div>
                        <div className={styles.select_box_y}>
                            <div>请选择课程类型</div>
                            <Select className={styles.select_y} value={eate.subject_text} style={{ width: 180 }} >
                                {protion && protion.map((item, index) => {
                                    return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className={styles.select_box_y}>
                            <div>请选择题目类型</div>
                            <Select className={styles.select_y} value={eate.questions_type_text} style={{ width: 180 }} >
                                {protiontype && protiontype.map((item, index) => {
                                    return <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className={styles.message_y}>答案信息</div>
                        <Editor height='auto' value={eate.questions_answer} />
                        <Button className={styles.btn_y} onClick={() => { succe() }} htmlType="submit" type="primary">提交更改</Button>

                    </div>
                </div>

            </div>
        )

        function succe() {
            alert("更改成功")
        }
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { ...state }
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

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Classify))
