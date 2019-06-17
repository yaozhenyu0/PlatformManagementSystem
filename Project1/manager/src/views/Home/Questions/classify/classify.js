import React, { Component } from 'react';
import styles from './classify.scss'
import { Button, Input, Modal, Row, Col } from 'antd'
import { connect } from 'dva';
import './classify.scss'

class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            value: '',
            num: 0,
            list: [],
            obj:{}
        }
    }
    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    typeAdd = () => {
        this.setState({
            visible: true
        })
    };
    handleOk = e => {
        let { examadd } = this.props;
        console.log(this.state.value)
        examadd({ text: this.state.value, sort: Math.floor(Math.random() * 100) })
        this.setState({
            visible: false
        })
    };
    componentDidMount() {
        let { quest } = this.props
        quest()
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)

        this.setState({
            list: newProps.questtion.data
        })
    }
    render() {
        return (
            <div className={styles.wrap}>
                <p className={styles.title}>试题分类</p>
                <div className={styles.bottom}>
                    <div>
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
                            添加类型
                        </Button>
                        <Modal
                            title="创建新类型"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input placeholder="请输入类型名称" value={this.state.value}
                                onChange={(e) => { this.setState({ value: e.target.value }) }}
                            />
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
                        this.state.list.map((item, index) => {
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
        },
        examadd(payload) {
            console.log(payload)
            dispatch({ type: 'questtion/questions', payload })
        }

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Classify)
