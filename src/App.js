import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';
import { autoLogin, login } from './store/login';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { data } = useSelector((state) => state.login.user);
  console.log(data);
  const state = useSelector((state) => state);
  const modal = state.modal;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }
  return (
    <div>
      {modal && <p>AQUI E O MODAL</p>}
      <p> total {state.contador.total}</p>
      <button onClick={() => dispatch(incrementar())}>INCREMENTAR</button>
      <button onClick={() => dispatch(reduzir())}>REDUZIR</button>
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>fechar</button>
      <p>--------------------------------------------</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Enviar</button>
      </form>
      <p>{data?.email}</p>
    </div>
  );
}

export default App;
