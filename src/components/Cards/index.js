import React from 'react';
import './style.css';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const Cards = ({ data, show }) => {
  console.log(data)
  return <>
  <h1 className="page-title">{data.componentTitle}</h1>
  <SlideDown className={'my-dropdown-slidedown'}>
  {show === true && 
    <div className='cards'>

      {data.cards.map(card => {
        const { title, anchorUrl, anchorText, image, description } = card
        return <div className='card'>

          <img alt='image' src={image} />
          <div className='card-text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className='link'> 
          <a href={anchorUrl}>{anchorText}</a>
</div>
        </div>
      })}
    </div>
}</SlideDown>
  </>
}

export default Cards;
