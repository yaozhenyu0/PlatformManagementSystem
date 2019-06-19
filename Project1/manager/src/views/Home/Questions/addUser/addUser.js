import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './addUser.scss';
import { Button ,Form,Input,Select,message} from 'antd';

const { Option } = Select;

function UserIndex(props){
    //添加用户的change事件的初始值
    let [identity_id,UpChangeid]=useState("")
    useEffect(()=>{
        props.Edit()//选择身份id
        props.Edits()//选择身份id2
        props.Editapi()//添加身份设置api接口权限
        props.Editview()//添加视图接口权限   
    },[]);
    useEffect(()=>{//添加用户提示
        if(props.addusdata){
            message.info(props.addusdata)
        }
    },[props.a]);
    useEffect(()=>{//添加身份提示
        if(props.rankdata){
            message.info(props.rankdata)
        }
    },[props.b])
    useEffect(()=>{//添加api接口权限
        if(props.addportdata){
            message.info(props.addportdata)
        }
    },[props.c])
    useEffect(()=>{//添加视图接口权限
        if(props.dataval){
            message.info(props.dataval)
        }
    },[props.d]) 
    useEffect(()=>{//添加视图接口权限
        if(props.contval){
            message.info(props.contval)
        }
    },[props.f])
    useEffect(()=>{//给身份设定视图权限
        if(props.data){
            message.info(props.data)
        }
    },[props.g])
    //form表单提交按钮
    let handleSubmitOne=e=>{
        
    }
    //添加用户
    let HandAdduser=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            let obj={}
            obj.user_name=values.user_Null
            obj.user_pwd=values.pwd
            obj.identity_id=identity_id
             props.Edituserof(obj) 
        });
    }
    //更新用户信息
    let HandEdit=e=>{
        e.preventDefault();
//     props.form.validateFields((err, values) => {
//         console.log(values)
//         let obj={}
//         obj.username=JSON.parse(values.userid_top)
//         obj.pwd=JSON.parse(values.pwd)
//         obj.user_Child=JSON.parse(values.user_Child)
//         obj.userid_Child=JSON.parse(values.userid_Child)
//         console.log(obj)
//          props.Editedit(obj) 
//     });
  }

     //添加身
    let addiDentity=(e)=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            props.Editsf({
                identity_text:values.identity_Name
            });
        });
    }
    //添加api接口权限
    let addapicont=(e)=>{
        e.preventDefault();
        props.form.validateFields((err,values)=>{
            let obj={};
            obj.api_authority_text=values.Permission_Name,
            obj.api_authority_url=values.Permission_Url,
            obj.api_authority_method=values.Permission_method
            props.Editapiport(obj)
        })
    }
    //添加视图权限
    let Changeview=(e)=>{
        e.preventDefault();
      props.form.validateFields((err,values)=>{
       let val=JSON.parse(values.view)
       props.Editviewport({view_authority_text:val.view_authority_text,view_id:val.view_id})
   })
}

    //添加身份设定api权限
    let handlesf=(e)=>{
        e.preventDefault();
        props.form.validateFields((err,values)=>{
            let obj={}
            obj.identity=JSON.parse(values.Api_port)
            obj.authority=JSON.parse(values.identity)
            props.Editdatas(obj)
        })
    }
    //给身份设定视图权限
    let handleLast=(e)=>{
        e.preventDefault();
        props.form.validateFields((err,values)=>{
            let obj={}
            obj.view=JSON.parse(values.View_dentity)
            obj.ids=JSON.parse(values.id_dentity)
            props.Editlast(obj)
        })
    }
    //添加用户的change事件
    let ChangeIdentityid=(value)=>{
        UpChangeid(identity_id=value)
    }
    
    //重置按钮
  let handleReset=e=>{
      props.form.resetFields()
  }
  let [showVal,upShowVal]=useState(false);
  let [userVal,upShowuser]=useState(true);
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmitOne} className={styles.main}>
       <h2 className={styles.title}>添加用户</h2>
        <div className={styles.content}>
            {/* 第一个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}>
                    <Button  className={styles.color} onClick={()=>{
                        upShowVal(false);
                        upShowuser(true)
                    }} >
                        添加用户
                    </Button>
                    <Button onClick={()=>{
                    upShowVal(true);
                    upShowuser(false);
                    }} >
                    更新用户
                    </Button>
                </div>
            {showVal?<div className={styles.upUser}>
                        <Form.Item>
                            {getFieldDecorator('userid_top', {
                                rules: [{ required: true, message: "身份id是必须得" }],
                                initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }}>
                                    {
                                        props.datasid&&props.datasid.map((item,index)=>{
                                        return <Option key={item.user_id} value={JSON.stringify(item)}>{item.user_name}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('user_Child')(
                                <Input
                                placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd')(
                                <Input
                                placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userid_Child', {
                                rules: [{ required: true, message: "身份id是必须得" }],
                                initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }}>
                                    {
                                       props.datas&&props.datas.map((item,index)=>{
                                        return <Option key={item.identity_id} value={JSON.stringify(item)}>{item.identity_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" onClick={HandEdit}>
                            确定
                        </Button>
                        <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                        </Button>
                    </div>:null}
            {userVal?<div className={styles.upUser}>
                        <Form.Item>
                            {getFieldDecorator('user_Null',)(
                                <Input
                                placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd',)(
                                <Input
                                placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userid_Null', {
                                 rules: [{ required: true, message: "身份id是必须得" }],
                                 initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }} onChange={ChangeIdentityid}>
                                 {
                                       props.datas&&props.datas.map((item,index)=>{
                                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" onClick={HandAdduser}>
                            确定
                        </Button>
                        <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                        </Button>
                    </div>:null}
            </div>
            {/* 第二个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加身份</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('identity_Name', 
                        )(
                            <Input
                            placeholder="请输入身份名称"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={addiDentity}>
                            确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                    </Button>
                </div>
            </div>
            {/* 第三个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加api接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('Permission_Name', 
                            )(
                            <Input
                            placeholder="请输入权限名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Permission_Url', 
                            )(
                            <Input
                            placeholder="请输入权限url"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Permission_method', 
                           )(
                            <Input
                            placeholder="请输入权限方法"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={addapicont}>
                            确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                    </Button>
                </div>
            </div>
            {/* 第四个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加视图接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('view', {
                            rules: [{ required: true, message: "视图是必须得" }],
                            initialValue: "请选择视图"
                        })(
                        <Select style={{ width: 140 }} >

                            {
                                props.dataviewid&&props.dataviewid.map((item,index)=>{
                                    return <Option key={item.identity_view_authority_relation_id} value={JSON.stringify(item)}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={Changeview}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
            {/* 第五个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button className={styles.color}>给身份设置api接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('identity', {
                            rules: [{ required: true, message: "身份设置api是必须得" }],
                            initialValue: "请选择身份设置api"
                        })(
                        <Select style={{ width: 140 }}>
                                {
                                    props.datas&&props.datas.map((item,index)=>{
                                    return <Option key={item.identity_id} value={JSON.stringify(item)}>{item.identity_text}</Option>
                                    })
                                }

                           
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Api_port', {
                            rules: [{ required: true, message: "api是必须得" }],
                            initialValue: "请选api"
                        })(
                        <Select style={{ width: 140 }}>

                            {
                                props.dataview&&props.dataview.map((item,index)=>{
                                return <Option key={item.identity_api_authority_relation_id} value={JSON.stringify(item)}>{item.api_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handlesf}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
            {/* 第六个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                        <Button  className={styles.color}>给身份设置视图权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('View_dentity', {
                            rules: [{ required: true, message: "身份ID是必须得" }],
                            initialValue: "请选择身份id"
                        })(
                        <Select style={{ width: 140 }}>

                                    {
                                       props.datas&&props.datas.map((item,index)=>{
                                        return <Option key={item.identity_id} value={JSON.stringify(item)}>{item.identity_text}</Option>
                                        })
                                    }
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('id_dentity', {
                            rules: [{ required: true, message: "视图权限id是必须得" }],
                            initialValue: "请选视图权限id"
                        })(
                        <Select style={{ width: 140 }}>
                            {
                                props.dataviewid&&props.dataviewid.map((item,index)=>{
                                    return <Option key={item.identity_view_authority_relation_id} value={JSON.stringify(item)}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handleLast}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
        </div>
    </Form>

  )
  
}
//props的类型检查
UserIndex.propTypes={

}
//props的默认值
UserIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.usermanagement
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      //身份id
      Edit(payload){
        dispatch({
          type:"usermanagement/adduser",//命名空间+异步名字
          payload
        })
      },
      //身份id2
      Edits(payload){
        dispatch({
          type:"usermanagement/adduserid",//命名空间+异步名字
          payload
        })
      },
      //添加身份设置api接口权限
      Editapi(payload){
        dispatch({
          type:"usermanagement/addapi",//命名空间+异步名字
          payload
        })
      },
       //添加视图接口权限
       Editview(payload){
        dispatch({
          type:"usermanagement/addview",//命名空间+异步名字
          payload
        })
      },
      //添加用户
      Edituserof(payload){
        dispatch({
          type:"usermanagement/adduserof",//命名空间+异步名字
          payload
        })
      },
       //添加身份
       Editsf(payload){
        dispatch({
          type:"usermanagement/addsf",//命名空间+异步名字
          payload
        })
      },
      //添加api接口权限
      Editapiport(payload){
          dispatch({
              type:"usermanagement/addapiport",
              payload
          })
      },
      //添加视图权限
      Editviewport(payload){
        dispatch({
            type:"usermanagement/viewport",
            payload
        })
    },
    //添加身份设定api接口权限
    Editdatas(payload){
      dispatch({
          type:"usermanagement/addsfapi",
          payload
      })
  },
  //给身份设定视图权限
  Editlast(payload){
    dispatch({
        type:"usermanagement/addlast",
        payload
    })
},
//更改用户信息
   Editedit(payload){
       console.log(payload)
        dispatch({
            type:"usermanagement/addlast",
            payload
        })
    }
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
