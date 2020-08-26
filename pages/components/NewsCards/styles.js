import {makeStyles} from '@material-ui/core';

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '50vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        margin: 5
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});
