import './MemoryCard.css'
import React, { Component } from 'react'; 
import dlogo from './d_logo.png'


//import App from './App';

class MemoryCard extends Component {
  
    clickHandler = () => {
        alert("card Clicked")
    }

    render() {
        return (
           
        <div className="MemoryCard" onClick={this.clickHandler}>
            <div className="MemoryCardInner" >
                    <div className="MemoryCardBack" >
                        <img src={dlogo} alt="Logo"/>
                    </div>
                    <div className="MemoryCardFront" >
                        ∆
                    </div>
                </div>
        </div>
        )
    }

} 
export default MemoryCard;