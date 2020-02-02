import React from "react"
import styled from "styled-components"

//Styles
const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`

const TextSection = props => {
  const { text, title } = props.data
  return (
    <Wrapper className="container">
      <h2>{title.toUpperCase()}</h2>
      <p>{text}</p>
    </Wrapper>
  )
}

export default TextSection
