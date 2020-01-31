import React from "react"
import styled from "styled-components"

//Styles
const Container = styled.div`
  text-align: center;
  margin: 40px 0;
`

const TextSection = props => {
  const { text, title } = props.data
  console.log(props)
  return (
    <Container className="container">
      <h2>{title.toUpperCase()}</h2>
      <p>{text}</p>
    </Container>
  )
}

export default TextSection
