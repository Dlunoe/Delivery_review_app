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
                This is header.
            </div>
        )
    }
}

export default Header;