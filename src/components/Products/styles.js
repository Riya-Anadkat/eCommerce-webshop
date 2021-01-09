import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(9),
  },
  paper: {
    boxShadow: "2px 2px 8px #706464",
  },
  root: {
    flexGrow: 1,
    boxShadow: "2px 2px 8px #706464",
  },
}));