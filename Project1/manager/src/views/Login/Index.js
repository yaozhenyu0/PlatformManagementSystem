
import { connect } from 'dva';
import styles from './Index.scss';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import 'antd/dist/antd.css';
import React,{Component,useEffect} from 'react';

function IndexPage(props){
 // 判断是否登陆
 useEffect(()=>{
  if (props.isLogin === 1){
    // 1.提示登陆成功
    message.success('登陆成功');
    // 2.存储cookie
    // 3.跳转主页面
    console.log('props.history', props.history);
    let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
    props.history.replace(pathName);
  }else if(props.isLogin === -1){
    // 登陆失败
    message.error('用户名或密码错误')
  }
}, [props.isLogin]);

 let handleSubmit = e => {
    e.preventDefault();
   props.form.validateFields((err, values) => {
      if (!err) {
        //调登录接口
        props.login({
          user_name:values.username,
          user_pwd:values.password
        })
      }
    });
  };

  // render() {
    const { getFieldDecorator } =props.form;
    return (
      <div className={styles.box}>
      <div className={styles.wrap}>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            validateTrigger:'onBlur',
            rules: [{required:true,message:'请输入正确的用户名'}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            validateTrigger:'onBlur',
            rules: [{ pattern: /^[A-z]\w{5,11}$/, message: '密码格式有误!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div> 
    );
  }
// }
//props的默认值
IndexPage.propTypes = {
  
};

const mapStateToProps=state=>{
  return{
    ...state.user
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    login(payload){
      dispatch({
        type:'user/login',
        payload
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(IndexPage));
