import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // eslint-disable-next-line
  MenuItem,
  // eslint-disable-next-line
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/MaekJu.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation(); //react hook showing path name

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Maekju"
              height="25px"
              className={classes.image}
            />
            Maekju
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {/* && logic checks the stated condition and returns the following statement (showing cart icon only when rendering homepage) */}
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
