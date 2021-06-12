import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [user, setUser] = React.useState('');

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.target.closest('form').reset();
    onSubmit(e, user);
  };
  return (
    <form className="form">
      <p className="form__caption">Введите имя</p>
      <input className="form__input" type="text" onChange={onChange} />
      <button className="form__button" type="submit" onClick={onFormSubmit}>Ок</button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
