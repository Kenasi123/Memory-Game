import './MemoryCard.css'
import React, { Component } from 'react'; 
import dlogo from './d_logo.png'

//import App from './App';

class MemoryCard extends Component {

    render() {
        return (
        <div class="MemoryCard" >
            <div class="MemoryCardInner" >
                    <div class="MemoryCardBack" >
                        <img src={dlogo} alt="Logo"/>
                    </div>
                    <div class="MemoryCardFront" >
                        ∆
                    </div>
                </div>
        </div>
        )
    }

} 
export default MemoryCard;