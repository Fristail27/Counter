import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SimpleMenu from './Components/Common/Menu/menu';
import './App.css';
import Error404 from './Components/Pages/Error404';
import TwoDisplays from './Components/Pages/TwoDisplays/TwoDisplays';
import OneDisplay from './Components/Pages/OneDisplay/OneDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <AppBar position="static">
          <Toolbar>
            <SimpleMenu />
            <Typography variant="h6">Counter</Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/TwoDisplays" />} />
          <Route path="/TwoDisplays" render={() => <TwoDisplays />} />
          <Route path="/OneDisplay" render={() => <OneDisplay />} />
          <Route render={() => <Error404 />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
