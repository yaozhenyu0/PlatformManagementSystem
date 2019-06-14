import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import React, { useEffect } from 'react'

import styles from './index.css';

function LoginPage(props) {
    let { login } = props;
    //判断是否登录
    useEffect(() => {
        if (props.isLogin === 1) {
            //提示登录成功
            message.success('登录成功')
            //本地存储

            //跳转主页面
            console.log(props)
            let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
            props.history.replace(pathName || '/');
            console.log(pathName)
            // props.history.replace(pathname)
        } else if (props.isLogin === -1) {
            //登录失败
            message.error('用户名或密码不正确')
        }
    }, [props.isLogin])

    //表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log(login)
            if (!err) {
                console.log('Received values of form: ', values);
                login({
                    user_name: values.username,
                    user_pwd: values.password
                })
            }
        });
    };

    //表单效验
    const { getFieldDecorator } = props.form;
    return (
        <div className={styles.wrap_y}>
            <div className={styles.operation_y}>
                <Form onSubmit={handleSubmit} className="login-form" className={styles.inp_y}>
                    <Form.Item>{
                        getFieldDecorator('username', {
                            validateTrigger: "onInput",
                            rules:
                                [{ required: true, message: '请正确输入账号!' }],
                        })(
                            <Input
                                className={styles.inp_ant1_y}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入账号"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>{
                        getFieldDecorator('password', {
                            rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确密码!' }],
                        })(
                            <Input
                                className={styles.inp_ant_y}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>{
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.btn_y} className="login-form-button">登陆</Button>
                </Form>
            </div>
        </div>
    )


}

// props的类型检查
LoginPage.propTypes = {

}
// props的默认值
LoginPage.defaultProps = {

}


const mapStateToProps = state => {
    console.log('state...', state);
    return { ...state.user }
}
const mapDisaptchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: 'user/login',
                payload
            })
            console.log(payload)
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create({})(LoginPage))