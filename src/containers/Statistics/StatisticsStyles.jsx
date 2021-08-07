import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const StatisticsContainer = styled.section`
  width: 100%;
  background: #f0f1f6;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 1100px;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 0 12rem;
  @media (max-width: 1000px) {
    padding: 0 0 1rem;
  }
`

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  color: ${neutral.veryDarkViolet};
  font-size: 2.1rem;
  text-align: center;
  padding: 0 0 1rem;

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`

export const Description = styled.p`
  color: ${neutral.grayishViolet};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  max-width: 460px;
`

export const FeaturesContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`

export const Line = styled.div`
  position: absolute;
  height: 10px;
  top: 50%;
  width: 100%;
  background: ${primary.cyan};
  @media (max-width: 1000px) {
    height: 80%;
    top: 0;
    width: 10px;
  }
`
