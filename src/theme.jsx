import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const lightTheme = {
  colourA: '#8a8afb',
  colourB: '#5a71ff',
  colourC: '#383869',
  colourD: '#101820'
}

const GlobalStyle = createGlobalStyle`
    body  {
      margin: 0;
      padding: 0;
      font-family: 'Silkscreen', cursive;
      background: #332f35;
    }
    * {
      box-sizing: border-box;
    }
    footer {
      z-index: -1;
    }
`
export const Theme = props => (
  <ThemeProvider theme={props.theme ?? lightTheme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
)
