import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './Lists.js';
import AddList from './AddList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
