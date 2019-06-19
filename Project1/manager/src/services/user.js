import request from '../utils/request';

//登陆接口
export function login(params) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  });
}

//考试类型(add)
export function Add() {
  return request({
    url: '/exam/examType',
    method: 'GET'
  });
}

//课程类型(add)
export function Protion() {
  return request({
    url: '/exam/subject',
    method: 'GET'
  });
}

//试题类型(add)
export function ProtionType() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET'
  });
}

//添加试题(add)
export function addTrys(params) {
  return request({
    url: '/exam/questions',
    method: 'POST',
    data: params
  });
}

//试题分类(classify)
export function Question() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET'
  });
}

//所有课程类型(exam)
export function Protionexam() {
  return request({
    url: '/exam/subject',
    method: 'GET'
  });
}

//试题类型(exam)
export function Protionexamtype() {
  return request({
    url: '/exam/examType',
    method: 'GET'
  });
}

//试题分类(exam)
export function Protionexamclass() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET'
  });
}

//试题分类(exam)
export function ProtionAll() {
  return request({
    url: '/exam/questions/new',
    method: 'GET'
  });
}

//获取当前用户信息 (add)/exam/insertQuestionsType
export function UserOf() {
  return request({
    url: 'user/userInfo',
    method: 'GET'
  });
}

//添加试题类型 (classify)
export function QuestionAll(params) {
  return request({
    url: `/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`,
    method: 'GET'
  });
}
//查询接口(exam)
export function inQuires(values) {
  console.log(values)
  return request({
    url: `/exam/questions/condition?questions_type_id=${values.questions_type_id}&subject_id=${values.subject_id}&exam_id=${values.exam_id}`,
    method: 'GET',
    values
  });
}


//用户管理
// 用户展示
export function UserDisp() {
  return request({
    url: `/ user / user`,
    method: 'GET',
  });
}
//身份数据
export function UserDispData() {
  return request({
    url: `/ user / identity`,
    method: 'GET',
  });
}
//api接口权限
export function ApiData() {
  return request({
    url: `/ user / api_authority`,
    method: 'GET',
  });
}
//身份和api接口关系
export function IdenApi() {
  return request({
    url: `/ user / identity_api_authority_relation`,
    method: 'GET',
  });
}
//视图接口权限
export function viewData() {
  return request({
    url: `/ user / view_authority`,
    method: 'GET',
  });
}
//身份和视图权限关系
export function viewIden() {
  return request({
    url: `/user/identity_view_authority_relation`,
    method: 'GET',
  });
}

//添加考试
export function addsExam(payload) {
  console.log(payload)
  return request({
    url: `/exam/exam?subject_id=${payload.subject_id}&exam_id=${payload.exam_id}&title=${payload.title}&number=${payload.number}&start_time=${payload.start_time}&end_time=${payload.end_time}`,
    method: 'POST',
    payload
  });
}
//试卷列表
export function ExamList(payload) {
  return request({
    url: `/exam/exam`,
    method: 'GET',
    payload
  });
}
//获取考试试卷
export function ExamChild(values) {
  return request({
    url: `/exam/exam/${values}`,
    method: 'GET',
    values
  });
}