import React, { Component } from 'react';
import { MenuList } from "../components";
import axios from "../lib/axios";

class Pratos extends Component {
    state = { isLoading: false, menus: [], error: false };

    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    async getMenus(filter){
        this.setState({isLoading: true});
        try{
            const url = filter ? `/menus/search/findByName?name=${filter}` : "/menus";
            const menusResponse = await axios.get(url);
            this.setState({menus: menusResponse.data._embedded.menus, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    async handleDelete(id){
        if(window.confirm('Deseja remover esse restaurante?')){
            await axios.delete(`/menus/${id}`)
            this.getMenus();
        }
    }

    async handleFilter(filter){
        this.getMenus(filter);
    }

    componentDidMount(){
        this.getMenus();
    }

    render() { 
        const { error } = this.state;
        return (
            <div className="list-wrapper">
                <h1>Pratos</h1>
                <MenuList {...this.state} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
 
export default Pratos;