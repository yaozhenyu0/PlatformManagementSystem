import { Add } from '@/services'
import { Protion } from '@/services'
import { ProtionType } from '@/services'
import { UserOf } from '@/services'
import { addTrys } from '@/services'
import { addsExam } from '@/services'
import { ExamList } from '@/services'
import { ExamChild } from '@/services'

export default {
    //命名空间
    namespace: 'add',

    //模块内部的状态
    state: {
        isLogin: 0
    },

    // 异步操作
    effects: {
        //考试类型
        *questions({ payload }, { call, put }) {
            let data = yield call(Add)
            yield put({ type: 'addS', addlist: data.data })
        },
        //试题类型
        *protiontype({ payload }, { call, put }) {
            let protiontype = yield call(ProtionType)
            yield put({ type: 'protiontypeS', protiontype: protiontype.data })
        },

        //课程类型
        *protion({ payload }, { call, put }) {
            let protion = yield call(Protion)
            yield put({ type: 'protionS', protion: protion.data })
        },
        //添加试题
        *questionsadd({ payload }, { call, put }) {
            // console.log(payload)
            let addtrys = yield call(addTrys, payload)
            // console.log(addtrys)
            yield put({ type: 'addtrys', addtrys: addtrys.code === 1 ? "添加成功" : "添加失败" })

        },
        //当前用户信息
        *userof({ payload }, { call, put }) {
            let data = yield call(UserOf)
            // console.log(data)
            yield put({ type: 'userofS', userof: data.data })
        },
        //添加考试
        *addExams({ payload }, { call, put }) {
            let data = yield call(addsExam, payload)
            console.log(payload)
            console.log(data)
            yield put({ type: 'addSexams', addSexam: data.data })
        },
        // 试卷列表
        *examlist({ payload }, { call, put }) {
            let data = yield call(ExamList, payload)
            // console.log(payload)
            // console.log(data)
            yield put({ type: 'examsList', examList: data })
        },
        // 试题详情
        *examsChild({ values }, { call, put }) {
            let data = yield call(ExamChild, values)
            console.log(values)
            console.log(data)
            yield put({ type: 'examChilds', examsChilds: data })
        },

        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    // 同步操作
    reducers: {
        //考试类型
        addS(state, action) {
            // console.log(action.addlist)
            return { ...state, addlist: action.addlist };
        },
        //课程类型
        protionS(state, action) {
            // console.log(action.protion)
            return { ...state, protions: action.protion };
        },
        //试题类型
        protiontypeS(state, action) {
            // console.log(action.protiontype)
            return { ...state, protiontypes: action.protiontype };
        },
        //当前用户信息
        userofS(state, action) {
            // console.log(action.userof.identity_id)
            return { ...state, userofs: action.userof.identity_id };
        },
        //添加试题
        addtrys(state, action) {
            // console.log(action)
            return { ...state, addtrys: action };
        },
        //添加考试
        addSexams(state, action) {
            // console.log(action)
            return { ...state, addSexamS: action.addSexam };
        },
        //试卷列表
        examsList(state, action) {
            // console.log(action)
            return { ...state, examlist: action.examList };
        },
        //试ti详情
        examChilds(state, action) {
            // console.log(action)
            return { ...state, examchildlist: action.examsChilds.data };
        },
    },
}




