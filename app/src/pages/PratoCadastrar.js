import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { PratoForm } from "../components";
import axios from "../lib/axios";

class PratoCadastrar extends Component {
    state = { isLoading: false, error: false };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(data){
        const { name, price, restaurant } = data;

        console.log("data", data);

        await axios.post("/menus", { name, price, restaurant }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        this.props.history.push("/pratos")
    }

    render() { 
        const { error } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Novo Restaurante</h1>
                <PratoForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
 
export default withRouter(PratoCadastrar);  