import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import SummonerItem from './components/SummonerItem';
import Division from './components/Division';
import Champions from './components/Champions';
import './bootswatch-lux.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search />
          <div className='card card-body my-3'>
            <div className='row'>
              <div className='col-md-3' id='profile'>
                <SummonerItem />
              </div>
              <div className='col-md-5' id='division'>
                <Division />
              </div>
              <div className='col-md-4' id='champions'>
                <Champions />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
