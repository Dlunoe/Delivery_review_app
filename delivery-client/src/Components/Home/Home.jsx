import React, {Component} from 'react';
import Show from './Show/show';
import List from './List/list';

class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="homeContainer">
                <List />
                <Show />
            </div> 
        )
    }
}
export default Home;