import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import starterApp from "./reducers";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(starterApp);

//onst history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
