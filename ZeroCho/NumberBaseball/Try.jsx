import React, { PureComponent, memo } from 'react';

// Class 방식
// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props; // 'tryInfo' 위치가 props 넣는 곳
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// } 

// Hooks 방식
const Try = memo(({ tryInfo }) => { // 'tryInfo' 위치가 props 넣는 곳
  return (
    <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
  )
});

export default Try;