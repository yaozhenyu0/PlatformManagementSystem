import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './add.scss';
import { Input, Select, Button } from 'antd';
import Editor from 'for-editor';
import './add.scss';
import { connect } from 'dva';
import { Divider } from 'antd';



class Add extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            addlist: [],
            protion: [],
            protiontype: [],
            addTry: [],
            account: "",
        }
        // console.log(this.state.value)
    }

    handleChange(value) {
        console.log(value)
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.add()
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            addlist: newProps.addlist,
            protion: newProps.protion,
            protiontype: newProps.protiontype
        })
    }
    render() {
        // 代码选择器
        const { value } = this.state

        // Select选择器
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        let { addlist, protion, protiontype } = this.state
        return (
            <div className={styles.wrap_y}>
                <div className={styles.wrap_right_y}>
                    <div className={styles.test_y}>添加试题</div>
                    <div className={styles.topic_y}>
                        <div className={styles.title_y}>题目信息</div>
                        <div className={styles.title_y}>题干</div>
                        <Input className={styles.ipt_y}
                            // value={account}
                            // onChange={(e) => {setAccount(e.target.value)}} 
                            placeholder="请输入题目标题，不能超过20字" />
                        <div className={styles.theme_y}>题目主题</div>
                        <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />

                        <div className={styles.select_box_y}>
                            <div className={styles.select_classify_y}>请选择考试类型</div>
                            <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                                {addlist && addlist.map((item, index) => {
                                    return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
                                })}
                            </Select>
                        </div>

                        <div className={styles.select_box_y}>
                            <div>请选择课程类型</div>
                            <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                                {protion && protion.map((item, index) => {
                                    return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
                                })}
                            </Select>
                        </div>

                        <div className={styles.select_box_y}>
                            <div>请选择题目类型</div>
                            <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                                {protiontype && protiontype.map((item, index) => {
                                    return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
                                })}
                            </Select>
                        </div>


                        <div className={styles.message_y}>答案信息</div>
                        <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />
                        <Button className={styles.btn_y} type="primary">提交</Button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log('state...', state);
    return { ...state.add }
}
const mapDisaptchToProps = dispatch => {
    return {
        add() {
            dispatch({
                //命名空间+异步操作名字
                type: 'add/questions'
            })
        },

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Add)