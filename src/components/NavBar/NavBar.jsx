import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/authActions";

export default function NavBar() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                Phonebook
              </Typography>
              <Button color="inherit">
                <Link to="/login"> LOGIN </Link>
              </Button>
              <Button color="inherit">
                <NavLink to="/register"> REG </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/phonebook"> PHONE </NavLink>
              </Button>
              <Button onClick={() => dispatch(logout())} color="inherit">
                Exit
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </header>
  );
}
