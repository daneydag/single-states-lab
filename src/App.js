import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart : [] ,
        total: 0
    }
  }
  
buy = (thing, price)=> {
    this.setState((state)=>{
        state.cart.push(thing)
        state.total += parseFloat(price)
        return state
    })
}



  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Lemon" price="10.00" buy = {this.buy} />
        <Product type="Tomato" price="5.00" buy = {this.buy}/>
        <Product type="Avocado" price="100.00" buy = {this.buy} />
        <Product type="Pickle" price="3.00" buy = {this.buy}/>
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;
