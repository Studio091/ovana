import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
<footer className="site-footer">   
         <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3 className="widget-title">Sobre nós</h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, debitis recusandae.
                            <ul className="follow-us">
                                <li><Link to="/"><i className="fa fa-facebook"></i>Facebook</Link></li>
                                <li><Link to="/"><i className="fa fa-twitter"></i>Twitter</Link></li>
                            </ul> 
                        </div> 
                    </div> 
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3 className="widget-title">Por que nós?</h3>
                            Tempore cum mollitia eveniet laboriosam corporis voluptas earum voluptate. Lorem ipsum dolor sit amet.
                            <br/><br/>Tempore cum mollitia eveniet laboriosam corporis voluptas earum voluptate. Lorem ipsum dolor sit amet.
                            <br/><br/>
                        </div> 
                    </div> 
                    <div className="col-md-2">
                        <div className="footer-widget">
                            <h3 className="widget-title">Links úteis</h3>
                            <ul>
                                <li><Link to="/">Parceiros</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Sobre Nós</Link></li>
                                <li><Link to="/">Ajuda</Link></li>
                            </ul>
                        </div> 
                    </div> 
                    <div className="col-md-4">
                        <div className="footer-widget">
                            <h3 className="widget-title">Nossa Newsletter</h3>
                            <div className="newsletter">
                            	<form action="/" method="get">
                                    <p>Se cadastre para receber informações sobre novas casas</p>
                                    <input type="text" title="Email" name="email" placeholder="Seu email aqui"/>
                                    <input type="submit" className="s-button" value="Submit" name="Submit" />
                                </form>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span>Copyright © 2018 <Link to="/">Somewhere</Link> | Design: <Link to="/">Studio091</Link></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, expedita soluta mollitia accusamus ut architecto maiores cum fugiat. Pariatur ipsum officiis fuga deleniti alias quia nostrum veritatis enim doloremque eligendi?</p>
                    </div>
                </div>
            </div>
        </div> 
    </footer> 
        );
  }
}

export default Footer;