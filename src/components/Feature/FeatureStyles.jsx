import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 5px;
  width: 350px;
  position: relative;
  transform: translateY(${props => props.index * 30 + 'px'});

  @media (max-width: 1200px) {
    width: 320px;
  }

  @media (max-width: 1100px) {
    width: 290px;
  }
  @media (max-width: 1000px) {
    transform: translateY(0);
    margin-bottom: 5rem;
  }
`

export const Icon = styled.div`
  position: absolute;
  top: 0%;
  left: 1.5rem;
  width: 70px;
  height: 70px;
  background: ${primary.darkViolet};
  border-radius: 50%;
  transform: translateY(-75%);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    left: 50%;
    transform: translate(-50%, -75%);
  }
  img {
    width: 50%;
  }
`

export const Title = styled.h3`
  color: ${neutral.veryDarkViolet};
  margin: 2rem 0 0.8rem;
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

export const Description = styled.p`
  color: ${neutral.grayishViolet};
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 1rem;
  @media (max-width: 1000px) {
    text-align: center;
  }
`
