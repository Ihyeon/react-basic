// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";

/*
  필요한 파일들을 불러올 때 webpack loader 사용됩니다
  웹팩 로더는 직접 설치가 가능하고, 보일러 플레이트로 만들 경우는 자동 설정됩니다
  웹팩 로더 안에 babel이라는 도구가 ES6 -> ES5로 다운그레이드 시키는 역할을 합니다
*/

// 변수

function App() {

  let name = "홍길동";
  let age = 20;

  return (

    <Fragment>
    <h3>JSX문법 입니다 (JS의 확장 문법 - HTML에 JS코드를 녹여낸 형태)</h3>
    <ul>
      {/* 주석 입니다 */}
      <li>1. JS파일은 JSX라고 부릅니다. 주석은 alt + shift + a</li>
      <li>2. JSX은 반드시 하나의 태그를 return 해야합니다.</li>
      <li>3. div를 사용해서 묶어도 되고 Fragment or <></> 모형으로 묶어주면 됩니다.</li>
      <li>4. 변수값을 사용할 때는 {name}, {age}로 참조합니다.</li>
      <li>5. if문 보다는 삼항연산식을 사용합니다.</li>
      <li>6. 화면에 보여주고 싶은 문장이 없다면 null을 리턴하면 됩니다.</li>
      <li>7. undefined을 반환해도 되지만 지양해야합니다.</li>
      <li>8. DOM 요소에 css를 직접 넣을 때는 객체형으로 묶고 속성은 카멜표기법으로 사용됩니다. (단위 생략시 px 기본값)</li>
      <li>9. class속성은 전부 className으로 변경됩니다.</li>
      <li>10. 홀로 사용되는 태그는 반드시 / 로 닫는 태그를 작성합니다. {/* <input/> <br/> */}</li>
    </ul>

    <div className="example">
      클래스명?
      <br/>
      <input name="name" />
    </div>

    <div style={{color : "red", backgroundColor : "yellow", fontSize : 20}}>
      {name === '홍길동' ? '리액트 입니다' : '리액트가 아닙니다'}
      {age !== 20 ? 
        <h6>20 입니다</h6> 
        : 
        null
      }
    </div>

    </Fragment>

  );
}

export default App;