import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import axios from "../../lib/axios";

class PratoForm extends Component {
    state = { isLoading: false, error: false, restaurants: [] };

    async componentDidMount(){
        try{
            const restaurantsResponse = await axios.get("/restaurants");
            this.setState({restaurants: restaurantsResponse.data._embedded.restaurants, isLoading: false});
        } catch(error){
            this.setState({error, isLoading: false})
        }
    }

    render() { 
        const { restaurants } = this.state;
        const { handleChange, handleBlur, values } = this.props;
        return (
            <div className="search-box">
                <p className="search-box-title">Dados</p>
                <Form>
                    <label htmlFor="name">
                        Nome
                    </label>
                    <fieldset>
                        <Field type="text" name="name" id="name"/>
                    </fieldset>
                    <label htmlFor="price">
                        Preço
                    </label>
                    <fieldset>
                        <Field type="number" name="price" id="price"/>
                    </fieldset>
                    <label htmlFor="restaurant">
                        Restaurante
                    </label>
                    <fieldset>
                        {console.log("values.restaurant", values.restaurant)}
                        <select 
                            name="restaurant" 
                            id="restaurant" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.restaurant}
                        >
                            <option value="">Selecione um restaurante</option>
                            { restaurants && restaurants.map((r, i) => <option key={`restaurant-select-${i}`} value={r._links.self.href} >{r.name}</option> ) }
                        </select>
                    </fieldset>
                    <ErrorMessage name="name"/>
                    <div className="buttons-wrapper">
                        <button type="submit">Enviar</button>
                        <Link className="button cancel-button" to="/pratos">Cancelar</Link>
                    </div>
                </Form>
            </div>
        );
    }
}
 
export default withFormik({
    mapPropsToValues: ({menu = {}}) => {
        const {name = "", price = "", restaurantId = ""} = menu;
        const data = {name, price, restaurant: restaurantId};
        if(restaurantId)
            data.restaurant = `http://localhost:8080/restaurants/${restaurantId}`;
        
        return data;
    },
    validate: ({name}) => ( name ? {} : {name: "Campo nome é obrigátorio!"} ),
    handleSubmit: async (values, {props, setSubmitting}) => {
        setSubmitting(true);
        await props.handleSubmit(values);
        setSubmitting(false);
    }
})(PratoForm);