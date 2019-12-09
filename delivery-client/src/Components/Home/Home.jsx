import React, {Component} from 'react';
import Show from './Show/show';
import List from './List/list';
import './homeStyle.css';

class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="homeContainer">
                <List className="listComponent"/>
                <Show className="showComponent"/>
            </div> 
        )
    }
}
export default Home;