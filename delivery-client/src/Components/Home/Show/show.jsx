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
                <h3>Business Name</h3>
                <p>Business Address</p>
                <p>Front/Back loading: N/A</p>
                <ul className="reviewsList">
                    <li>
                        <p>Mock review 1</p>
                    </li>
                    <li>
                        <p>Mock review 2</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Show;