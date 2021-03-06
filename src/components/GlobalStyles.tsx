import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

import { Color } from '../models/Color';

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${Color.SkyBackground};
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`;
