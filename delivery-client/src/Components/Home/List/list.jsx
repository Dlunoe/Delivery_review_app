import React, {Component} from 'react';
import './listStyle.css';

class List extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="searchListContainer">
                <ul>
                    <li>
                        <p>business name</p>
                        <p>address</p>
                    </li>
                    <li>
                        <p>business name</p>
                        <p>address</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;