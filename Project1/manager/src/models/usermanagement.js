import { Adduser } from '@/services'
import { Adduserid } from '@/services'
import { Addview } from '@/services'
import { Addviewid } from '@/services'
import { Showrank } from '@/services'
import { Addrank } from '@/services'
import { Addus } from '@/services'

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

            let datas=yield call(Adduserid)//添加用户--身份id2
            yield put({type:'addUid',payload:datas.data})

            let viewdata=yield call(Addview)//添加身份设置api接口权限
            yield put({type:'addView',payload:viewdata.data})

            let addview=yield call(Addviewid)//添加视图接口权限
            yield put({type:'addViewid',payload:addview.data})

            let addrank=yield call(Addrank,payload)//添加身份
            console.log(addrank);
            yield put({type:'addRank',payload:addrank.data})
            
            let addus=yield call(Addus,payload);//添加用户
            console.log(addus)


            let showrank=yield call(Showrank)//展示身份数据
            console.log(showrank)
        },
        
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
        addRank(state, action) {
            return { ...state, rankdata: action.payload};
        },
    }
}




