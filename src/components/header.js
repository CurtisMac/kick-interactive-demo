import React from "react"
import styled from "styled-components"

//Assets
import logo from "../images/logo.png"

//Styles
const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.primary};
`
const Container = styled.div`
  position: relative;
  z-index: 2;
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
  @media (max-width: ${props => props.theme.screen.tiny}) {
    grid-template-columns: 1fr;
  }
`
const Logo = styled.img`
  width: 4.8rem;

  @media (max-width: ${props => props.theme.screen.tiny}) {
    justify-self: center;
  }
`
const TopNav = styled.nav`
  justify-self: center;
  @media (max-width: ${props => props.theme.screen.medium}) {
    display: none;
  }
`
const SideNav = styled.div`
  height: 100%;
  width: ${props => (props.open ? "220px" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding-top: 8rem;
  transition: 0.5s;
  background-color: ${props => props.theme.colors.primary};
  @media (min-width: ${props =>
      `${Number(props.theme.screen.medium.replace("px", "")) + 1}px`}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.screen.tiny}) {
    display: none;
  }
`
const NavItem = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  margin: 15px;
  will-change: auto;
  /* Styles Specific to TopNav */
  @media (min-width: ${props => props.theme.screen.medium}) {
    position: relative;
    transition: all 0.3s ease-in-out;
    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -10px;
      left: 0;
      background-color: white;
      transform: scaleX(0);
      transition: all 0.4s ease-in-out;
    }
    :hover {
      transform: scale(1.05) translateY(-2px);
      :before {
        transform: scaleX(1);
      }
    }
  }
  /* Styles Specific to SideNav */
  @media (max-width: ${props => props.theme.screen.medium}) {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
    width: 180px;
    display: block;
    padding: 0 0 10px 12px;
  }
  @media (max-width: ${props => props.theme.screen.xsmall}) {
    padding: 0 0 10px 28px;
  }
`
const MobileNavBtn = styled.button`
  justify-self: end;
  grid-column-end: 4;
  width: 50px;
  height: 35px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: white;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    &.open {
      top: 15px;
      width: 0%;
      left: 50%;
    }
  }
  span:nth-child(2) {
    top: 15px;
    &.open {
      transform: rotate(45deg);
    }
  }
  span:nth-child(3) {
    top: 15px;
    &.open {
      transform: rotate(-45deg);
    }
  }
  span:nth-child(4) {
    top: 31px;
    &.open {
      top: 15px;
      width: 0%;
      left: 50%;
    }
  }
  @media (min-width: ${props =>
      `${Number(props.theme.screen.medium.replace("px", "")) + 1}px`}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.screen.tiny}) {
    display: none;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navDrawer: false }
  }
  toggle = () => {
    this.setState({
      navDrawer: !this.state.navDrawer,
    })
  }
  render() {
    const navLinks = [
      <NavItem key="nav1" href="#kitchens">
        Kitchens
      </NavItem>,
      <NavItem key="nav2" href="#design_services">
        Design Services
      </NavItem>,
      <NavItem key="nav3" href="#showrooms">
        Our Showrooms
      </NavItem>,
      <NavItem key="nav4" href="#brands">
        Brands
      </NavItem>,
      <NavItem key="nav5" href="#fitting_services">
        Fitting Services
      </NavItem>,
    ]
    const className = this.state.navDrawer ? "hamburger open" : "hamburger"
    return (
      <Wrapper>
        <Container>
          <Logo src={logo} alt="Chandler's Kitchens logo"></Logo>
          <TopNav>{navLinks}</TopNav>
          <MobileNavBtn onClick={this.toggle}>
            <span className={className}></span>
            <span className={className}></span>
            <span className={className}></span>
            <span className={className}></span>
          </MobileNavBtn>
        </Container>
        <SideNav open={this.state.navDrawer} onClick={this.toggle}>
          {navLinks}
        </SideNav>
      </Wrapper>
    )
  }
}

export default Header
