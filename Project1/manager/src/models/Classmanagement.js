import { Classdata } from '@/services'
import { Classdel } from '@/services'
import { Classadd } from '@/services'

export default {
    //命名空间
    namespace: 'Classmanagement',

    //模块内部的状态
    state: {
    },

    // 异步操作
    effects: {
        *questions({ payload }, { call, put }) {//获取班级数据
            let data=yield call(Classdata,payload)
            yield put({type:'cldata',data:data})
        },
        *questionsdel({ payload }, { call, put }) {//删除班级
            let deldata=yield call(Classdel,payload)
            yield put({type:'delclass',deldata:deldata.code===1?'删除班级成功':'删除班级失败'})
        },
        *questionsadd({ payload }, { call, put }) {//添加班级
            console.log(payload)
            let adddata=yield call(Classadd,payload) 
            console.log(adddata)
            yield put({type:'addclass',adddata:adddata.code===1?'添加班级成功':'添加班级失败'})
        },
    },
    // 同步操作
    reducers: {
        cldata(state, payload) {
            return { ...state, data: payload.data.data };
        },
        delclass(state, payload) {
            return { ...state, del: payload.deldata };
        },
        addclass(state, payload) {
             console.log(payload)
            // return { ...state, add: payload.deldata };
        },
    },
}
