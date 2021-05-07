import React, {Component} from 'react';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./Login.css";
import Logo from "./logo.png";

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//img imports 
import Image from 'react-bootstrap/Image'


//Input imports
import InputGroup from 'react-bootstrap/InputGroup'


class Login extends Component{
    render(){
      return (
        <div className="container d-flex justify-content-center" id="container-home">
          <div className="align-self-center">
            <Image src={Logo}  roundedCircle />
            <h1></h1>
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="ex: myEmail@mail.com"
                  aria-label="ex: myEmail@mail.com"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Senha</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon1"
                  />
                  </InputGroup>
                  <div>
                    <Button href="/Feed" variant="primary">Entrar</Button>
                  </div>
                  <Button variant="">Criar conta</Button>
                </div>
              </div>
            </div>
          </div>   
        )
    }
}

export default Login;