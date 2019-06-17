import { UserDisp } from '@/services'
import { UserDispData } from '@/services'
import { ApiData } from '@/services'
import { IdenApi } from '@/services'
import { viewData } from '@/services'
import { viewIden } from '@/services'

export default {
    //命名空间
    namespace: 'useroption',

    state: {

    },
    //异步操作
    effects: {
        *options({ payload }, { call, put }) {
            //用户数据
            let data = yield call(UserDisp, payload);
            // console.log(data);
            yield put({ type: 'userdisp', data: data.data })
        },

        *optionsData({ payload }, { call, put }) {
            //身份数据
            let data = yield call(UserDispData, payload);
            // console.log(data);
            yield put({ type: 'userdispData', data: data.data })
        },


        *apiPorts({ payload }, { call, put }) {
            //api接口权限
            let data = yield call(ApiData, payload);
            console.log(data);
            yield put({ type: 'apiUser', apiData: data.data })
        },
        *idenApi({ payload }, { call, put }) {
            //身份和api接口关系
            let data = yield call(IdenApi, payload);
            console.log(data);
            yield put({ type: 'idensApi', idenApi: data.data })
        },
        *dataview({ payload }, { call, put }) {
            //视图接口权限
            let data = yield call(viewData, payload);
            console.log(data);
            yield put({ type: 'viewDatas', viewsData: data.data })
        },
        *idenViews({ payload }, { call, put }) {
            //身份和视图权限关系
            let data = yield call(viewIden, payload);
            console.log(data);
            yield put({ type: 'viewsDatas', viewsidenData: data.data })
        },
    },

    //同步操作
    reducers: {
        //用户数据
        userdisp(state, action) {
            // console.log(action)
            return { ...state, data: action.data }
        },
        //用户数据
        userdispData(state, action) {
            // console.log(action)
            return { ...state, datas: action.data }
        },
        //api接口权限
        apiUser(state, action) {
            // console.log(action)
            return { ...state, dataApi: action.apiData }
        },
        //身份和api接口关系
        idensApi(state, action) {
            // console.log(action)
            return { ...state, apiIden: action.idenApi }
        },
        //视图接口权限
        viewDatas(state, action) {
            // console.log(action)
            return { ...state, viewdata: action.viewsData }
        },
        //身份和视图权限关系
        viewsDatas(state, action) {
            // console.log(action)
            return { ...state, viewIdenData: action.viewsidenData }
        },
    },
}




