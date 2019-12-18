import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RestaurantList extends Component {
    constructor(props){
        super(props);

        this.RestaurantItem = this.RestaurantItem.bind(this);
    }

    RestaurantItem({restaurant}){
        const { handleDelete } = this.props;
        return (
            <tr className="restaurant-table">
                <td><button className="delete-button" onClick={() => handleDelete(restaurant.id)}><img src={require("../imgs/delete-icon.svg")}/></button></td>
                <td><button className="edit-button" onClick={() => this.props.history.push(`/restaurantes/${restaurant.id}`)}><img src={require("../imgs/edit-icon.svg")}/></button></td>
                <td>{restaurant.name}</td>
            </tr>
        )
    } 

    render() { 
        const { isLoading, restaurants } = this.props;
        const { RestaurantItem } = this;
        return (
            <table className="items-list" cellSpacing="0">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Restaurantes</td>
                    </tr>
                </thead>
                <tbody>
                    { restaurants && restaurants.map((r, i) => <RestaurantItem key={`restaurant-${i}`} restaurant={r}/>) }
                </tbody>
            </table>
        );
    }
}
 
export default withRouter(RestaurantList);