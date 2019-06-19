import React, { Component } from 'react';
import styles from './children.scss'
import { connect } from 'dva';
import './children.scss';

class Classify extends Component {
    constructor(props) {
        super()
        this.state = {
            // obj:[]
            examqueas: []
        }
    }
    componentDidMount() {
        // console.log((window.location.hash).split('=')[1])

        this.props.examChild((window.location.hash).split('=')[1])
        // this.setState({
        //     obj: window.localStorage.str
        // })
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps.add.examchildlist.questions[0])
        this.setState({
            examqueas: newProps.add.examchildlist.questions
        })
    }
    render() {
        // let eate = JSON.parse(window.localStorage.tre)
        let { examqueas } = this.state
        console.log(examqueas)
        return (
            <div className={styles.wrap_y}>
                <div className={styles.exam_y}>试卷详情</div>
                <div className={styles.wrap_con_y}>
                    <div className={styles.wrap_con_left_y}>
                        {
                            examqueas && examqueas.map((item, i) => {
                                // console.log(item.title)
                                return <div key={i}>
                                    <div className={styles.wrap_con_left_content1_y}>
                                        <div className={styles.con_left_content1_title_y}>{item.title}</div>
                                        <div className={styles.con_left_content1_title_questions_stem_y}>{item.questions_stem}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className={styles.wrap_con_right_y}>

                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        //试题详情
        examChild(values) {
            console.log(values)
            dispatch({
                //命名空间+异步操作名字
                type: 'add/examsChild',
                values
            })
        },
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Classify)
