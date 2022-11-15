import React, { Component, useState } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,Media, Container, Row, Col,} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
            return (
              
              <Container id='produtos'>
      <Row >
        <Col xs={6} md={4}>
        <img src="assets/images/achocolatado.jpg"></img>
        <p class="justify-content-center m-1">Achocolatado</p>

        </Col>
        <Col xs={6} md={4}>
          <img src="assets/images/coxinha.jpg"></img>
          <p class="justify-content-center m-1">Coxinha</p>
        </Col>
        <Col xs={6} md={4}>
        <img src="assets/images/sucoemcaixa.jpg"></img>
        <p class="justify-content-center m-1">Suco em Caixa</p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
        <img src="assets/images/Bolo (Pedaço).jpg"></img>
        <p class="justify-content-center m-1">Bolo (Pedaço)</p>
        </Col>
        <Col xs={6} md={4}>
          <img src="assets/images/Croissant.jpg"></img>
          <p class="justify-content-center m-1">Croissant de Pizza</p>
        </Col>
        <Col xs={6} md={4}>
        <img src="assets/images/Enroladinho de presunto e queijo.jpg"></img>
        <p class="justify-content-center m-1">Salgado</p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
        <img src="assets/images/Esfirra.jpg"></img>
        <p class="justify-content-center m-1">Esfirra</p>
        </Col>
        <Col xs={6} md={4}>
          <img src="assets/images/gelatina.jpg"></img>
          <p class="justify-content-center m-1">Gelatina</p>
        </Col>
        <Col xs={6} md={4}>
        <img src="assets/images/hamburgaodeforno.jpg"></img>
        <p class="justify-content-center m-1">Hamburgao de Forno</p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
        <img src="assets/images/lanchenatural.jpg"></img>
        <p class="justify-content-center m-1">Lanche Natural</p>
        </Col>
        <Col xs={6} md={4}>
          <img src="assets/images/paodequeijo.jpg"></img>
          <p class="justify-content-center m-1">Pão de Queijo</p>
        </Col>
        <Col xs={6} md={4}>
        <img src="assets/images/refrigerantelata.jpg"></img>
        <p class="justify-content-center m-1">Refrigerante</p>
        </Col>
      </Row>
    </Container>
    
            );
    }
}

export default Menu;