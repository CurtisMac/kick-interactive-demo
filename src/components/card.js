import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

//Styles
const Wrapper = styled.div`
  background-color: ${props =>
    props.colored ? props.theme.colors.primary : "none"};
  max-width: 300px;
  text-align: center;
  .img {
    height: 150px;
    @media (max-width: ${props => props.theme.screen.tiny}) {
      width: 200px;
    }
  }
  :nth-child(2) {
    margin: 0 15px;
    @media (max-width: ${props => props.theme.screen.medium}) {
      margin: 15px 0;
    }
  }
`
const TextArea = styled.div`
  padding: 25px;
  font-size: 0.9rem;
`
const Title = styled.h3`
  ${props => (props.colored ? "color: white;" : "")};
  margin: 0 0 18px;
`
const Text = styled.p`
  ${props => (props.colored ? "color: white;" : "")}
  margin: 0;
`

const card = props => {
  const { text, title, image } = props.data
  return (
    <Wrapper {...props}>
      <Img
        className="img"
        fluid={image.childImageSharp.fluid}
        alt={title}
      ></Img>
      <TextArea>
        <Title {...props}>{title}</Title>
        <Text {...props}>{text}</Text>
      </TextArea>
    </Wrapper>
  )
}

export default card
