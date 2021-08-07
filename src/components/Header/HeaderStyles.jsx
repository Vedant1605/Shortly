import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props =>
    props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'none'};
  transition: 0.2s ease-in-out;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 1100px;
  max-width: 90%;
  transition: 0.2s ease-in-out;
  height: ${props => (props.scrolled ? '80px' : '130px')};
  display: flex;
  align-items: center;
  font-size: 15px;
  position: relative;

  @media (max-width: 1000px) {
    justify-content: space-between;
    font-size: 18px;
  }
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
    position: absolute;
    background: ${primary.darkViolet};
    flex-direction: column;
    border-radius: 12px;
    transition: top 0.2s ease-in-out;
    top: ${props => (props.scrolled ? '70px' : '100px')};
    max-width: 380px;
    right: 0;
  }
`

export const Logo = styled.img`
  margin-right: 2.5rem;
  color: ${primary.darkViolet};
  cursor: pointer;
`

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 260px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #494161;
    width: 300px;
    max-width: 90%;
  }

  li {
    font-weight: 700;
    color: ${neutral.grayishViolet};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    @media (max-width: 1000px) {
      color: white;
      padding: 1rem 0;
    }
    @media (hover: hover) {
      &:hover {
        color: ${neutral.veryDarkBlue};
        @media (max-width: 1000px) {
          color: ${neutral.grayishViolet};
        }
      }
    }
  }
`
export const LoginSignUp = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0.5rem 0 1.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  a {
    font-weight: 700;
    color: ${neutral.grayishViolet};
    margin-right: 2rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    @media (max-width: 1000px) {
      color: white;
      margin: 0 0 2rem;
    }

    @media (hover: hover) {
      &:hover {
        color: ${neutral.veryDarkBlue};
        @media (max-width: 1000px) {
          color: ${neutral.grayishViolet};
        }
      }
    }
  }
  button {
    background: ${primary.cyan};
    color: white;
    display: block;
    height: 40px;
    width: 100px;
    font-size: 15px;
    font-weight: 700;
    border: 0;
    border-radius: 1000px;
    cursor: pointer;

    @media (max-width: 1000px) {
      font-size: 18px;
      width: 300px;
      height: 50px;
      max-width: 90%;
    }
  }
`

export const MenuIcon = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  color: ${neutral.grayishViolet};
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  transform: translateX(4px);
  @media (max-width: 1000px) {
    display: flex;
  }

  @media (hover: hover) {
    &:hover {
      color: ${neutral.veryDarkBlue};
    }
  }
`
