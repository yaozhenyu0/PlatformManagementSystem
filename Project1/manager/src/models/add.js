import { Add } from '@/services'
import { Protion } from '@/services'
import { ProtionType } from '@/services'
export default {
    //命名空间
    namespace: 'add',

    //模块内部的状态
    state: {
        isLogin: 0
    },

    // 异步操作
    effects: {
        *questions({ payload }, { call, put }) {
            let data = yield call(Add)
            let datas = yield call(Protion)
            let datass = yield call(ProtionType)
            // console.log(datass)
            yield put({ type: 'add', addlist: data.data })
            yield put({ type: 'protion', protion: datas.data })
            yield put({ type: 'protiontype', protiontype: datass.data })
        },
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    // 同步操作
    reducers: {
        add(state, action) {
            return { ...state, addlist: action.addlist };
        },
        protion(state, action) {
            return { ...state, protion: action.protion };
        },
        protiontype(state, action) {
            return { ...state, protiontype: action.protiontype };
        },
    },
}




