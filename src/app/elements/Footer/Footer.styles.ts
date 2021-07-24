import { makeStyles, Theme } from '@material-ui/core/styles';

import logo from './assets/logo.svg';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: '0 0 366px',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: 30,
            paddingBottom: 30,
        },
    },
    footer: {
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 30,
        '& > div': {
            padding: '30px 20px 0 0',
            fontSize: '1rem',
            '& > h4': {
                marginBottom: 20,
            },
            '& span': {
                display: 'block',
            },
            '& a': {
                display: 'block',
                fontSize: '.9rem',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                margin: '10px 0',
                '& :hover': {

                }
            }
        },
        '& :last-child': {
            paddingRight: 0,
        },
    },
    logo: {
        display: 'inline-block',
        width: 260,
        height: 34,
        backgroundImage: `url(${logo})`,
        margin: '30px 0 5px 0',
        '& + p': {
            fontSize: '.75rem',
        }
    },
    address: {
        marginTop: '10px',
        '& > p': {
            marginTop: 10,
            fontSize: '.9rem',
        }
    }
}));