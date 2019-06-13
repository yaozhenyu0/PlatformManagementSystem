
import { Row, Col, Button } from 'antd';
import { connect } from 'dva';
import './classify.scss';
import styles from './classify.scss';
import React, { useEffect } from 'react'
// import { getToken, setToken } from '../../../utils/user'


function Classify(props) {
    let { quest } = props
    useEffect(function () {
        quest()
    }, [])

    return (
        <div className={styles.wrap_y}>
            <div className={styles.classify_y}>试题分类</div>
            <div className={styles.content_y}>
                <div className={styles.btn_y}><Button type="primary" icon="plus">添加类型</Button></div>
                <div className={styles.content_top_y}>
                    <Row>
                        <Col span={8}>类型ID</Col>
                        <Col span={8}>类型名称</Col>
                        <Col span={8}>操作</Col>
                    </Row>
                </div>
                {
                    props.questtion.data.map((item, index) => {
                        return < div key={index} className={styles.conice_y} >
                            <Row>
                                <Col span={8}>{item.questions_type_id}</Col>
                                <Col span={8}>{item.questions_type_text}</Col>
                                <Col span={8}>{item.questions_type_sort}</Col>
                            </Row>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        quest() {
            dispatch({
                type: 'questtion/quests'
            })
        }

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Classify)