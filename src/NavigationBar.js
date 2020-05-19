import React, { Component } from 'react'
import {  Navbar, NavbarBrand, Nav, NavbarText } from 'reactstrap';
import {Link} from 'react-router-dom';
export default class NavigationBar extends Component {
    state = { redirect: null };
    logout = () => {
        localStorage.setItem('userinfo', '');
        this.props.history.push('/')
    }

    render() {
        let userinfo;
        let LoginHtml;
        let Logout;
        if(localStorage.getItem('userinfo')){
             userinfo = JSON.parse(localStorage.getItem('userinfo')) ;
        }
       
        if(userinfo){
            Logout  = <Link onClick={this.logout} to='#'>Logout</Link>;
            LoginHtml = `Welcome ${userinfo.name}`;
        }
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Xabia Assignment</NavbarBrand>
                <Nav className="mr-auto" navbar></Nav>
                <NavbarText> { LoginHtml} {Logout}</NavbarText>      
            </Navbar>
        )
    }
}
