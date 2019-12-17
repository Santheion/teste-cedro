import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { RestauranteForm } from "../components";
import axios from "../lib/axios";

class RestauranteCadastrar extends Component {
    state = { isLoading: false, error: false };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(data){
        const formData = {name: data.name};

        await axios.post("/restaurants", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        this.props.history.push("/restaurantes")
    }

    render() { 
        const { error } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Novo Restaurante</h1>
                <RestauranteForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
 
export default withRouter(RestauranteCadastrar);