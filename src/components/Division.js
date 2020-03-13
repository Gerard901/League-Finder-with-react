import React, { Component } from 'react';

class Division extends Component {
  state = {
    winrate: '30',
    summoner_lvl: 222,
    division_tier: 'Challenger',
    division_rank: 'III',
    lp: 61,
    wins: 100,
    losses: 67
  };

  render() {
    return (
      <div>
        <div className='card mb-3'>
          <h3 className='card-header text-center'>
            {this.state.division_tier} {this.state.division_rank}{' '}
            <span className='badge badge-pill badge-success'>
              {this.state.lp}lp
            </span>
          </h3>
          <div className='card-body'>
            <h5 className='card-title text-center'>
              Wins: {this.state.wins} Losses: {this.state.losses}{' '}
            </h5>
            <h6 className='card-subtitle text-center text-muted'>
              WINRATIO: {this.state.winrate}%
            </h6>
          </div>
          <img
            src={'./divisions/Emblem_' + this.state.division_tier + '.png'}
            alt=''
            style={{ width: '60%', display: 'block', margin: 'auto' }}
          ></img>
        </div>
      </div>
    );
  }
}

export default Division;
