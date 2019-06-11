import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import styles from './index.css';

class LoginPage extends Component {
    componentDidMount(){
        let {login} = this.props;
        login({
            user_name: 'chenmanjie',
            user_pwd: 'Chenmanjie123!'
        });
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div className={styles.wrap_y}>
        <div className={styles.operation_y}>
          <Form onSubmit={this.handleSubmit} className="login-form" className={styles.inp_y}>
            <Form.Item>{
                getFieldDecorator('username', {
                  validateTrigger:"onInput",
                  rules: 
                    [{ required: true, message: '请正确输入账号!' }],
              })(
                  <Input
                    className={styles.inp_ant1_y}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入账号"
                  />)}
            </Form.Item>
            <Form.Item>{
                getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入正确密码!' }],
                  })(
                  <Input
                    className={styles.inp_ant_y}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)}
                <a className="login-form-forgot" href="">忘记密码</a>
            </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.btn_y} className="login-form-button">登陆</Button>
          </Form>
        </div>
      </div>
        )
        
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    };
}


const mapStateToProps = state =>{
    console.log('state...',state);
    return {}
}
const mapDisaptchToProps = dispatch =>{
    return {
        login(payload){
            dispatch({
                type:'user/login',
                payload
            })
        }
    }
}

LoginPage.propTypes = {
};

export default connect(mapStateToProps,mapDisaptchToProps)(Form.create({})(LoginPage))