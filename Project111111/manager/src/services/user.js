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
  // console.log(payload)
  return request({
    url: `/exam/exam`,
    method: 'POST',
    data: payload
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
//////////////////2.用户管理//////////////////////

//添加用户--身份id1
export function Adduser() {
  return request({
    url: '/user/identity',
    method: 'GET'
  });
}

//添加用户--身份id2
export function Adduserid() {
  return request({
    url: '/user/user',
    method: 'GET'
  });
}

//添加身份设置api接口权限
export function Addview() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'GET'
  });
}

//添加视图接口权限
export function Addviewid() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'GET'
  });
}

//添加用户
export function Addus(paydata) {
  return request({
    url: `/user`,
    method: 'POST',
    data:paydata
  });
}

//添加身份
export function Addrank(paydata) {
  return request({  
    url: `/user/identity/edit?identity_text=${paydata.identity_text}`,
    method: 'GET'
  });
}

//添加api接口权限
export function Addapi(paydata) {
  return request({  
    url: `/user/authorityApi/edit?api_authority_text=${paydata.api_authority_text}&api_authority_url=${paydata.api_authority_url}&api_authority_method=${paydata.api_authority_method}`,
    method: 'GET'
  });
}

//添加视图权限
export function Addviewport(paydata) {
  return request({  
  url:`/user/authorityView/edit?view_id=${paydata.view_id}&view_authority_text=${paydata.view_authority_text}`,
    method: 'GET'
  });
}
//添加身份设定api接口权限
export function AddSfapi(paydata) {
  return request({  
  url:'/user/setIdentityApi',
    method: 'POST',
    data:paydata
  });
}
//给身份设定视图权限
export function AddLast(paydata) {
  return request({  
  url:'/user/setIdentityView',
    method: 'POST'
  });
}
//更改用户信息
// export function Editdata(paydata) {
//   return request({  
//   url:'/user/user',
//     method: 'PUT'
//   });
// }

//////////////////3.班级管理//////////////////////


//班级管理数据
export function Classdata(paydata) {
  return request({  
  url:'/manger/grade',
    method: 'GET'
  });
}
//删除班级接口
export function Classdel(paydata) {
  return request({  
  url:'/manger/grade/delete',
    method: 'DELETE',
    data:paydata
  });
}
//添加班级接口
export function Classadd(paydata) {
  console.log(paydata)
  return request({  
  url:'/manger/grade',
    method: 'POST',
    data:paydata
  });
}

///修改班级接口
export function Classedit(paydata) {
  return request({  
  url:'manger/grade/update',
    method: 'PUT',
    data:paydata
  });
}

///获取学生信息接口
export function Studentdata(paydata) {
  return request({  
  url:'/manger/student/new',
    method: 'GET'
  });
}

//获取所有教室号
export function Studentnum(paydata) {
  return request({  
  url:'/manger/room',
    method: 'GET'
  });
}

//获取所有班级
export function Studentclass(paydata) {
  return request({  
  url:'/manger/grade',
    method: 'GET'
  });
}

//删除学生接口
export function Studentdel(paydata) {
  return request({  
  url:`/manger/student/${paydata}`,
    method: 'DELETE'
  });
}
