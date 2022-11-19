import React, { Component } from 'react';
import { Container, Row, Col,} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
            return (
              
              <Container id='produtos'>
      <Row >
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/achocolatado.jpg" alt='Achocolatado'></img>
        <p class="justify-content-center m-1">Achocolatado</p>

        </Col>
        <Col xs={12} sm={4} xl={4}>
          <img src="assets/images/coxinha.jpg" alt='Coxinha'></img>
          <p class="justify-content-center m-1">Coxinha</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/sucoemcaixa.jpg" alt='Suco em Caixa'></img>
        <p class="justify-content-center m-1">Suco em Caixa</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/Bolo (Pedaço).jpg" alt='Bolo (Pedaço)'></img>
        <p class="justify-content-center m-1">Bolo (Pedaço)</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
          <img src="assets/images/Croissant.jpg" alt='Croissant de Pizza'></img>
          <p class="justify-content-center m-1">Croissant de Pizza</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/Enroladinho de presunto e queijo.jpg" alt='Salgado'></img>
        <p class="justify-content-center m-1">Salgado</p>
        </Col>
      </Row>

      <Row>
      <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/Esfirra.jpg" alt='Esfirra'></img>
        <p class="justify-content-center m-1">Esfirra</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
          <img src="assets/images/gelatina.jpg" alt='Gelatina'></img>
          <p class="justify-content-center m-1">Gelatina</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/hamburgaodeforno.jpg" alt='Hamburgão de Forno'></img>
        <p class="justify-content-center m-1">Hamburgão de Forno</p>
        </Col>
      </Row>

      <Row>
      <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/lanchenatural.jpg" alt='Lanche Natural'></img>
        <p class="justify-content-center m-1">Lanche Natural</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
          <img src="assets/images/paodequeijo.jpg"alt='Pão de Queijo'></img>
          <p class="justify-content-center m-1">Pão de Queijo</p>
        </Col>
        <Col xs={12} sm={4} xl={4}>
        <img src="assets/images/refrigerantelata.jpg" alt='Refrigerante'></img>
        <p class="justify-content-center m-1">Refrigerante</p>
        </Col>
      </Row>
    </Container>
    
            );
    }
}

export default Menu;