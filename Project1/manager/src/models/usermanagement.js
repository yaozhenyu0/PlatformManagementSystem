import { Adduser } from '@/services'
import { Adduserid } from '@/services'
import { Addview } from '@/services'
import { Addviewid } from '@/services'
import { Addus } from '@/services'
import { Addrank } from '@/services'
import { Addapi } from '@/services'
import { Addviewport } from '@/services'
import { AddSf } from '@/services'
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
            console.log(addaport)
            yield put({type:'addApiport',addaport:addaport.code===1?'接口权限添加成功':'接口权限添加失败'})
        },
         *viewport({ payload }, { call, put }) {//添加视图权限
            console.log(payload)
            let tt=yield call(Addviewport,payload)
            console.log(tt)
        },
        *addsf({ payload }, { call, put }) {//添加身份设定api接口权限
            console.log(payload)
            let sfdata=yield call(AddSf,payload)
        }
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
        }
    }
}




