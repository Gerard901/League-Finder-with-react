import React, { Component } from 'react';

class SummonerItem extends Component {
  render() {
    const { name, profileIconId, summonerLevel } = this.props.summoner;

    return (
      <div>
        <div className='card mb-3'>
          <h3 className='card-header text-center'>{name}</h3>
          <div className='card-body'>
            <h6 className='card-subtitle text-center text-muted'>
              Summoner level: {summonerLevel}
            </h6>
          </div>
          <img
            src={'./profileicon/' + profileIconId + '.png'}
            alt=''
            style={{ width: '100%', display: 'block' }}
          ></img>
        </div>
      </div>
    );
  }
}

export default SummonerItem;
