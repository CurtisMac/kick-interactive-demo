import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

//Styled
const Title = styled.h3`
  text-align: center;
  margin: 15px 0 0;
`
const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: ${props => props.theme.screen.large}) {
    justify-content: center;
  }
`
const Image = styled(Img)`
  margin: 15px;
  @media (max-width: ${props => props.theme.screen.xsmall}) {
    margin: 15px 0;
  }
`

const BrandSection = props => {
  const images = props.data.images.map(e => {
    return (
      <Image fixed={e.img.childImageSharp.fixed} alt={e.alt} key={e.img.id} />
    )
  })
  return (
    <div className="container">
      <Title>{props.data.title.toUpperCase()}</Title>
      <Images>{images}</Images>
    </div>
  )
}

export default BrandSection
