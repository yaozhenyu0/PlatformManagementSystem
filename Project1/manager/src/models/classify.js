import { Question } from '@/services'//试题分类
import { QuestionAll } from '@/services'//添加试题

export default {
    //命名空间
    namespace: 'questtion',

    //模块内部的状态
    state: {
        data: []
    },

    // 异步操作
    effects: {
        *quests({ payload }, { call, put }) {
            let data = yield call(Question)
            // console.log(data)
            yield put({
                type: 'save',
                data: data//返回的数据
            })
        },
        *questions({ payload }, { call, put }) {
            let data = yield call(QuestionAll, payload)
            console.log(payload)
            yield put({
                type: 'saveadd',
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
        saveadd(state, payload) {
            console.log(payload)
            return { ...state, data: payload.data };
        },
    },
}




