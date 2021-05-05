import React, {Component} from 'react';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Feed.css"

//navbar imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Switch, Route, Link }from "react-router-dom"

class Feed extends Component{
    render(){
      return (
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/Feed">UFBOOK</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Perfil">Meu Perfil</Nav.Link>
              <Nav.Link href="/Feed">Feed</Nav.Link>
              <Nav.Link href="/Mensagens">Mensagens</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      )
    }
}

export default Feed;