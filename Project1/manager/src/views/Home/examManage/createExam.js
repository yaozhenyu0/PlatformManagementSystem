import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from './createExam.scss';
import './createExam.scss';
import { connect } from 'dva';
import { Button, Drawer } from 'antd';

class CreateExam extends Component {
    constructor() {
        super()
        this.state = {
            examAdd: {},
            sum: 0,
            visible: false,
        }
    }
    componentDidMount() {
        let eate = JSON.parse(window.localStorage.list)
        let exams = JSON.parse(window.localStorage.examlist)
        console.log(exams)
        this.setState({
            examAdd: exams
        })
        this.props.addsExam(eate)
    }
    componentWillReceiveProps(newProps) {
        // console.log(newProps.addSexamS)
        if (newProps.addSexamS) {
            // console.log(newProps.addSexamS)
            this.setState({
                // examAdd: newProps.addSexamS
            })

        }

    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        let { examAdd, sum } = this.state
        console.log(examAdd)
        return (
            // console.log(this)
            <div className={styles.wrap_y}>
                <div className={styles.test_y}>创建试卷</div>
                < div className={styles.wrap_right_y} >
                    <div className={styles.z_y}></div>
                    <div className={styles.btns_y}><Button onClick={this.showDrawer}>添加试题</Button></div>

                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                    <div className={styles.title_y}>{examAdd.title}</div>
                    <div className={styles.name_y}>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</div>
                    {
                        examAdd.questions && examAdd.questions.map((item, index) => {
                            return <div className={styles.content_y} key={index}>
                                <div className={styles.content_title_y}>{sum + 1}:{item.title}</div>
                                <div className={styles.content_questions_stem_y}>{item.questions_stem}</div>
                                <div className={styles.dele_y}>删除</div>
                            </div>
                        })
                    }
                    <div className={styles.btn_y}>
                        <Button onClick={this.sucGoTo} type="primary">创建试卷</Button>
                    </div>

                </div>

            </div>
        )
    }
    sucGoTo = () => {
        this.props.history.push(`examList`)
    }
}
const mapStateToProps = state => {
    return { ...state.add }
}
const mapDisaptchToProps = dispatch => {
    return {
        //添加考试
        addsExam(payload) {
            // console.log(payload)
            dispatch({
                //命名空间+异步操作名字
                type: 'add/addExams',
                payload
            })
        },

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(CreateExam)