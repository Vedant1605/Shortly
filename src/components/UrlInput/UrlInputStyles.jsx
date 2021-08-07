import styled from 'styled-components/macro'
import { neutral, primary, secondary } from '../../styles/styleVariables'

export const Container = styled.div`
  width: 100%;
  height: 130px;
  background: ${primary.darkViolet};
  background-image: url('./images/bg-shorten-desktop.svg');
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 100rem;
  position: relative;
  transform: translateY(-50%);
  z-index: 10;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 3rem;

  @media (max-width: 600px) {
    padding: 2rem;
    height: auto;
    background-image: url('./images/bg-shorten-mobile.svg');
    background-position: right top;
    background-size: 80% 80%;
  }

  input,
  button {
    position: relative;
    z-index: 10;
  }
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const FormInputContainer = styled.div`
  position: relative;
  width: 100%;
  p {
    position: absolute;
    z-index: 10;
    top: 110%;
    left: 0;
    color: ${secondary.red};
    font-weight: 500;
    font-size: 13px;
    font-style: italic;
    @media (max-width: 600px) {
      top: 60%;
    }
  }
`

export const FormInput = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border: ${props =>
    props.error ? `2px solid ${secondary.red}` : '2px solid transparent'};
  padding-left: 1rem;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 600px) {
    margin-bottom: 2.5rem;
    flex: unset;
  }

  &::placeholder {
    font-weight: 500;
    color: ${neutral.grayishViolet};
  }
`

export const FormButton = styled.button`
  margin-left: 24px;
  min-width: 150px;
  border-radius: 10px;
  border: 0;
  background: ${primary.cyan};
  color: white;
  display: block;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 48px;
    margin-left: 0;
  }
`
