import React, { Component } from 'react';
import store from "./helpers/store";
import {history} from "./helpers/history";
import { Router, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import {Provider}   from 'react-redux';
import LoginPage from "./pages/LoginPage";
import './App.css';
import {PrivateRoute} from "./helpers/PrivateRoute";
import HomePage from "./pages/HomePage";
import Logout from "./pages/component/Logout";
import {AddItems} from "./actions/AddItemsAction";

// store.dispatch(AddItems());


class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
              <div className="App">
                  <Router history={history}>
                      <div>
                          <Logout/>
                          <PrivateRoute exact path="/" component={HomePage} />
                          <Route path="/register" component={RegisterPage} />
                          <Route path="/login" component ={LoginPage}/>
                      </div>
                  </Router>
              </div>
          </Provider>
      </div>
    );
  }
}

export default App;
