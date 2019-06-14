import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './add.scss';
import { Input, Select, Button,Modal } from 'antd';
import Editor from 'for-editor';
import './add.scss';
import { connect } from 'dva';



class Add extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            addlist: [],
            protion: [],
            protiontype: [],
            addTry: [],
            visible: false 
        }
    }

    handleChange(value) {
        console.log(value)
        this.setState({
            value:value
        })
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
        this.showModal = () => {
            this.setState({
            visible: true,
            });
        };

        this.handleOk = e => {
            console.log(e);
            this.setState({
            visible: false,
            });
        };

        this.handleCancel = e => {
            console.log(e);
            this.setState({
            visible: false,
            });
        };
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
                <div className={styles.test_y}>添加试题</div>

                <div className={styles.topic_y}>
                    <div>题目信息</div>
                    <div>题干</div>
                    <Input className={styles.ipt} placeholder="请输入题目标题，不能超过20字" />

                    <div className={styles.theme_y}>题目主题</div>
                    <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />
                    <div>
                        <div>请选择考试类型</div>
                        <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                            {addlist && addlist.map((item, index) => {
                                return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
                            })}
                        </Select>
                    </div>

                    <div>
                        <div>请选择课程类型</div>
                        <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                            {protion && protion.map((item, index) => {
                                return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
                            })}
                        </Select>
                    </div>

                    <div>
                        <div>请选择题目类型</div>
                        <Select className={styles.select_y} defaultValue="类型选择" style={{ width: 180 }} onChange={this.handleChange}>
                            {protiontype && protiontype.map((item, index) => {
                                return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
                            })}
                        </Select>
                    </div>


                    <div className={styles.message_y}>答案信息</div>
                    <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />
                    <div>
        <Button type="primary" onClick={this.showModal}>
          提交
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>你确定要添加这道试题吗？</p>
          <p>真的要添加吗？</p>
        </Modal>
      </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('state...', state);
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