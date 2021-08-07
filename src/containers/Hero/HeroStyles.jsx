import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'
import { motion } from 'framer-motion'

export const HeroContainer = styled.section`
  width: 100%;
  overflow-x: hidden;
  background: white;
`

export const Container = styled.div`
  margin: 180px auto 0;
  width: 1100px;
  max-width: 90%;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 0 8rem;

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    margin: 120px auto 0;
  }
`

export const HeroCTA = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    order: 2;
    margin: 3rem 0;
    align-items: center;
  }
  .title {
    font-size: 4rem;
    color: ${primary.darkViolet};
    line-height: 120%;
    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    @media (max-width: 1000px) {
      text-align: center;
      font-size: 3.15rem;
    }
    @media (max-width: 800px) {
      max-width: 400px;
    }
    @media (max-width: 420px) {
      font-size: 2.75rem;
    }
    @media (max-width: 375px) {
      font-size: 2.25rem;
    }
  }
  .description {
    font-size: 18px;
    font-weight: 500;
    color: ${neutral.grayishViolet};
    max-width: 450px;
    @media (max-width: 1000px) {
      margin-top: 1rem;
      text-align: center;
      max-width: 440px;
    }
    @media (max-width: 800px) {
      max-width: 330px;
    }
  }
  .cta-button {
    margin: 2rem 0;
    background: ${primary.cyan};
    color: white;
    display: block;
    height: 56px;
    width: 160px;
    font-size: 16px;
    font-weight: 700;
    border: 0;
    border-radius: 1000px;
    cursor: pointer;
    @media (max-width: 1000px) {
      margin: 2rem 0;
    }
  }
`

export const HeroImage = styled(motion.div)`
  width: 100%;
  img {
    padding-left: 3rem;
    @media (max-width: 800px) {
      padding-left: 0rem;
    }
  }
`
