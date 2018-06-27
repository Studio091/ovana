import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
<div>
<nav className="navbar menu navbar-fixed-top">
     <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="top-header-left">
                            <Link to="/cadastro">Cadastrar-se</Link>
                            <Link to="/login">Login</Link>
                        </div> 
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="social-icons">
                            <ul>
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-dribbble"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">OVANA</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
          <ul className="nav navbar-nav">
             <li><Link to="/">Inicio</Link></li>
             <li><Link to="/busca">Catalagos</Link></li>
             <li><Link to="/mostrar/produto">Politicias</Link></li>
                                <li><a href="#">Sobre nós</a></li>
              </ul>
         
        </div>
      </div>
    </nav> 
	</div>
    );
  }
}

export default Navbar;