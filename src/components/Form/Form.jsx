import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [user, setUser] = React.useState('');

  const onChange = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form className="form">
      <input className="form__text" type="text" onChange={onChange} />
      <button className="form__button" type="submit" onClick={(e) => onSubmit(e, user)}>Ок</button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
