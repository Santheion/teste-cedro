import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field, ErrorMessage } from "formik";

class PratoForm extends Component {
    render() { 
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
    mapPropsToValues: ({menu}) => {
        if(menu && menu.name)
            return { name: menu.name };
        else
            return { name: "" };
    },
    validate: ({name}) => ( name ? {} : {name: "Campo nome é obrigátorio!"} ),
    handleSubmit: async (values, {props, setSubmitting}) => {
        setSubmitting(true);
        await props.handleSubmit(values);
        setSubmitting(false);
    }
})(PratoForm);