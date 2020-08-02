import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
    },
    text: {
      main: string
      secondary: string
    },
    shadow: string,
  }
}
