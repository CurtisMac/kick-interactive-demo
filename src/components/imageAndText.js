import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import shortid from "shortid"

//Styles
const Wrapper = styled.div`
  && {
    padding-top: 40px;
  }
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column nowrap;
  }
`
const ImageWrapper = styled.div`
  flex: 0 1 50%;
`
const Image = styled(Img)`
  height: 100%;
`
const TextWrapper = styled.div`
  flex: 0 1 50%;
  margin-left: 15px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin-left: 0;
    text-align: center;
  }
`
const TextSection = styled.div`
  &.section0 {
    h3 {
      @media (min-width: ${props => props.theme.screen.medium}) {
        margin-top: 0;
      }
    }
  }
  &.section1 {
    p:last-child {
      margin-bottom: 0;
    }
  }
`

const imageAndText = props => {
  const { alt, image, text } = props.data
  const content = text.map((e, i) => {
    const formatTxt = e.text
      .split(`\n\n`)
      .map(e => `<p>${e.replace(/\n/g, `<br>`)}</p>`)
      .join(``)
    return (
      <TextSection className={`section${i}`} key={shortid.generate()}>
        <h3>{e.title.toUpperCase()}</h3>
        <div dangerouslySetInnerHTML={{ __html: formatTxt }} />
      </TextSection>
    )
  })
  return (
    <Wrapper className="container">
      <ImageWrapper>
        <Image fluid={image.childImageSharp.fluid} alt={alt} />
      </ImageWrapper>
      <TextWrapper>{content}</TextWrapper>
    </Wrapper>
  )
}

export default imageAndText
