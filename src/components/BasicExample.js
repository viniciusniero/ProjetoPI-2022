import React from 'react';
import { useForm } from '@formspree/react';
import { Col } from 'reactstrap';

function ContactForm() {
    
  const [state, handleSubmit] = useForm("xbjbwapd");
  if (state.succeeded) {
      return <Col><p className='feedback' ju>Thanks for joining!</p></Col>;
  }
  return (
      <form onSubmit={handleSubmit} className='Form'>
        <p className='titiloForm'>Escolha os Produtos</p>
      <div className='marginentreeles'>
        <label htmlFor="email">
      </label>
      <input
       className='nameinput'
        id="name"
        type="name"
        name="Nome"
        placeholder="Seu Nome Completo"
      />
      </div>
      <div className='marginentreeles'>
      <label htmlFor="select">
      </label>
      <select class="form-select" id="select1"
        type="select" 
        name="Pedido">
        <option value="Nada">Nada</option>
        <option value="Achocolatado">Achocolatado</option>
        <option value="Coxinha">Coxinha</option>
        <option value="Suco em Caixa">Suco em Caixa</option>
        <option value="Lanche Natural">Lanche Natural</option>
        <option value="Pão de Queijo">Pão de Queijo</option>
        <option value="Bolo (Pedaço)">Bolo (Pedaço)</option>
        <option value="Esfirra">Esfirra</option>
        <option value="Refrigerante">Refrigerante</option>
        <option value="Salgado">Salgado</option>
        <option value="Croissant de Pizza">Croissant de Pizza</option>
        <option value="Gelatina">Gelatina</option>
        <option value="Hamburgao de Forno">Hamburgao de Forno</option>
      </select>
      </div>

      <div className='marginentreeles'>
      <label htmlFor="select">
      </label>
      <select class="form-select" id="select2"
        type="select" 
        name="Pedido">
        <option value="Nada">Nada</option>
        <option value="Achocolatado">Achocolatado</option>
        <option value="Coxinha">Coxinha</option>
        <option value="Suco em Caixa">Suco em Caixa</option>
        <option value="Lanche Natural">Lanche Natural</option>
        <option value="Pão de Queijo">Pão de Queijo</option>
        <option value="Bolo (Pedaço)">Bolo (Pedaço)</option>
        <option value="Esfirra">Esfirra</option>
        <option value="Refrigerante">Refrigerante</option>
        <option value="Salgado">Salgado</option>
        <option value="Croissant de Pizza">Croissant de Pizza</option>
        <option value="Gelatina">Gelatina</option>
        <option value="Hamburgao de Forno">Hamburgao de Forno</option>
      </select>
      </div>
      <div>
      <label htmlFor="select">
      </label>
      <select class="form-select" id="select3"
        type="select" 
        name="Pedido">
        <option value="Nada">Nada</option>
        <option value="Achocolatado">Achocolatado</option>
        <option value="Coxinha">Coxinha</option>
        <option value="Suco em Caixa">Suco em Caixa</option>
        <option value="Lanche Natural">Lanche Natural</option>
        <option value="Pão de Queijo">Pão de Queijo</option>
        <option value="Bolo (Pedaço)">Bolo (Pedaço)</option>
        <option value="Esfirra">Esfirra</option>
        <option value="Refrigerante">Refrigerante</option>
        <option value="Salgado">Salgado</option>
        <option value="Croissant de Pizza">Croissant de Pizza</option>
        <option value="Gelatina">Gelatina</option>
        <option value="Hamburgao de Forno">Hamburgao de Forno</option>
      </select>
      </div>
      <div className='button-form'>
      <button type="submit" className='button' disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;