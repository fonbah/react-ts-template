import { makeStyles, Theme } from '@material-ui/core/styles';

import menuIcon from './assets/icon.svg';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: 0,
        paddingBottom: 0,
        height: 50,
        display: 'flex',
        '& > span': {
            flex: 1,
            '&:hover > i,': {
                
            },
            '& > a': {
                color: theme.palette.text.primary,
            },
        },
    },
    hiddenMenu: {
        display: 'inline-block',
        height: 16,
        width: 16,
        backgroundImage: `url(${menuIcon})`,
        position: 'relative',
        '& > i': {
            position: 'absolute',
            top: '-11px',
            right: '-11px',
            backgroundColor: theme.palette.primary.main,
            fontSize: 10,
            fontWeight: 800,
            padding: '3px 5px 2px 5px',
            borderRadius: '50%',
            transition: 'color 0.3s',
            '&:hover': {

            },
        },
    },
}));