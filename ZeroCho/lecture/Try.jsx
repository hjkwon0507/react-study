import React from 'react';

// Hooks 방식
const Try = ({ tryInfo }) => { // 'tryInfo' 위치가 props 넣는 곳
  return (
    <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
  )
}

// Class 방식
// class Try extends Component {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>

//     )
//   }
// }

export default Try;