import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Styles
const Background = styled.footer`
  margin-top: 40px;
  background-color: ${props => props.theme.colors.secondary};
  padding: 20px 0 30px;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
  font-size: 0.9em;
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column;
  }
`
const Tel = styled.a`
  flex: 0 1 auto;
  margin-right: 30px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin-right: 0;
  }
`
const Email = styled.a`
  flex: 0 1 auto;
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin: 15px 0;
  }
`
const Social = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  @media (max-width: ${props => props.theme.screen.medium}) {
    justify-content: center;
  }
`
const SocialIcon = styled.div`
  margin-left: 15px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin: 15px 10px 0;
  }
`
const Copyright = styled.h6`
  color: black;
  font-weight: 400;
  margin: 0;
  padding-top: 10px;
  font-size: 0.6rem;
  border-top: 1px solid lightgrey;
  @media (max-width: ${props => props.theme.screen.tiny}) {
    padding: 10px 5px 0;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      dataYaml {
        contact {
          email
          tel
          social {
            url
            title
            icon {
              childImageSharp {
                fixed(width: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  const { email, tel, social } = data.dataYaml.contact
  const socialIcons = social.map(e => {
    return (
      <SocialIcon key={e.icon.id}>
        <a href={e.url} title={e.title}>
          <Img fixed={e.icon.childImageSharp.fixed}></Img>
        </a>
      </SocialIcon>
    )
  })
  return (
    <Background>
      <div className="container">
        <Info>
          <Tel href={`tel:${tel}`}>{tel}</Tel>
          <Email href={`mailto:${email}`}>{email}</Email>
          <Social>{socialIcons}</Social>
        </Info>
        <Copyright>
          Company Group - Copyright © 2019. All Rights Reserved all 3rd party
          trademarks acknowledged.
        </Copyright>
      </div>
    </Background>
  )
}

export default Footer
