import React, {Component} from 'react';
import './headerStyle.css';
import dock from './loadingDock.png'


class Header extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="headerMain">
                <br />
                <h2>Delivery App</h2>
            </div>
        )
    }
}

export default Header;