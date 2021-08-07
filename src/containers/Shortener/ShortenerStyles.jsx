import styled from 'styled-components/macro'

export const ShortenerContainer = styled.div`
  width: 100%;
  background: #f0f1f6;
  padding: 8rem auto 0;
  @media (max-width: 1000px) {
    padding: 4rem auto 0;
  }
`

export const Container = styled.div`
  width: 1100px;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 0 4rem;
  @media (max-width: 1000px) {
    padding: 0 0 1rem;
  }
`
