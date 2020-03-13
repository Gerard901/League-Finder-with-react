import React, { Component } from 'react';

class SummonerItem extends Component {
  state = {
    name: 'Mruwa',
    avatar_id: '3',
    summoner_lvl: 222
  };

  render() {
    return (
      <div>
        <div className='card mb-3'>
          <h3 className='card-header text-center'>{this.state.name}</h3>
          <div className='card-body'>
            <h6 className='card-subtitle text-center text-muted'>
              Summoner level: {this.state.summoner_lvl}
            </h6>
          </div>
          <img
            src={'./profileicon/' + this.state.avatar_id + '.png'}
            alt=''
            style={{ width: '100%', display: 'block' }}
          ></img>
        </div>
      </div>
    );
  }
}

export default SummonerItem;
