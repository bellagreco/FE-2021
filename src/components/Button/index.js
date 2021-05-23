import React, {setState} from 'react';
import './style.css';



const Button = ({data, show, showCards}) => {


  console.log(show)
  return <>
  <div className='btn-container'>
  <a className='btn' onClick={showCards}>{show === true ? data.buttonLabelHide : data.buttonLabelShow}</a>
  </div>
  </>
}

export default Button;
