import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import AppHeader from "./components/AppHeader/AppHeader";
import AppMenu from "./components/AppMenu/AppMenu";
import AppRouter from "./router/AppRouter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
      <Router>
          <div className={classes.root}>
              <CssBaseline />
              <AppHeader />
              <AppMenu />
              <main className={classes.content}>
                  <Toolbar />
                  <AppRouter />
              </main>
          </div>
      </Router>
  );
}
