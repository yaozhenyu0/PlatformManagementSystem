import React, { Component } from 'react';
import styles from './addClass.scss'
import { connect } from 'dva';
import './addClass.scss';

class Classify extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(newProps) {

    }
    render() {

        return (
            <div className={styles.wrap_y}>
                <div className={styles.exam_y}>试卷详情</div>

            </div >
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        //试题详情
        // examChild(values) {
        //     console.log(values)
        //     dispatch({
        //         //命名空间+异步操作名字
        //         type: 'add/examsChild',
        //         values
        //     })
        // },
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Classify)
