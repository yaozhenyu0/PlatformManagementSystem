import { Studentdata } from '@/services'
import { Studentnum } from '@/services'
import { Studentclass } from '@/services'
import { Studentdel } from '@/services'

export default {
    //命名空间
    namespace: 'Studentmanagement',

    //模块内部的状态
    state: {
    },

    // 异步操作
    effects: {
        *questionsdata({ payload }, { call, put }) {//获取班级数据
            let data=yield call(Studentdata,payload)
            yield put({type:'studentdatas',data:data.data})
        },
        *questionsnum({ payload }, { call, put }) {//获取教室号数据
            let datanum=yield call(Studentnum,payload)
            yield put({type:'studentnums',datas:datanum.data})
        },
        *questionsclass({ payload }, { call, put }) {//获取班级名
            let dataclass=yield call(Studentclass,payload)
            yield put({type:'studentclass',datas:dataclass.data})
        },
         *questionsdel({ payload }, { call, put }) {//删除学生
            let classdeldata=yield call(Studentdel,payload)
            yield put({type:'classdel',play:classdeldata.data})
        },
    },
    // 同步操作
    reducers: {
        studentdatas(state, action) {
            return { ...state, data: action.data };
        },
        studentnums(state, action) {
            return { ...state, datanum: action.datas };
        }, 
        studentclass(state, action) {
            return { ...state, dataclass: action.datas };
        },
        classdel(state, action) {
            return { ...state, deldata: action.play };
        },
    },
}