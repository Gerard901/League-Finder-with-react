import React, { Component } from 'react';

class Division extends Component {
  render() {
    if (this.props.division !== undefined) {
      const { tier, rank, leaguePoints, wins, losses } = this.props.division;
      const matches = wins + losses;
      const winrate = ((wins / matches) * 100).toFixed(2);
      return (
        <div>
          <div className='card mb-3'>
            <h3 className='card-header text-center'>
              {tier} {rank}{' '}
              <span className='badge badge-pill badge-success'>
                {leaguePoints}lp
              </span>
            </h3>
            <div className='card-body'>
              <h5 className='card-title text-center'>
                Wins: {wins} Losses: {losses}{' '}
              </h5>
              <h6 className='card-subtitle text-center text-muted'>
                WINRATIO: {winrate}%
              </h6>
            </div>
            <img
              src={'./divisions/Emblem_' + tier + '.png'}
              alt=''
              style={{ width: '60%', display: 'block', margin: 'auto' }}
            ></img>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='card mb-3'>
            <h3 className='card-header text-center'>UNRANKED</h3>
            <div className='card-body'></div>
            <img
              src={'./divisions/unranked.png'}
              alt=''
              style={{ width: '60%', display: 'block', margin: 'auto' }}
            ></img>
          </div>
        </div>
      );
    }
  }
}

export default Division;
