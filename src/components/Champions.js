import React, { Component } from 'react';
import Division from './Division';

class Champions extends Component {
  state = {
    champion_name: 'Leesin',
    avatar_id: '3',
    summoner_lvl: 222,
    champion_points: 632432
  };

  render() {
    return (
      <div className='card mb-3'>
        <h3 className='card-header text-center'>BEST CHAMPIONS</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + this.state.champion_name + '.png'}
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {this.state.champion_points}
              </span>
            </h4>
          </li>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + this.state.champion_name + '.png'}
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {this.state.champion_points}
              </span>
            </h4>
          </li>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + this.state.champion_name + '.png'}
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {this.state.champion_points}
              </span>
            </h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default Champions;
