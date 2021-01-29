import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "250px",
    maxWidth: "100%",
    padding: "50px",
    backgroundSize: "auto",
    margin: 0,
    backgroundColor: "rgb(233,234,225)",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
