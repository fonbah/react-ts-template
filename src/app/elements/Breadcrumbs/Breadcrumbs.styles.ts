import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: 22,
        marginBottom: 16,
        '& a, span': {
            fontFamily: 'Open Sans',
            fontSize: 12,
        },
        '& a': {
            color: theme.palette.grey[900],
            textDecoration: 'none',
        },
        '& span': {
            color: theme.palette.grey[500],
        }
    }
}));