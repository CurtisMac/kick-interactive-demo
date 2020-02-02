import React from "react"
import { graphql } from "gatsby"

//Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TextSection from "../components/textSection"
import SectionBackground from "../components/sectionBackground"
import CardsSection from "../components/cardsSection"
import ImageGallery from "../components/imageGallery"
import BrandSection from "../components/brandSection"
import ImageAndText from "../components/imageAndText"

const IndexPage = ({ data }) => {
  const {
    services,
    showrooms,
    gallery,
    brands,
    bespokeService,
    products,
  } = data.dataYaml
  return (
    <Layout>
      <SEO title="Home" />
      <div id="kitchens">
        <Hero />
      </div>
      <div id="design_services">
        <TextSection data={services} />
      </div>
      <CardsSection data={services.cards} />
      <div id="showrooms">
        <SectionBackground>
          <TextSection data={showrooms} />
        </SectionBackground>
      </div>
      <ImageGallery data={gallery} />
      <div id="brands">
        <SectionBackground>
          <BrandSection data={brands} />
        </SectionBackground>
      </div>
      <div id="fitting_services">
        <ImageAndText data={bespokeService} />
      </div>
      <CardsSection data={products} colored />
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
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
        text
      }
      showrooms {
        title
        text
      }
      gallery {
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      brands {
        title
        images {
          img {
            childImageSharp {
              fixed(height: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      bespokeService {
        text {
          text
          title
        }
        alt
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      products {
        title
        text
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
