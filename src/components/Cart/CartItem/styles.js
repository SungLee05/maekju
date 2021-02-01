import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: "250px",
    maxWidth: "100%",
    padding: "50px",
    backgroundSize: "auto",
    margin: 0,
    backgroundColor: "rgb(233,234,225)",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
