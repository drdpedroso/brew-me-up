import React, { Component } from 'react';
import './css/pure-min.css';
import './css/menus-min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">Double Me Baby!</a>
          <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Onde?</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Informar Local</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sobre</a></li>
          </ul>
      </div>
    );
  }
}

export default App;
