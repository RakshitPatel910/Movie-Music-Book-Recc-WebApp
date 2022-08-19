import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    // display: 'flex',
    // justifyContent: 'center',
    width: '100%',
    overflow: 'hidden'
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '15px 3px',
    perspective: 100,
    cursor: 'grab',
    // overflow: 'auto'
  }
}));