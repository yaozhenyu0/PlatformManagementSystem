import React, { Component } from 'react';
import styles from './classmanage.scss'
import { Button, Input, Modal, Row, Col,Menu,Icon,message,Form,Select} from 'antd'
import { connect } from 'dva';
const {Option}=Select

class Classmanage extends Component {
    constructor() {
        super()
        this.state = {
            classdata:[],
            loading: false,
            visible: false,
        }
    }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {//点击提交
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 2000);

        this.props.form.validateFields((err, values) => {
            this.props.Classadd(values)
        })
      };
    
      handleCancel = () => {//点击取消
        this.setState({ visible: false });
      };
    

/////
    componentDidMount() {
        this.props.Classdata()
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            classdata:newProps.Classmanagement.data
        })
    }
    handeldel=(e)=>{//点击删除
          this.props.Classdel(e)
        //   this.props.Classdata()
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.wrap_y}>
                <p className={styles.title_y}>班级管理</p>
                <div className={styles.bottom_y}>
                    <div>
                    <div>
                    <div>
        <Button type="primary" onClick={this.showModal}>+  添加班级</Button>
       
        <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        okText="提交"
                        cancelText="取消"
                        onCancel={this.handleCancel}
                    >
                     <Form onSubmit={this.handleSubmit}>
                     <Form.Item>
                        <p>*班级名</p>
                        {getFieldDecorator('user_classname')
                       (<Input placeholder="请输入班级名"/>) 
                        }
                     </Form.Item>
                     <Form.Item>
                        <p>*教室号</p>
                        {getFieldDecorator('user_classnum')
                       (<Select
                            labelInValue
                            initialValue={{ key: '请选择教室号' }}
                            style={{ width: 120 }}
                        >
                            {
                              this.state.classdata.map((item, index) => {
                                    return <Option key={index} value={item.grade_id}>{item.room_text}</Option>
                                })
                            }
                        </Select>)}
                     </Form.Item>
                     <Form.Item>
                        <p>*课程名</p>
                        {getFieldDecorator('user_classke')
                       ( <Select
                            labelInValue
                            initialValue={{ key: '课程名' }}
                            style={{ width: 120 }}
                        >
                            {
                              this.state.classdata.map((item, index) => {
                                    return <Option key={index} value={item.grade_id}>{item.subject_text}</Option>
                                })
                            }
                        </Select>)}
                    </Form.Item>
                        </Form>
                    </Modal>

      </div>
            </div>

                    </div>
                    <div className={styles.content_top_y}>
                        <Row>
                            <Col span={8}>班级名</Col>
                            <Col span={8}>课程名</Col>
                            <Col span={8}>教室号</Col>
                            <Col span={8}>操作</Col>
                        </Row>
                    </div>
                    {
                        this.state.classdata.map((item, index) => {
                            return < div key={index} className={styles.conice_y} >
                                <Row>
                                    <Col span={8}>{item.grade_name}</Col>
                                    <Col span={8}>{item.subject_text}</Col>
                                    <Col span={8}>{item.room_text}</Col>
                                    <Col span={8}>
                                        <div  className={styles.cont}>
                                           <div className={styles.edit} onClick={this.showModal}>修改  |</div>
                                          
                                           <div className={styles.del} onClick={this.handeldel.bind(this,item)}>删除</div>
                                        </div>
                                    </Col>
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
    return { ...state }
}
const mapDisaptchToProps = dispatch => {
    return {
        Classdata() {//获取所有班级数据
            dispatch({
                type: 'Classmanagement/questions'
            })
        },
        Classdel(payload){//删除班级
            dispatch({
                type:'Classmanagement/questionsdel',
                payload
            })
        },
        Classadd(payload){//添加班级
            dispatch({
                type:'Classmanagement/questionsadd',
                payload
            })
        }

    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create({name:'register'})(Classmanage))