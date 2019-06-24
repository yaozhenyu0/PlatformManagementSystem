import { Radio, Input, Select, Button, Form } from 'antd';
import { connect } from 'dva';
import './exam.scss';
import styles from './exam.scss';
import React, { useEffect } from 'react'
// import { compile } from 'handlebars';

function Exam(props) {
    let { examquest } = props
    useEffect(function () {
        examquest()
        let arr = []
    }, [])
    // 课程类型
    // console.log(props.arr)
    // 考试类型

    const { Option } = Select;
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                props.inquires(values)
            }
        })
    }
    //内容
    // const { Header, Footer, Sider, Content } = Layout;

    const { getFieldDecorator } = props.form;
    return (
        <div className={styles.wrap_y}>

            <div className={styles.exam_y}>查看试题</div>
            <div className={styles.top_y}>
                <Form onSubmit={handleSubmit} className="login-form" className={styles.inp_y}>
                    <div className={styles.top_select_y}>
                        <div className={styles.top_select_left_y}>课程类型:</div>
                        <div className={styles.top_select_right_y}>
                            <Form.Item>
                                {
                                    getFieldDecorator('subject_id', {
                                    })(
                                        <Radio.Group initialvalue="a" buttonStyle="solid">
                                            {
                                                props.exam.data.map((item, index) => {
                                                    return <Radio.Button  key={index} value={item.subject_id}>{item.subject_text}</Radio.Button>

                                                })
                                            }
                                        </Radio.Group>
                                    )
                                }
                            </Form.Item>
                        </div>


                    </div>
                    <div className={styles.bottom_select_y}>
                        <div className={styles.bottom_select_left_examType_y}>
                            <div className={styles.bottom_select_left_y}>考试类型：</div>
                            <div className={styles.bottom_select_right_y}>

                                <Form.Item>
                                    {
                                        getFieldDecorator('exam_id', {
                                        })(
                                            <Select style={{ width: 180 }} >
                                                {
                                                    props.exam.Protionexamtype && props.exam.Protionexamtype.map((item, index) => (
                                                        <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                                                    ))
                                                }
                                            </Select>
                                        )
                                    }
                                </Form.Item>

                            </div>
                        </div>
                        <div className={styles.bottom_select_right_questionType_y}>
                            <div className={styles.bottom_select_left_y}>题目类型：</div>
                            <div className={styles.bottom_select_right_y}>


                                <Form.Item>
                                    {
                                        getFieldDecorator('questions_type_id', {
                                        })(
                                            <Select style={{ width: 180 }} >
                                                {
                                                    props.exam.Protionexamclass && props.exam.Protionexamclass.map((item, index) => (
                                                        <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>

                                                    ))
                                                }
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.bottom_select_right_questionType_y}>
                            <Button className={styles.bottom_select_right_questionType_btn_y} htmlType="submit" type="primary" icon="search">查询</Button>
                        </div>

                    </div>
                </Form>
            </div>
            <div className={styles.content_y}>
                {
                    props.exam.ProtionAll && props.exam.ProtionAll.map((item, index) => {
                        // console.log(item)
                        return <div className={styles.content_every_y} key={index}>
                            <div className={styles.content_every_top_y}>{item.title}</div>
                            <div className={styles.content_every_cont_y}>
                                <div className={styles.content_every_cont_left_y} onClick={() => { detalis(item) }}>
                                    <div className={styles.content_every_cont_left_left_y}>{item.questions_type_text}</div>
                                    <div className={styles.content_every_cont_left_center_y}>{item.subject_text}</div>
                                    <div className={styles.content_every_cont_left_right_y}>{item.exam_name}</div>
                                </div>
                                <div className={styles.content_every_cont_right_y} onClick={() => { compiles(item) }}>编辑</div>
                            </div>
                            <div className={styles.content_every_bottom_y}>{item.user_name} 发布</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
    function detalis(item) {
        console.log(detalis)
        window.localStorage.tre = JSON.stringify(item)
        props.history.push('examDetalis')
        // console.log(props)
    }

    function compiles(item) {
        // console.log(item)
        window.localStorage.str = JSON.stringify(item)
        props.history.push('examParticulars')
        // console.log(props)
    }
}
const mapStateToProps = state => {
    // console.log(state);
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        examquest() {
            dispatch({
                type: 'exam/questions'
            })
        },
        //查询
        inquires(values) {
            dispatch({
                type: 'exam/inquire',
                values
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Exam))