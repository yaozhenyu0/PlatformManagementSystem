import { Protionexam } from '@/services'
import { Protionexamtype } from '@/services'
import { Protionexamclass } from '@/services'
import { ProtionAll } from '@/services'
import { inQuires } from '@/services'


export default {
    //命名空间
    namespace: 'exam',

    //模块内部的状态
    state: {
        isLogin: 0,
        data: []
    },

    // 异步操作
    effects: {
        *questions({ payload }, { call, put }) {
            let data = yield call(Protionexam)
            let datas = yield call(Protionexamtype)
            let datass = yield call(Protionexamclass)
            let datasss = yield call(ProtionAll)
            // console.log(data)
            yield put({ type: 'exame', data: data })
            yield put({ type: 'Protionexamtype', Protionexamtype: datas })
            yield put({ type: 'Protionexamclass', Protionexamclass: datass })
            yield put({ type: 'ProtionAll', ProtionAll: datasss })
        },

        *inquire({ values }, { call, put }) {
            let data = yield call(inQuires, values)
            console.log(data)
            yield put({ type: 'inquirese', data: data })
        },
    },
    // 同步操作
    reducers: {
        exame(state, payload) {
            // console.log(payload.data.data)
            return { ...state, data: payload.data.data };
        },
        Protionexamtype(state, action) {
            // console.log(action.Protionexamtype)
            return { ...state, Protionexamtype: action.Protionexamtype.data };
        },
        Protionexamclass(state, action) {
            // console.log(action.Protionexamclass)
            return { ...state, Protionexamclass: action.Protionexamclass.data };
        },
        ProtionAll(state, action) {
            // console.log(action.ProtionAll.data)
            return { ...state, ProtionAll: action.ProtionAll.data };
        },

        inquirese(state, action) {
            // console.log(action.data.data)
            return { ...state, ProtionAll: action.data.data };
        },
    },
}




