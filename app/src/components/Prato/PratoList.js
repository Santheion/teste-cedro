import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../lib/axios";

class PratoList extends Component {
    constructor(props){
        super(props);

        this.PratoItem = this.PratoItem.bind(this);
    }

    PratoItem({menu}){
        const { handleDelete } = this.props;
        return (
            <tr>
                <td><button className="delete-button" onClick={() => handleDelete(menu.id)}><img src={require("../../imgs/delete-icon.svg")}/></button></td>
                <td><button className="edit-button" onClick={() => this.props.history.push(`/pratos/${menu.id}`)}><img src={require("../../imgs/edit-icon.svg")}/></button></td>
                <td>{menu.restaurantName}</td>
                <td>{menu.name}</td>
                <td>R${menu.price.toFixed(2)}</td>
            </tr>
        )
    } 

    render() { 
        const { menus } = this.props;
        const { PratoItem } = this;
        return (
            <table className="items-list" cellSpacing="0">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Restaurantes</td>
                        <td>Prato</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    { menus && menus.map((m, i) => <PratoItem key={`menu-${i}`} menu={m}/>) }
                </tbody>
            </table>
        );
    }
}
 
export default withRouter(PratoList);