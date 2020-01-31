import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

//Assets
import logo from "../images/logo.png"

//Styles
const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin: 0 15%;
  height: 7rem;
  @media (max-width: ${props => props.theme.screen.xlarge}) {
    margin: 0 10%;
  }
  @media (max-width: ${props => props.theme.screen.large}) {
    grid-template-columns: 1fr auto;
    margin: 0 5%;
  }
  @media (max-width: ${props => props.theme.screen.medium}) {
    grid-template-columns: 1fr auto 1fr;
  }
`
const Logo = styled.img`
  width: 4.8rem;
`
const Nav = styled.nav`
  justify-self: center;
  @media (max-width: ${props => props.theme.screen.medium}) {
    display: none;
  }
`
const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 15px;
`
const MobileNavBtn = styled.h1`
  grid-column-end: 4;
  justify-self: end;
  color: white;
  margin: 0;
  transform: rotate(90deg);
  @media (min-width: ${props => props.theme.screen.medium}) {
    display: none;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <Logo src={logo} alt="Chandler's Kitchens logo"></Logo>
      <Nav>
        <NavItem href="#kitchens">Kitchens</NavItem>
        <NavItem href="#kitchens">Design Services</NavItem>
        <NavItem href="#kitchens">Our Showrooms</NavItem>
        <NavItem href="#kitchens">Brands</NavItem>
        <NavItem href="#kitchens">Fitting Services</NavItem>
      </Nav>
      <MobileNavBtn>|||</MobileNavBtn>
    </Container>
  </StyledHeader>
)

export default Header
