import React, { Component } from 'react';

class Champions extends Component {
  render() {
    const {
      champion_points1,
      champion_points2,
      champion_points3,
      name1,
      name2,
      name3,
      title
    } = this.props;

    return (
      <div className='card mb-3'>
        <h3 className='card-header text-center'>{title}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + name1 + '.png'}
              alt=''
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {' '}
                {champion_points1}
              </span>
            </h4>
          </li>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + name2 + '.png'}
              alt=''
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {champion_points2}
              </span>
            </h4>
          </li>
          <li className='list-group-item d-flex'>
            <img
              style={{ width: '30', display: 'block' }}
              src={'./champion/' + name3 + '.png'}
              alt=''
            ></img>
            <h4 className='ml-3 card-title'>
              Mastery points:<br></br>
              <span className='mt-2 badge badge-pill badge-warning'>
                {champion_points3}
              </span>
            </h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default Champions;
