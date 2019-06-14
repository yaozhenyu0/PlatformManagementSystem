import { Radio, Select, Button, Layout } from 'antd';
import { connect } from 'dva';
import './exam.scss';
import styles from './exam.scss';
import React, { useEffect,useState } from 'react'
const { Header, Footer, Sider, Content } = Layout;

function Exam(props) {
    let { examquest,look } = props
    
    let [val,setval]=useState('')
    let [val2,setval2]=useState('')
    useEffect(function () {
        examquest()
        look()
    }, [])
    
    // 课程类型
    function onChange(e) {
        // console.log(`radio checked:${e.target.value}`);
    }

    // 考试类型
    const { Option } = Select;

    function handleChange(value) {//select考试类型  
        setval(value)
    }
    function handleChanges(value) {//select 题目类型
        setval2(value)
    }
    function Testtype(value){
// console.log(value)
    }
    function handleQuery(){     //点击查询
        console.log(val,val2)
        props.look(`?exam_id=${val}&questions_type_id=${val2}`)
        
    }
    //内容
    return (
        <div className={styles.wrap_y}>

            <div className={styles.exam_y}>查看试题</div>
            <div className={styles.top_y}>
                <div className={styles.top_select_y}>
                    <div className={styles.top_select_left_y}>课程类型:</div>
                    {
                        // console.log(props)
                        props.exam.data.map((item, index) => {
                            return <div className={styles.top_select_right_y} key={index}>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value={item.subject_id} onClick={Testtype(item.subject_id)}>{item.subject_text}</Radio.Button>
                                </Radio.Group>
                            </div>

                        })
                    }

                </div>
                <div className={styles.bottom_select_y}>
                    <div className={styles.bottom_select_left_examType_y}>
                        <div className={styles.bottom_select_left_y}>考试类型：</div>
                        <div className={styles.bottom_select_right_y}>
                            <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                                {
                                    props.exam.Protionexamtype && props.exam.Protionexamtype.map((item, index) => (
                                        <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                                    ))
                                }
                            </Select>
                        </div>


                    </div>
                    <div className={styles.bottom_select_right_questionType_y}>
                        <div className={styles.bottom_select_left_y}>题目类型：</div>
                        <div className={styles.bottom_select_right_y}>
                            <Select defaultValue="" style={{ width: 120 }} onChange={handleChanges}>
                                {
                                    props.exam.Protionexamclass && props.exam.Protionexamclass.map((item, index) => (
                                        < Option key={index} value={item.questions_type_id} > {item.questions_type_text}</Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div className={styles.bottom_select_right_questionType_y}>
                        <Button className={styles.bottom_select_right_questionType_btn_y} type="primary" icon="search" onClick={handleQuery}>查询</Button>
                    </div>
                </div>
            </div>
            <div className={styles.content_y}>
                {
                    props.exam.ProtionAll && props.exam.ProtionAll.map((item, index) => {
                        // console.log(item)
                        return <div className={styles.content_every_y} key={index}>
                            <div className={styles.content_every_top_y}>{item.title}</div>
                            <div className={styles.content_every_cont_y}>
                                <div className={styles.content_every_cont_left_y}>
                                    <div className={styles.content_every_cont_left_left_y}>{item.questions_type_text}</div>
                                    <div className={styles.content_every_cont_left_center_y}>{item.subject_text}</div>
                                    <div className={styles.content_every_cont_left_right_y}>{item.exam_name}</div>
                                </div>
                                <div className={styles.content_every_cont_right_y}>编辑</div>
                            </div>
                            <div className={styles.content_every_bottom_y}>{item.user_name} 发布</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        examquest() {
            dispatch({
                type: 'exam/questions'
            })
        },
        look(payload) {
            dispatch({
                type: 'exam/questions',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Exam)