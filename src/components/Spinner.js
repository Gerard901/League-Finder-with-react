import React, { Fragment } from 'react';
import spinner from '../spinner.gif';

export const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          alt='loading'
          style={{ width: '200px', margin: 'auto', display: 'block' }}
        ></img>
      </Fragment>
    </div>
  );
};

export default Spinner;
