import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

//Styles
const heroHeight = "250px"
const Parent = styled.div`
  height: ${heroHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeroImage = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  .img {
    height: ${heroHeight};
  }
`
const Title = styled.h1`
  text-align: center;
`
const Hero = props => {
  const { text, alt, image } = props.data
  return (
    <Parent>
      <HeroImage>
        <Img className="img" fluid={image.childImageSharp.fluid} alt={alt} />
      </HeroImage>
      <Title className="container">{text.toUpperCase()}</Title>
    </Parent>
  )
}

export default Hero
