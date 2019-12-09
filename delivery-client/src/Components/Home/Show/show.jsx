import React, {Component} from 'react';
import './showStyles.css';

class Show extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="showDiv">
                <div className="businessContainer">
                    <h3>Business Name</h3>
                    <p>Business Address</p>
                    <p>Front/Back loading: N/A</p>
                </div>
                <div className="reviewsContainer">
                    <ul className="reviewsList">
                        <li className="reviews">
                            <p className="reviewAuthor">Review Author</p>
                            <p className="reviewDate">00/00/0000</p>
                            <p className="reviewBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li className="reviews">
                            <p className="reviewAuthor">Review Author</p>
                            <p className="reviewDate">00/00/0000</p>
                            <p className="reviewBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li className="reviews">
                            <p className="reviewAuthor">Review Author</p>
                            <p className="reviewDate">00/00/0000</p>
                            <p className="reviewBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Show;