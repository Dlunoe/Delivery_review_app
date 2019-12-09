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
                            <p>Review Author</p>
                            <p>00/00/0000</p>
                            <p>Mock review 1</p>
                        </li>
                        <li className="reviews">
                            <p>Review Author</p>
                            <p>00/00/0000</p>
                            <p>Mock review 2</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Show;