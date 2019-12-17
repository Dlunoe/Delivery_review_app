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
                <form>
                    <input type="text" className="searchBox" placeholder="search" />
                    <input type="submit" className="searchSubmit" value="submit" />
                </form>
                <ul className="searchList">
                    <li className="searchItem">
                        <h4 className="searchName">business name</h4>
                        <p className="searchAddress">address</p>
                        <p className="searchFront">Front/Back Loading: Front</p>
                        <p className="searchDock">Dock: 7</p>
                    </li>
                    <li className="searchItem">
                        <p className="searchName">business name</p>
                        <p className="searchAddress">address</p>
                        <p className="searchFront">Front/Back Loading: Front</p>
                        <p className="searchDock">Dock: 7</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;