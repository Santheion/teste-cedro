import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { RestauranteForm } from "../components";
import axios from "../lib/axios";

class RestauranteEditar extends Component {
    state = { isLoading: false, error: false, restaurant: {} };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        this.setState({isLoading: true});
        const { id } = this.props.match.params;
        try{
            const restaurantResponse = await axios.get(`/restaurants/${id}`);
            this.setState({restaurant: restaurantResponse.data, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    async handleSubmit(data){
        const { id } = this.props.match.params;
        const formData = {name: data.name};
        await axios.patch(`/restaurants/${id}`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        this.props.history.push("/restaurantes")
    }

    render() { 
        const { error, restaurant, isLoading } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Editar Restaurante</h1>
                { isLoading && "Carregando..." }
                { !isLoading && <RestauranteForm handleSubmit={this.handleSubmit} restaurant={restaurant} /> }
            </div>
        );
    }
}
 
export default withRouter(RestauranteEditar);