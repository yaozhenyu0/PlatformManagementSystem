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
  return request({
    url: `/exam/questions/condition`,
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
  url:`/user/authorityView/edit?view_id=${paydata.view_id}`,
    method: 'GET'
  });
}
//添加身份设定api接口权限
export function AddSf(paydata) {
  return request({  
  url:'/user/setIdentityApi',
    method: 'POST'
  });
}