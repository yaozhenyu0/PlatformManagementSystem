import { Classdata } from '@/services'
import { Classdel } from '@/services'
import { Classadd } from '@/services'
import { Classedit } from '@/services'

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
            let addval=yield call(Classadd,payload) 
            console.log(addval)
            yield put({type:'addclass',addval:addval.code===1?'添加成功':'添加失败'})
        },
        *questionsedit({ payload }, { call, put }) {//添加班级
            let editdata=yield call(Classedit,payload)
            // yield put({type:'addclass',adddata:adddata.code===1?'修改班级成功':'修改班级失败'})
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
            return { ...state, adddata: payload.addval };
        },
    },
}
