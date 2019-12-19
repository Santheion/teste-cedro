import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { PratoForm } from "../components";
import axios from "../lib/axios";

class PratoEditar extends Component {
    state = { isLoading: false, error: false, restaurant: {} };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        this.setState({isLoading: true});
        const { id } = this.props.match.params;
        try{
            const menuResponse = await axios.get(`/menus/${id}`);
            this.setState({menu: menuResponse.data, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    async handleSubmit(data){
        const { id } = this.props.match.params;
        const { name, price, restaurant } = data;

        await axios.patch(`/menus/${id}`, { name, price, restaurant }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        this.props.history.push("/pratos")
    }

    render() { 
        const { error, menu, isLoading } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Editar Restaurante</h1>
                { isLoading && "Carregando..." }
                { !isLoading && <PratoForm handleSubmit={this.handleSubmit} menu={menu} /> }
            </div>
        );
    }
}
 
export default withRouter(PratoEditar);