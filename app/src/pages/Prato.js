import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PratoList } from "../components";
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
            const menusResponse = await axios.get("/menus");
            this.setState({menus: menusResponse.data._embedded.menus, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    async handleDelete(id){
        if(window.confirm('Deseja remover esse prato?')){
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
                <Link to="/pratos/cadastrar" className="button create-button">Cadastrar Novo</Link>
                <h1>Pratos</h1>
                <PratoList {...this.state} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
 
export default Pratos;