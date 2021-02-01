import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "rgb(255,255,255)",
    padding: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
}));
