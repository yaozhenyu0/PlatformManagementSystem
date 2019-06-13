import React, { Component } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import './Type.scss'
import { connect } from 'dva';
const columns = [
    {
        title: '类型ID',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: '类型名称',
        dataIndex: 'age',
    },
    {
        title: '操作',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: '774318-730z8m',
        age: '简答题'
    },
    {
        key: '2',
        name: 'br9d6s-wh46i',
        age: '代码阅读题'
    },
    {
        key: '3',
        name: 'fwf0t-wla1q',
        age: '代码补全'
    },
    {
        key: '4',
        name: 'n66k4n-i9zpen',
        age: '修改bug'
    },
    {
        key: '5',
        name: 'v8i73-r9oai',
        age: '手写代码'
    }
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class Typeexam extends Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
               
                <h4 style={{padding:'28px 25px',fontSize:'18px'}}>试题分类</h4>
                <div style={{width:'100%',height:'300px',marginLeft:'20px'}}>
                <Button type="primary">+ 添加类型</Button>
                <Table columns={columns} dataSource={data} size="middle" />
                </div>
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props)
        this.props.examTypes()
    } 
}

const mapStateToProps = state => {
    console.log(state)
    return {...state.user}
  }
  
  const mapDisaptchToProps = dispatch => {
    return {
    examTypes() {
        dispatch({
          type: '/type/examTypes',
        })
      }
    }
  }
  export default connect(mapStateToProps, mapDisaptchToProps)(Typeexam);