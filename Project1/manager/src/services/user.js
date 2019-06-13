import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}

// 考试类型接口（add）
export function Add(){
  return request({
    url: '/exam/examType'
  })
}

// // 试题分类接口
// export function getQuestionsType(){
//   return request({
//     url: '/exam/getQuestionsType',
//     method: 'POST'
//   })
// }

// //查看试题接口
// export function getQuestionsType(){
//   return request({
//     url: '/exam/questions/condition',
//     method: 'POST'
//   })
// }