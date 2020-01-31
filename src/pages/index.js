import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

//Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    dataYaml {
      services {
        cards {
          text
          title
          image {
            childImageSharp {
              fluid {
                tracedSVG
              }
            }
          }
        }
        title
        text
      }
    }
  }
`

export default IndexPage
