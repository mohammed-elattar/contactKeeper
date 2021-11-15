import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ margin: 'auto', display: 'block', width: '200px' }}
        alt='loading...'
      />
    </Fragment>
  );
};

export default Spinner;
