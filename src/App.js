import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import VerticalContainer from './components/vertical/VerticalContainer.js';
import ItemContainer from './components/item/ItemContainer.js';
import Item from './components/item/Item.js';
import ItemDetailContainer from './components/item-detail/ItemDetailContainer.js'
import CartContainer from './components/cart/CartContainer.js'
import SearchContainer from './components/search/SearchContainer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kevin's Grocery Store</h1>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-12"><SearchContainer/></div>
            </div>
            <div className="row">
              <div className="col-2">
                <Switch>
                  <Route path="/category/:id/:subcatId" component={VerticalContainer} />
                  <Route path="/category/:id" component={VerticalContainer} />
                  <Route path="/item/:id" component={VerticalContainer} />
                  <Route path="/" component={VerticalContainer} />
                </Switch>
              </div>
              <div className="col-8">
                <Switch>
                  <Route exact path="/" component={ItemContainer} />
                  <Route path="/category/:id/:subcatId" component={ItemContainer} />
                  <Route path="/category/:id" component={ItemContainer} />
                  <Route path="/item/:id" component={ItemDetailContainer} />
                </Switch>
              </div>
              <div className="col-2">
                <CartContainer/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
