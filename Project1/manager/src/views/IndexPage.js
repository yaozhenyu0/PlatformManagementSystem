
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { createPublicKey } from 'crypto';
import React,{Component} from 'react';
import { Script } from 'vm';

class IndexPage extends Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.box}>
            <Form className="login-form">
            <div className={styles.username}>
                <Form.Item>
                  {
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />
                  }
                </Form.Item>
                <Form.Item>
              {
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              }
            </Form.Item>
            </div>
            
            <Form.Item>
              <div className={styles.left}>
                 {<Checkbox>记住密码</Checkbox>}
              </div>
              <div className={styles.right}>
                  <a className="login-form-forgot" href="">
                    忘记密码
                  </a>
              </div>
                  <Button type="primary" htmlType="submit" className={styles.btn} onClick={this.handleSubmit.bind(this)}>
                    登陆
                  </Button>
             
            </Form.Item>
          </Form>
        </div>
      </div>
      );
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }
}
IndexPage.propTypes = {
  
};

export default connect()(IndexPage);
