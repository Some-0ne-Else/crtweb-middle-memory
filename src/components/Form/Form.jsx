import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../../services/actions';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const userRef = React.useRef(null);
  const userName = useSelector((state) => state.userName);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername({ userName: userRef.current.value }));
    e.target.closest('form').reset();
  };

  return userName === 'DefaultUser' ? (
    <form className="form" onSubmit={onFormSubmit}>
      <p className="form__caption">Представьтесь</p>
      <input ref={userRef} className="form__input" type="text" required minLength="3" />
      <button className="form__button" type="submit">ОК</button>
    </form>
  ) : <p>{`Привет, ${userName}!`}</p>;
};
Form.propTypes = {
};
export default Form;
