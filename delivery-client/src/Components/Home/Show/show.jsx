import React, {Component} from 'react';

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
                        <li>
                            <p>Mock review 1</p>
                        </li>
                        <li>
                            <p>Mock review 2</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Show;