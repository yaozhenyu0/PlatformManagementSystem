import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import style from './add.scss'
import { Input, Select } from 'antd';
import Editor from 'for-editor'
import './add.scss'




class Add extends Component {

    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleChange(value) {
        this.setState({
            value
        })
    }



    render() {
        // 代码选择器
        const { value } = this.state

        // Select选择器
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div className={style.wrap}>
                <div className={style.shiTi}>添加试题</div>

                <div className={style.tiMu}>
                    <div>题目信息</div>
                    <div>题干</div>
                    <Input className={style.ipt} placeholder="请输入题目标题，不能超过20字" />

                    <div className={style.zhuTi}>题目主题</div>
                    <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />

                    <div>
                        <div>请选择考试类型</div>
                        <Select className={style.select} defaultValue="类型选择" style={{ width: 180 }} onChange={handleChange}>
                            <Option value="周考一">周考一</Option>
                        </Select>
                    </div>

                    <div>
                        <div>请选择课程类型</div>
                        <Select className={style.select} defaultValue="类型选择" style={{ width: 180 }} onChange={handleChange}>
                            <Option value="周考一">周考一</Option>
                        </Select>
                    </div>

                    <div>
                        <div>请选择题目类型</div>
                        <Select className={style.select} defaultValue="类型选择" style={{ width: 180 }} onChange={handleChange}>
                            <Option value="周考一">周考一</Option>
                        </Select>
                    </div>


                    <div className={style.xinXi}>答案信息</div>
                    <Editor height='auto' value={value} onChange={this.handleChange.bind(this)} />

                </div>

            </div>
        )
    }
}
export default Add