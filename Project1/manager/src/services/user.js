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