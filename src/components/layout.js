import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"

//Components
import Header from "./header"
import "../utils/normalize.css"
import GlobalStyles from "../utils/globalStyles"
import theme from "../utils/theme.js"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|PT+Sans:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
