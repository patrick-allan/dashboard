import React, { useState } from 'react';
import UsersService from '../../services/user'
import './Register.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [document, setDocument] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await UsersService.register({ name, email, username, password, birthdate, document});
      console.log('retorno:');
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <div className="login">
      <div className="border d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="card card-login">
          <h5 className="card-header">Register Dashboard</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label className="form-label mandatory">Nome</label>
                <input
                  name="name"
                  type="text"                  
                  className="form-control"  
                  value={name}
                  onChange={e => setName(e.target.value)}                
                />
                <div id="nameHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label className="form-label mandatory">CPF</label>
                <input
                  name="cpf"
                  type="text"
                  className="form-control" 
                  value={document}
                  onChange={e => setDocument(e.target.value)}                
                />
                <div id="documentHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label className="form-label mandatory">Data de Nascimento</label>
                <input
                  name="birthdate"
                  type="date"
                  className="form-control"  
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}               
                />
                <div id="birthdateHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"                                    
                  className="form-control"                  
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label className="form-label mandatory">Usuário</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"                 
                  value={username}
                  onChange={e => setUsername(e.target.value)} 
                />
                <div id="usernameHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label className="form-label mandatory">Senha</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"                 
                  value={password}
                  onChange={e => setPassword(e.target.value)} 
                />
              </div>

              <div className="mb-3">
                <label className="form-label mandatory">Confirme a senha</label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"                 
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)} 
                />
              </div>

              <div className="mb-1">
                {error && <div className="alert alert-danger" role="alert">Dados Incorretos. {error}  </div>}
              </div>

              <div className="mb-1">
                <button type="submit" className="btn btn-success">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}