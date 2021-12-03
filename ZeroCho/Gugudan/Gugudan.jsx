const React = require('react');
const { useState, useRef } = React; // 앞에 붙는 React 반복을 줄이기 위해

const GuGuDan = () => {
  // state 선언
  // state를 하나씩 분리
  // 반드시 컴포넌트 안에 위치해야 함
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null); // ref 선언방식

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      // 옛날 result 사용하는 경우
      setResult((prevResult) => {
        return '정답: ' + value
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() *9));
      setValue('');
      inputRef.current.focus(); // hooks 방식에서는 current를 붙여주어야 한다.
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{first}곱하기{second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan; // 다른 파일에서 불러와서 사용하기 위해