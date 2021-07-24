import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { overrides } from './overrides';
import { palette } from './palette';
import { typography } from './typography';
import { zIndex } from './z-index';
import { breakpoints } from './breakpoints';

export const theme: Theme = createMuiTheme({
    overrides,
    palette,
    typography,
    zIndex,
    breakpoints,
});