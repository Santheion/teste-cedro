import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";

class SearchBox extends Component {
    render() { 
        return (
            <div className="search-box">
                <p className="search-box-title">Filtro</p>
                <Form>
                    <label htmlFor="search-input">
                        Nome
                    </label>
                    <fieldset>
                        <Field type="text" name="name" id="search-input"/>
                    </fieldset>
                    <div className="buttons-wrapper">
                        <button type="submit">Pesquisar</button>
                        <Link to="/restaurantes/cadastrar" className="button">Cadastrar Novo</Link>
                    </div>
                </Form>
            </div>
        );
    }
}
 
export default withFormik({
    mapPropsToValues: () => ({name: ""}),
    handleSubmit: async ({name}, {props, setSubmitting}) => {
        setSubmitting(true);
        await props.handleFilter(name);
        setSubmitting(false);
    }
})(SearchBox);