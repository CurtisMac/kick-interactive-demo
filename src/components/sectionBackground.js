import React from "react"
import styled from "styled-components"

//Styles
const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 15px 0 30px;
`

const SectionBackground = ({ children }) => {
  return <Container>{children}</Container>
}

export default SectionBackground
