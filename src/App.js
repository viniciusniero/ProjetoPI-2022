import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuImg';
import './App.css';
import FormProdutos from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary" expand="sm">
         <div className='navbar'> 
          <NavbarBrand>
          <img src='assets/images/logo.png' height="60px" alt='Escola Santa Úrsula'/> Escola Santa Úrsula
          </NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
        <Navbar dark color="primary" expand="sm">
        <FormProdutos dark color="primary"></FormProdutos>
        </Navbar>
      </div>
    );
  }
}

export default App;
