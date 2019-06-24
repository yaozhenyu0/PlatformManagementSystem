import React, { Component } from 'react';
import styles from './examDetalis.scss'
import { connect } from 'dva';
import './examDetalis.scss';

class Classify extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        this.setState({
            obj: window.localStorage.str
        })
    }
    componentWillReceiveProps(newProps) {
    }
    render() {
        let eate = JSON.parse(window.localStorage.tre)

        return (
            <div className={styles.wrap_y}>
                <div className={styles.exam_y}>试题详情</div>
                <div className={styles.wrap_con_y}>
                    <div className={styles.wrap_con_left_y}>
                        <div className={styles.wrap_con_master_y}>出题人： {eate.user_name}</div>
                        <div className={styles.wrap_con_messages_y}>题目信息</div>
                        <div className={styles.wrap_con_messages_detalis_y}>
                            <div className={styles.wrap_con_messages_a_y}>{eate.questions_type_text}</div>
                            <div className={styles.wrap_con_messages_b_y}>{eate.subject_text}</div>
                            <div className={styles.wrap_con_messages_c_y}>{eate.exam_name}</div>
                        </div>
                        <div className={styles.wrap_con_name_y}>{eate.title}</div>
                        <div className={styles.wrap_con_content_y}>{eate.questions_stem}</div>
                    </div>
                    <div className={styles.wrap_con_right_y}>
                        <div className={styles.wrap_con_answerHints_y}>答案提示</div>
                        <div className={styles.wrap_con_content_dats_y}>{eate.questions_answer}</div>
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
export default connect(mapStateToProps, mapDisaptchToProps)(Classify)
