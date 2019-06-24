import request from '../utils/request';

// 获取所有试题
export function getQuestions(){
  return request({
    url: '/exam/questions/new'
  })
}

// 获取所有的类型试题
export function getQuestionTypes(){
  return request({
    url: '/exam/getQuestionsType'
  })
}
