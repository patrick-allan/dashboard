import React from 'react';
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="login">
      <div className="border d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="card card-login">
          <div className="card-header text-center">
            <h3><b>Exemplos React</b></h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text"></div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" class="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
