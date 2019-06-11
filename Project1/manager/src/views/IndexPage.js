// import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react'

class IndexPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {

    return (
      <div className={styles.wrap_y}>
        <div className={styles.operation_y}>
          <Form onSubmit={this.handleSubmit} className="login-form" className={styles.inp_y}>
            <Form.Item>
              <Input
                className={styles.inp_ant1_y}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入账号"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className={styles.inp_ant_y}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <div className={styles.pwd_y}>
                <Checkbox>记住密码</Checkbox>
                <a className="login-form-forgot" href="">忘记密码</a>
              </div>
            </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.btn_y} className="login-form-button">登陆</Button>
          </Form>
        </div>
      </div>
    );
  }

}

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

// ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);


// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

IndexPage.propTypes = {
};

export default connect()(Form.create({})(IndexPage));



