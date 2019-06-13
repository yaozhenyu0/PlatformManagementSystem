import {Add} from '../services/index'

export default {
    // 命名空间
    namespace: 'classify',
  
    // 模块内部的状态
    state: {},
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
  
    // 异步操作
    effects: {
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
      *questions({ payload }, { call, put}){
        console.log(33)
          let data=yield call(Add)
          console.log(data)
        yield put({type:'clss',cldata:data.data})
      }
    },
  
    // 同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      clss(state,action){
        return { ...state, data:action.cldata };
      }
    },
  
  };
  