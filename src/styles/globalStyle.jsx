import { createGlobalStyle } from 'styled-components/'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins','Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

html {
  scroll-behavior: smooth;
  height: 100%;
}

body {
  height: 100%;
  overflow-x: hidden;
  overscroll-behavior-y: none;
}

a {
  text-decoration: none;
  color: unset;
}

input {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  outline: 0;
  border-radius: 0;
  font-size: 16px;
}

button {
  outline: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  
  &:hover{
    opacity: 0.7
  }
}

.hide {
  display: none;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.App {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .scroll {
    padding: 0 0 130px;
    @media(max-width: 500px){
      padding: 0 0 0;
    }
  }
}
`

export default GlobalStyle
