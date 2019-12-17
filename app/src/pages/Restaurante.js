import React, { Component } from 'react';
import { SearchBox } from "../components";

class Restaurante extends Component {
    state = {  }
    render() { 
        return (
            <div className="list-wrapper">
                <h1>Restaurante</h1>
                <SearchBox />
            </div>
        );
    }
}
 
export default Restaurante;