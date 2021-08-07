import styled from 'styled-components/macro'
import { primary } from '../../styles/styleVariables'

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background: ${primary.darkViolet};
  background-image: url('./images/bg-boost-desktop.svg');
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    height: 275px;
    background-image: url('./images/bg-boost-mobile.svg');
  }
`

export const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
  @media (max-width: 350px) {
    font-size: 1.6rem;
  }
`

export const Button = styled.button`
  background: ${primary.cyan};
  color: white;
  display: block;
  height: 40px;
  width: 140px;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 1000px;
  margin: 1rem 0 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
    filter: brightness(1.1);
  }
`
