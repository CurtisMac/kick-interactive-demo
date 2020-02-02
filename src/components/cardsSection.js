import React from "react"
import styled from "styled-components"
import shortid from "shortid"

//Components
import Card from "../components/card"

//Styles
const Wrapper = styled.div`
  && {
    margin-top: 40px;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column;
    align-items: center;
  }
`

const CardsSection = props => {
  const cards = props.data.map(e => (
    <Card key={shortid.generate()} data={e} colored={props.colored} />
  ))
  return <Wrapper className="container">{cards}</Wrapper>
}

export default CardsSection
