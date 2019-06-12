import {login} from '@/services'
import {setToken,getToken} from '@/utils/user'
import {routerRedux} from 'dva/router'

    
export default {
    // 命名空间
    namespace: 'example',
  
    // 模块内部的状态
    state: {
        isLogin:0
    },
  
    //路由跳转
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
         return history.listen(({pathname})=>{
            if(pathname.indexof('/login')===-1){
                if(!getToken()){
                    dispatch(routerRedux.replace({
                        pathname:`/login?redirect=${encodeURIComponent(pathname)}`
                    }))
                }
            }else{
                if(getToken()){
                    dispatch(routerRedux.replace({
                        pathname:`/`
                    }))
                }
            }
         })
      },
    },
  
    // 异步操作
    effects: {
      *login({ payload }, { call, put }) {  // eslint-disable-line
       let data=yield call(login,payload)

       //设置登陆状态到cookie里
       if(data.code===1){
           setToken(data.token)
       }
       yield put({
           type:'updateLogin',
           payload:data.code===1?1:-1
       })
      },
    },
  
    // 同步操作
    reducers: {
      updateLogin(state, {payload}) {
        return { ...state,isLogin:payload };
      },
    },
  
};
