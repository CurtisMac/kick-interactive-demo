import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

//Styles
const heroHeight = "200px"
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
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Parent>
      <HeroImage>
        <Img
          className="img"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </HeroImage>
      <Title>OUR BESPOKE KITCHENS</Title>
    </Parent>
  )
}

export default Hero
