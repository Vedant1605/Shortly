import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const ShortLinkContainer = styled.div`
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.25rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  transform: translateY(-2.5rem);
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    transform: translateY(-4.5rem);
  }
`

export const OriginalLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${neutral.veryDarkViolet};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 2rem 0.5rem;
    border-bottom: 1px solid #dadada;
  }
`

export const ShortenedLinkContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
    width: 100%;
  }
`

export const ShortenedLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${primary.cyan};
  margin-right: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 280px;
  @media (max-width: 800px) {
    padding: 1rem 0;
    max-width: 100%;
  }
`
export const CopyButton = styled.button`
  background: ${props =>
    props.copied ? neutral.veryDarkViolet : primary.cyan};
  color: white;
  display: block;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  @media (max-width: 800px) {
    width: 100%;
  }
`
