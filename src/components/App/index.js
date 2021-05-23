import React from 'react';
import Button from '../Button';
import Stage from '../Stage';
import Cards from '../Cards';
import data from '../../data.json';
import './style.css';
import Design from '../../../src/desktop.png'
import DesignM from '../../../src/mobile.png'


class App extends React.Component{ 
  state = {
    show: true
  }

   showCards = () => { 
     const show = this.state.show
     if (show === true) {
    this.setState({show : false})
     } else {
      this.setState({show : true})
     }
  }
  
  render() {
    console.log(this.state.show)
    return (
      // I created this extra div here to add the design images outside the cointainer so I could use them as reference
      <div>
      <div className="container">
      <Stage data={data.page.components[0]} />
        <Cards data={data.page.components[1]} show={this.state.show}/>
        <Button data={data.page.components[2]} show={this.state.show} showCards={this.showCards} />
     
      </div>
      {/* <img src={Design} style={{maxWidth:'100%'}}/> */}
      {/* <img src={DesignM} style={{maxWidth:'100%'}}/> */}
      </div>
    );
  }
}

export default App;
