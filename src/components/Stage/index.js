import React from 'react';
import './style.css';

const Stage = ({ data }) => {
  console.log(data, 'stage')
  return <>
    <div className='overlay' />
    <div className='stage' style={{ backgroundImage: `url(${data.image})` }} />
    <div className='stage-header'>
      <h1>{data.siteTitle}</h1>
      <h3>{data.siteSubTitle}</h3>
    </div>
  </>
}

export default Stage;
