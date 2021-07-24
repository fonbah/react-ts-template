import FrederikWoff from './fonts/Frederik/Frederik-Regular.woff';
import FrederikWoff2 from './fonts/Frederik/Frederik-Regular.woff2';
import FrederiBoldkWoff from './fonts/Frederik/Frederik-Bold.woff';
import FrederikBoldWoff2 from './fonts/Frederik/Frederik-Bold.woff2';

const Frederik = [{
    fontFamily: 'Frederik',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
      local('Frederik'),
      local('Frederik-Regular'),
      url(${FrederikWoff}) format('woff'),
      url(${FrederikWoff2}) format('woff2')
    `,
},
{
    fontFamily: 'Frederik-Bold',
    fontStyle: 'normal',
    fontWeight: 800,
    src: `
      local('Frederik-Bold'),
      url(${FrederiBoldkWoff}) format('woff'),
      url(${FrederikBoldWoff2}) format('woff2')
    `,
}];

export const overrides = {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [...Frederik],
            'html, body': {
                margin: 0,
                padding: 0,
            },
        },
    },
};