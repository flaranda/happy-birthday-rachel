import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

import { Color } from '../constants/Color';

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  html,
  body {
    width: 100vw;
    height: 100vh;
    background-color: #3a3a58;
  }
`;
