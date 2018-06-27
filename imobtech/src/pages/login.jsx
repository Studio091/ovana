import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Login extends Component {
 constructor() {
    super();
    this.state = {
    
      email_user: "",
      password_user: ""
		
		
    };
		

   this.onChange = (evento) => {
     const state = Object.assign({}, this.state);
     const campo = evento.target.name;
     state[campo] = evento.target.value;
     this.setState(state);
   };
   
  }
	
	

    render() {
		const isEnabled = this.state.email_user && this.state.password_user;
    	console.log(isEnabled);
        return (
	
	<div>
	<Navbar />
	<br/>
    <br/>
    <br/>
   <div className="search">
   		<div className="col-md-4 teste float-search">
			<h4>Entre em sua conta</h4>
   		<form role="form">
    				
					<div className="form-group">
						<input type="text" className="form-control" id="email" onChange={this.onChange} value={this.state.email_user} name="email_user" placeholder="Digite o seu e-mail" required="" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" onChange={this.onChange} value={this.state.password_user} name="password_user" placeholder="Digite o seu e-mail" required="" />
						
					</div>
					<div className="form-group">
						<span className="help-block"><p id="characterLeft" className="help-block "><Link className="btn pull-left" to="/login">Esqueceu a sua senha?</Link></p></span> 
						
					</div>
					<Link className="btn pull-left" to="/cadastro">Não possui conta? Se cadastre AGORA!</Link>
					<button type="button" id="submit" name="submit" disabled={!isEnabled}  className="btn btn-primary pull-right">Entrar</button>
					
					
					</form>
   		</div>
   </div> 
			<Footer />
			</div>
			
			
		);
  }
}

export default Login;