import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"

//Components
import Header from "./header"
import "../utils/normalize.css"

//Styles
const Container = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Container>{children}</Container>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
