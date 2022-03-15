/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

export default function EmotionExample() {
  const color = 'white';
  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>This my button component.</Button>
    </>
    
  )
}
