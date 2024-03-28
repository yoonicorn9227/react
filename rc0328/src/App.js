/*eslint-disable */ //☜터미널에 뜨는 Waring eslint안보이게하기
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //■변수에 넣는 방법
  let posts ='구로 고기 맛집'   
 
  //■ state에 넣는 방법  state : 변수대신 쓰는 데이터 저장공간 useState()를 이용해 만들어야함
  // 설명 ex) var [a, b] =[10, 100]; //10, 100을 a,b 변수에 담아주세요 var a = 10, var b= 100
  
  //①배열이 아닐경우
  //let [title,titleChange] = useState('남자 코드 추천');  //title = 남자 코드 추천, titleChange= 남자 코드 추천 함수 state 정정
  
  //②배열일 경우 =>{title[2]='구로 우동 맛집'}
  let [title,titleChange] = useState(['남자 코드 추천', '구로 우동 맛집','은평 우동 맛집']);  //title = 남자 코드 추천, titleChange= 남자 코드 추천 함수 state 정정
  
  //onClick
  let [like, likeChange] = useState(0); //[state, state변경함수] ☞ state변경함수(state+1)
  //onClick ={클릭 될 때 실행할 함수} or onClick={()=>{실행할 내용}}


  function titleCng(){
    titleChange(); //state(title)를 아예 대체해주는 함수
  }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={titleCng}>버튼</button>
        <div className='list'>
          <h3>{title[0]}<span onClick={()=>{likeChange(like+1)}}>😀</span> {like} </h3> 
          <p>2024년 3월 28일 발생</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{title[1]}<span>😀</span> 0</h3>
          <p>2024년 3월 29일 발생</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{title[2]}<span>😀</span> 0</h3>
          <p>2024년 3월 30일 발생</p>
          <hr/>
        </div>
    </div>
  );//return
}

export default App;
