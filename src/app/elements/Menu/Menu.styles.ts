import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        position: 'relative',
        '& + .item > a': {

        },
        '& > a': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textDecoration: 'none',
            paddingLeft: 20,
            paddingRight: 20,
            transition: 'color 0.3s',
        },
        '& > a.active': {
            boxShadow: `inset 0px -3px 0px ${theme.palette.primary.main}`,
        },
        '& > i': {
            fontFamily: 'Open sans',
            position: 'absolute',
            top: '20%',
            right: 0,
            fontSize: 9,
        }, 
    },
}));