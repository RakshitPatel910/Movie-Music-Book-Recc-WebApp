import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

    container: {
        // minWidth: '22.5%',
        // maxWidth: '22.5%',
        backgroundColor: 'rgb(0 102 255 / 39%)',
        // backgroundColor: 'rgb(136 182 251 / 98%)',
        height: '100%',
        // margin: '2%',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0.75rem'
    },

    mediaContainer: {
        maxHeight: '100%',
        margin: '0 0.5rem 0 0'
    },


    media: {
        maxHeight: '100%',
        borderRadius: '0.5rem',
    },

    info: {
        width: '100%',
        padding:'0.5rem 1rem',
        borderRadius: '0.5rem',
        // backgroundColor: 'black',
        backgroundColor: 'rgb(255 255 255 / 49%)',
    },

    title: {
        fontSize: '1.3rem'
    }

});