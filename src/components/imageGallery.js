import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

//Styles
const Wrapper = styled.div`
  && {
    margin-top: 40px;
  }
`
const ImageGrid = styled.div`
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(12, 1fr);
  grid-gap: 15px;
  max-height: calc(${props => props.theme.sizes.container} * 0.75);
  @media (max-width: ${props => props.theme.screen.medium}) {
    grid-gap: 5px;
    max-height: 600px;
  }
  .img {
    :nth-child(1) {
      grid-area: 1 / 1 / 6 / 5;
    }
    :nth-child(2) {
      grid-area: 1 / 5 / 5 / 13;
    }
    :nth-child(3) {
      grid-area: 6 / 1 / 13 / 5;
    }
    :nth-child(4) {
      grid-area: 5 / 5 / 13 / 9;
    }
    :nth-child(5) {
      grid-area: 5 / 9 / 9 / 13;
    }
    :nth-child(6) {
      grid-area: 9 / 9 / 13 / 13;
    }
    @media (max-width: ${props => props.theme.screen.medium}) {
      :nth-child(1) {
        grid-area: 10 / 1 / 13 / 7;
      }
      :nth-child(2) {
        grid-area: 1 / 1 / 4 / 13;
      }
      :nth-child(3) {
        grid-area: 10 / 7 / 13 / 13;
      }
      :nth-child(4) {
        grid-area: 4 / 1 / 10 / 7;
      }
      :nth-child(5) {
        grid-area: 4 / 7 / 7 / 13;
      }
      :nth-child(6) {
        grid-area: 7 / 7 / 10 / 13;
      }
    }
    @media (max-width: ${props => props.theme.screen.xsmall}) {
      :nth-child(1) {
        grid-area: 1 / 1 / 3 / 13;
      }
      :nth-child(2) {
        grid-area: 3 / 1 / 5 / 13;
      }
      :nth-child(3) {
        grid-area: 5 / 1 / 7 / 13;
      }
      :nth-child(4) {
        grid-area: 7 / 1 / 9 / 13;
      }
      :nth-child(5) {
        grid-area: 9 / 1 / 11 / 13;
      }
      :nth-child(6) {
        grid-area: 11 / 1 / 13 / 13;
      }
    }
  }
`

const ImageGallery = props => {
  const images = props.data.map(e => {
    return (
      <Img
        className="img"
        fluid={e.img.childImageSharp.fluid}
        alt={e.alt}
        key={e.img.id}
      />
    )
  })
  return (
    <Wrapper className="container">
      <ImageGrid>{images}</ImageGrid>
    </Wrapper>
  )
}

export default ImageGallery
