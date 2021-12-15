// 최신 문법
import React, {useState} from 'react';
import Try from './Try';

// 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {  // this 안쓰는 경우 class 밖으로 빼준다. Hooks로 바꿀 때도 아무런 영향이 없다.
  const candidates = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

// Hooks 방식
const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: '홈런!' }]
      });
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 넘게 틀렸을 때 초기화
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries('[]');
      } else { // 10번 이하로 틀렸을 때
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }]
        });
        setValue('');
      }
    }
    console.log(value)
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => { // v는 { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` } 이부분이 된다.
          return (
            <Try key={`${i + 1}차 시도:`} tryInfo={v} />
          );
        })}
      </ul>
    </>
  )
}

// Class 방식
// class NumberBaseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(), // ex: [1,3,5,7]
//     tries: [],
//   };

//   onSubmitForm = (e) => {
//     const { result, value, tries, answer } = this.state;
//     e.preventDefault();
//     if (value === answer.join('')) {
//       this.setState((prevState) => { // 홈런일 때
//         return {
//           result: '홈런!',
//           tries: [...prevState.tries, { try: value, result: '홈런!' }], // 옛날꺼 복사해주고, {지금꺼}
//         }
//       });
//       alert('게임을 다시 시작합니다!');
//         this.setState({ 
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) { // 10번 넘게 틀렸을 때 초기화
//         this.setState({ 
//           result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
//         });
//         alert('게임을 다시 시작합니다!');
//         this.setState({ 
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else { // 10번 이하로 틀렸을 때
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState((prevState) => {
//           return {
//             tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }],
//             value: '',
//           }
//         })
//       }
//     }
//     console.log(value)
//   };

//   onChangeInput = (e) => {
//     console.log(this.state.answer);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>{result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input maxLength={4} value={value} onChange={this.onChangeInput} />
//         </form>
//         <div>시도: {tries.length}</div>
//         <ul>
//           {tries.map((v, i) => { // v는 { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` } 이부분이 된다.
//             return (
//               <Try key={`${i + 1}차 시도:`} tryInfo={v} />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// };



export default NumberBaseball; // import NumberBaseball

// Node에서 지원하는 문법
// const React = require('react'); 
// const { Component } = React; 
// exports.hello = 'hello';
// module.exports = NumberBaseball;