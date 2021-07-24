import { palette } from './palette';

export const typography = {
    fontFamily: 'Frederik, Open Sans, sans-serif',
    fontSize: 16,
    lineHeight: 32,
    color: palette.text.primary,
    h1: {
        fontSize: 36,
        lineHeight: '48px',
        fontWeight: 800,
        color: palette.grey[900],
    },
    h2: {
        fontSize: 32,
        lineHeight: '40px',
        color: palette.grey[900],
    },
    h3: {
        fontSize: 30,
        lineHeight: '40px',
        color: palette.grey[900],
    },
    h4: {
        fontSize: 20,
        color: palette.grey[900],
    },
    h5: {
        fontSize: 18,
        lineHeight: '24px',
        color: palette.grey[900],
    },
    h6: {
        color: palette.grey[900],
    },
};