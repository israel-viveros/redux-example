import React, { Component } from 'react';


import ListItems from "./../src/Components/listItems";
import AddItems from "./../src/Components/addItem";
import { Provider } from "react-redux";
import configureStore from "./Redux/Store/configureStore";

let store = configureStore();

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={styles}>
          <h2>Redux example</h2>
          <AddItems />
          <ListItems />
        </div>
      </Provider>
    );
  }
}

export default App;
