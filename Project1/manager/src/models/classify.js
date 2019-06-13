import { Question } from '@/services'

export default {
    //命名空间
    namespace: 'questtion',

    //模块内部的状态
    state: {
        isLogin: 0,
        data: []
    },

    // 异步操作
    effects: {
        *quests({ payload }, { call, put }) {
            let data = yield call(Question)
            // console.log(data)
            yield put({
                type: 'save',
                data: data
            })
        },
    },

    // 同步操作
    reducers: {
        save(state, payload) {
            console.log(payload.data.data)
            return { ...state, data: payload.data.data };
        },
    },
}




