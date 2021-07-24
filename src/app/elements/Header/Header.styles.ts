import { makeStyles, Theme } from '@material-ui/core/styles';

import logo from './assets/logo.svg';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: '0 0 56px',
        display: 'flex',
        backgroundColor: theme.palette.secondary.main,
        position: 'relative',
        padding: '0 120px',
        '&::after': {},
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 140,
            paddingRight: 140,
        },
    },
    header: {
        maxWidth: theme.breakpoints.values.lg,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
    },
    logo: {
        display: 'inline-block',
        position: 'absolute',
        top: 12,
        left: 24,
        width: 102,
        height: 31,
        background: `no-repeat url(${logo})`,
        transition: 'left 0.5s',
        [theme.breakpoints.down('md')]: {
            left: 10,
        },
    },
    login_btn: {
        display: 'inline-block',
        position: 'absolute',
        top: 8,
        right: 32,
        width: 78,
        transition: 'right 0.5s',
        [theme.breakpoints.down('md')]: {
            right: 1,
        },
        '& > button': {
            color: '#fff',
            textTransform: 'none',
            fontSize: '1rem'
        },
    },
}));