import React, {Component} from 'react';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Feed.css"

//navbar imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//dropdown imports
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


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
            <DropdownButton id="dropdown-basic-button" title="">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Navbar>
        </div>
      )
    }
}

export default Feed;