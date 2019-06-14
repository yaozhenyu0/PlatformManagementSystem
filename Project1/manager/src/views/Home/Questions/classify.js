
import { Row, Col, Button,Modal } from 'antd';
import { connect } from 'dva';
import './classify.scss';
import styles from './classify.scss';
import React, { useState,useEffect } from 'react'
// import { getToken, setToken } from '../../../utils/user'


function Classify(props) {
    let { quest } = props
    useEffect(function () {
        quest()
    }, [])
    const [visible,setVisible]=useState(false)

    
//    function showModal(){
//     setState({
//         setVisible: true,
//         });
//     };

//   function hideModal(){
//     setState({
//         setVisible: false,
//     });
//   };


    return (
        <div className={styles.wrap_y}>
            <div className={styles.classify_y}>试题分类</div>
            <div className={styles.content_y}>
            <div>
        <Button type="primary" onClick={console.log(22)}>
          添加类型
        </Button>
        <Modal
          title="Modal"
          visible={useState.visible}
          onOk={()=>setVisible(visible)}
          onCancel={()=>setVisible(visible)}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
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