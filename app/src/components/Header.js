import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const NavLinkWrapper = (props) => <NavLink {...props} activeClassName="selected" exact/>

class Header extends Component{
    render(){
        return (
            <header>
                <div className="menu">
                    <NavLinkWrapper to="/">Home</NavLinkWrapper>
                    <NavLinkWrapper to="/restaurantes">Restaurantes</NavLinkWrapper>
                    <NavLinkWrapper to="/pratos">Pratos</NavLinkWrapper>
                </div>
            </header>
        )
    }
}

export default withRouter(Header)
