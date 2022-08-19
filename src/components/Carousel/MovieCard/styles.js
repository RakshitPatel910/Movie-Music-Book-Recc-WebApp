import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '115px',
    width: '130px', 
    // maxHeight: '280px',
    // maxWidth: '185px',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',

  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 130,
    minWidth: 130,
    borderRadius: '5px',
    height: '100%',
    margin: '0.285rem',
    position: 'relative',
    overflow: 'hidden',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.1, 1.075)',
    },
    '&:not(:hover)': {
      opacity: 0.9
    }
  },

  title: {
    margin: '3px 0 0 0',
    padding: '3px 7px 0 7px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '43.03px',
    maxHeight: '43.03px',
    overflow: 'hidden'
  },

  overlay2: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    color: 'white',
  },
  
});