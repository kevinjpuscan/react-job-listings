import React from "react";
import "./App.css";
import Main from "./components/main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
