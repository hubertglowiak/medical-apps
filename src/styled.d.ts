import "styled-components";

import { ThemeType } from "./utils/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
