import React, { useState } from 'react';
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('handleSubmit')
      await UsersService.login({ email: email, password: password });
      //setRedirectToHome(true);       
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (

    <div className="login">
      <div className="border d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="card card-login">
          <div className="card-header text-center">
            <h3><b>Exemplos React</b></h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
