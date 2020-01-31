import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Montserrat", sans-serif;
}
h1,h2,h3,h4,h5,h6{
  color: ${props => props.theme.colors.primary};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
a {
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
}
`
export default GlobalStyle
