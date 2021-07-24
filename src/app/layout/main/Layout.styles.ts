import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        fontFamily: theme.typography.fontFamily,
        display: 'flex',
        flexFlow: 'column nowrap',
        overflow: 'visible',
        alignItems: 'stretch',
        minHeight: '100vh',
        boxSizing: 'border-box',
    },
    menuContainer: {
        flex: 1,
        display: 'flex',
        '& a': {
            color: '#B5C7CB',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.palette.text.secondary,
            },
        }
    },
    content: {
        flex: 1,
        alignSelf: 'center',
        maxWidth: theme.breakpoints.values.lg,
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            padding: '0 10px',
        },
    },
}));