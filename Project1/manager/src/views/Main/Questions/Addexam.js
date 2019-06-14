import React, { Component } from 'react'
import { Input, Select } from 'antd';
import Editor from 'for-editor'
import { connect } from 'dva';
import './Add.scss'
const { Option,OptGroup } = Select;

class Addexam extends Component {
constructor(){
    super()
    this.state={
        value:'',
        arrtype:[],
        select1:[],
        statearr:[]
    }
}
    
    componentDidMount(){
        this.props.examTypes()
    }
    componentWillReceiveProps(newProps){
        console.log(newProps.data)
        this.setState({
            statearr:newProps.data
        })
    }
    render() {
        let { value, value1,select1,statearr} = this.state
        return (
            <div className="content">
                <h4 style={{padding:'28px 25px',fontSize:'18px'}}>添加试题</h4>
                <div className="el_conent">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input size="large" placeholder="请输入题目标题，不超过20个字" value={value1} allowClear onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            value1: e.target.value
                        })
                    }} />
                    <p style={{ marginTop: '20px' }}>题目主题</p>
                    <Editor value={value} onChange={this.handleChange.bind(this)} />
                    <p style={{ marginTop: '20px' }}>请选择考试类型：</p>
                    <div>
                    <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                        {
                        statearr.map(el=>{
                            return <Option value={el.exam_name}>{el.exam_name}</Option>
                            
                        })
                        }
                        </Select>  
                    </div>
                    
                </div>
            </div>
        )
    }
    select1=(value)=>{
        console.log(`selected ${value}`);
    }
    handleChange=(value)=>{
        console.log(`selected ${value}`);
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {...state.classify}
  }
  
  const mapDisaptchToProps = dispatch => {
    return {
    examTypes() {
        dispatch({
          type: 'classify/questions'
        })
      }
    }
  }
export default connect(mapStateToProps, mapDisaptchToProps)(Addexam);
