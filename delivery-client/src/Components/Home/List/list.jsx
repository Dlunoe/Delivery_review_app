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
                <ul className="searchList">
                    <li className="searchItem">
                        <h4 className="searchName">business name</h4>
                        <p className="searchAddress">address</p>
                    </li>
                    <li className="searchItem">
                        <p className="searchName">business name</p>
                        <p className="searchAddress">address</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;