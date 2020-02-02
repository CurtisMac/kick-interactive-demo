import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Roboto", sans-serif;
}
h1,h2,h3,h4,h5,h6{
  color: ${props => props.theme.colors.primary};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 1.3em;
}
.container {
  max-width: ${props => props.theme.sizes.container};
  margin: 0 auto;
  padding: 0 1.2rem;
  @media (max-width: ${props => props.theme.screen.tiny}) {
    padding: 0;
  }
}
button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: none;
    color: #ffffff;
    font-family: "PT Sans", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    :hover {
      background: none;
    }
}

/* Global Media Queries */
@media (max-width: ${props => props.theme.screen.xsmall}) {
  h1 {
    font-size: 1.7em;
  }
  h2, h3 {
    font-size: 1em;
  }
}
@media (max-width: ${props => props.theme.screen.tiny}) {
  p {
    display: none;
  }
}
`
export default GlobalStyle
