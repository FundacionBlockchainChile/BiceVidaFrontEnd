import React from 'react';
import { connect } from 'react-redux';
import { getSeguro } from '../actions/seguros';

const Selector = (props) => {
  let state = {
    id: 0,
  };

  const setSelection = (e) => {
    state.id = e.target.value;
  };

  const handelGetSeguro = (e) => {
    e.preventDefault();
    if (state.id !== 0) {
      props.getSeguro(state.id);
    }
  };

  return (
    <div>
      <form className="selector-form" onSubmit={handelGetSeguro}>
        <select
          onChange={setSelection}
          className="selector-form-input"
          name="seguros"
          id="seguros"
          placeholder="Label"
        >
          <option value="0">Selecciona tu Seguro</option>
          <option value="58">a. Seguro Vida Activa (ID: 58)</option>
          <option value="59">b. Seguro Viaje Protegido (ID: 59)</option>
        </select>
        <button className="buttonBice">Botón</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSeguro: (id) => dispatch(getSeguro(id)),
});

export default connect(undefined, mapDispatchToProps)(Selector);
