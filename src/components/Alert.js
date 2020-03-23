import React from 'react';

export const Alert = () => {
  return (
    <div className='alert alert-dismissible alert-danger mt-3'>
      <p className='mb-0'>Summoner doesn't exist! Type correct name please.</p>
    </div>
  );
};

export default Alert;
