import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    // display: 'flex',
    // justifyContent: 'center',
    width: '100%'
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    perspective: 100,
    cursor: 'grab'
  }
}));