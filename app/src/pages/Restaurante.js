import React, { Component } from 'react';
import { SearchBox, RestaurantList } from "../components";
import axios from "../lib/axios";

class Restaurante extends Component {
    state = { isLoading: false, restaurants: [], error: false };

    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    async getRestaurants(filter){
        this.setState({isLoading: true});
        try{
            const url = filter ? `/restaurants/search/findByName?name=${filter}` : "/restaurants";
            const restaurantsResponse = await axios.get(url);
            this.setState({restaurants: restaurantsResponse.data._embedded.restaurants, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    async handleDelete(id){
        if(window.confirm('Deseja remover esse restaurante?')){
            await axios.delete(`/restaurants/${id}`)
            this.getRestaurants();
        }
    }

    async handleFilter(filter){
        this.getRestaurants(filter);
    }

    componentDidMount(){
        this.getRestaurants();
    }

    render() { 
        const { error } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Restaurante</h1>
                <SearchBox handleFilter={this.handleFilter} />
                <RestaurantList {...this.state} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
 
export default Restaurante;