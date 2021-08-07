import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${neutral.veryDarkViolet};
  bottom: 0;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 0 3rem;
  height: 100%;
  width: 1100px;
  max-width: 90%;
  display: grid;
  grid-template-columns: 1fr 48% 20%;
  align-items: flex-start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 55% 20%;
  }
  @media (max-width: 850px) {
    grid-template-columns: 40% 60%;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Logo = styled.div`
  color: white;
  font-size: 1.3rem;
  line-height: 1.3rem;
  @media (max-width: 650px) {
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem 0 4rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem 0 0;
  @media (max-width: 850px) {
    margin: 0;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem;
  }
`

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  color: white;
  @media (max-width: 650px) {
    text-align: center;
    margin: 0 0 2rem;
  }
  li {
    margin: 0 0 0.5rem;
    transition: 0.2s ease-in-out;
    &:hover {
      color: ${primary.cyan};
    }
  }
`

export const ListTitle = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 850px) {
    justify-content: space-between;
    padding: 0 4rem 0 0;
  }
  @media (max-width: 650px) {
    width: 200px;
    padding: 0;
    margin: 0 auto;
  }
  svg {
    cursor: pointer;
    &:hover {
      path {
        transition: 0.2s ease-in-out;
        fill: ${primary.cyan};
      }
    }
  }
`

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: ${neutral.veryDarkViolet};
`
