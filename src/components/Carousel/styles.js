import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    '&:hover $handle':{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&:hover $leftHandleArrow, &:hover $rightHandleArrow': {
      opacity: '1'
    },
  },

  slider: {
    // '--slider-index': 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '93%',
    margin: '6px 3px',
    perspective: 100,
    // overflow: 'auto',
    transform: 'translateX(calc(var(--slider-index) * -100%))',
    // transform: 'translateX(-00%)'
    transition: '0.75s cubic-bezier(0.72,-0.01, 0.12, 1)',
  },

  handle: {
    width: '3.3%',
    height: '199px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignSelf: 'center',
    zIndex: 10,
    cursor: 'pointer',
    // opacity: 0.5,
    // '&:hover': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // },
  },

  leftHandle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover $leftHandleArrow': {
      transform: 'scale(1.5)'
    },   
  },
  rightHandle: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover $rightHandleArrow': {
      transform: 'scale(1.5)'
    },
  },

  leftHandleArrow: {
    color: 'white',
    transition: '150ms ease-in-out',
    opacity: '0'
    // transitionTimingFunction: 'ease-in-out'
  },
  rightHandleArrow: {
    color: 'white',
    transition: '150ms ease-in-out',
    opacity: '0'
    // transitionTimingFunction: 'ease-in-out'
  }
}));