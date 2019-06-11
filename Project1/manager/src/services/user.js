import request from '../utils/request';


//登陆接口
export function query(params) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  });
}
