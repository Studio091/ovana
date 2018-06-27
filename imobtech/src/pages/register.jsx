import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name_user: "",
      email_user: "",
      password_user: "",
	  re_password_user: ""
		
		
    };
		

   this.onChange = (evento) => {
     const state = Object.assign({}, this.state);
     const campo = evento.target.name;
     state[campo] = evento.target.value;
     this.setState(state);
   };
   
  }
  render() {
    
   console.log(this.state.re_password_user);
		const isEnabled = this.state.name_user && this.state.email_user && this.state.password_user && this.state.re_password_user;
    	console.log(isEnabled);
        return (
	
	<div>
	<Navbar />
	<br/>
    <br/>
    <br/>
   <div className="search">
   		<div className="col-md-4 teste float-search">
			<h4>CRIE A SUA CONTA</h4>
   		<form>
    				<div className="form-group">
						<input type="text" className="form-control" name="name_user" placeholder="Digite o seu nome" required="" onChange={this.onChange} value={this.state.name_user}/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.onChange} value={this.state.email_user} name="email_user" placeholder="Digite o seu e-mail" required=""/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control"  onChange={this.onChange} value={this.state.password_user} name="password_user" placeholder="Digite a sua senha" required=""/>
						
					</div>
					<div className="form-group">
						<input type="password" className="form-control" onChange={this.onChange} value={this.state.re_password_user} name="re_password_user" placeholder="Digite novamente a sua senha" required=""/>
						
					</div>
					<Link className="btn pull-left" to="/cadastro">Já possui conta? Entre agora AGORA!</Link>
					<button type="button" id="submit" disabled={!isEnabled} name="submit" className="btn btn-primary pull-right">Entrar</button>
					
					
			
  		</form>
   		</div>
   </div> 
			<Footer />
			</div>
			

    );
  }
}

export default Register;