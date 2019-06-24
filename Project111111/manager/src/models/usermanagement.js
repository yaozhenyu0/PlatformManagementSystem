import { Adduser } from '@/services'
import { Adduserid } from '@/services'
import { Addview } from '@/services'
import { Addviewid } from '@/services'
import { Addus } from '@/services'
import { Addrank } from '@/services'
import { Addapi } from '@/services'
import { Addviewport } from '@/services'
import { AddSfapi } from '@/services'
import { AddLast } from '@/services'
// import { Editedit } from '@/services'

export default {
    //命名空间
    namespace: 'usermanagement',

    //模块内部的状态
    state: {
    },

    // 异步操作
    effects: {
        //添加用户
        *adduser({ payload }, { call, put }) {
            let data = yield call(Adduser)//添加用户--身份id1
            yield put({ type: 'addU', payload: data.data })
        },
        *adduserid({ payload }, { call, put }) {//添加用户--身份id2
            let datas=yield call(Adduserid)
            yield put({type:'addUid',payload:datas.data})
        },
        *addapi({ payload }, { call, put }) {//添加身份设置api接口权限
            let viewdata=yield call(Addview)
            yield put({type:'addView',payload:viewdata.data})
        },
        *addview({ payload }, { call, put }) {//添加视图接口权限
            let addview=yield call(Addviewid)
            yield put({type:'addViewid',payload:addview.data})
        },
        *adduserof({ payload }, { call, put }) {//添加用户 
            let addus=yield call(Addus,payload);
            yield put({type:'adduof',addus:addus.code===1?'用户添加成功':'用户添加失败'})
        },
        *addsf({ payload }, { call, put }) {//添加身份
            let addrank=yield call(Addrank,payload)
            yield put({type:'addRank',addrank:addrank.code===1?'身份添加成功':'身份添加失败'})
        },
        *addapiport({ payload }, { call, put }) {//添加api接口权限
            let addaport=yield call(Addapi,payload)
            yield put({type:'addApiport',addaport:addaport.code===1?'api接口权限添加成功':'api接口权限添加失败'})
        },
         *viewport({ payload }, { call, put }) {//添加视图权限
            let addviewdata=yield call(Addviewport,payload)
            yield put({type:'viewda',addviewdata:addviewdata.code===1?'视图接口权限添加成功':'视图权限重复'})
        },
        *addsfapi({ payload }, { call, put }) {//添加身份设定api接口权限
            let sfdata=yield call(AddSfapi,payload)
            yield put({type:'addcont',sfdata:sfdata.code===1?'身份权限添加成功':'身份权限重复'})
        },
        *addlast({ payload }, { call, put }) {//添加身份设定api接口权限
            let lastdata=yield call(AddLast,payload)
            console.log(lastdata.code)
            yield put({type:'lastcont',lastdata:lastdata.code===1?'权限添加成功':'身份权限重复'})
        },
        // *addlast({ payload }, { call, put }) {//更改用户信息
        //     let editval=yield call(Editedit,payload)
        //     console.log(editval)
        //     // yield put({type:'lastcont',lastdata:lastdata.code===1?'权限添加成功':'身份权限重复'})
        // }
    },

    // 同步操作
    reducers: {
        //添加用户
        addU(state, action) {
            return { ...state, datas: action.payload};
        },
        addUid(state, action) {
            return { ...state, datasid: action.payload};
        },
        addView(state, action) {
            return { ...state, dataview: action.payload};
        },
        addViewid(state, action) {
            return { ...state, dataviewid: action.payload};
        },
        adduof(state,action){
            return {...state,addusdata:action.addus,a:Math.floor(Math.random()*10)}
        }, 
        addRank(state, action) {
            return { ...state, rankdata: action.addrank,b:Math.floor(Math.random()*10)};
        },
        addApiport(state, action) {
            return { ...state, addportdata: action.addaport,c:Math.floor(Math.random()*10)};
        },
        viewda(state, action) {
            return { ...state, dataval: action.addviewdata,d:Math.floor(Math.random()*10)};
        },
        addcont(state, action) {
            return { ...state, contval: action.sfdata,f:Math.floor(Math.random()*10)};
        },
        lastcont(state, action) {
            return { ...state, data: action.lastdata,g:Math.floor(Math.random()*10)};
        }
    }
}




