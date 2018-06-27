import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Product extends Component {
  render() {
    return (
      
    <div>
      <Navbar />
		<div className="search-detail">
      <br/>
      <br/>
		<div className="row">
		<div className="col-md-4 teste float-search">
		<p align="center"><input type="text" name="search" className="input" placeholder="Busque por endereço, bairro, cidade ou CEP"/></p>
			
      </div>
			</div>
      <br/>
      <br/>
			</div>
      <div className="col-md-6">
                <div className="col-md-12 section-title">
                    <h3>CASA NA COLINA, 70 m² por R$ 95.000</h3>
                    <p>Avenida Marechal Mario Guedes, 02 - Jaguaré, São Paulo - SP <span className="alert-info" styles="padding: 5px;">COD. 7505d8</span></p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
	
			<ol className="carousel-indicators">
			  <li data-target="#myCarousel" data-slide-to="0" className=""></li>
			  <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
			  <li data-target="#myCarousel" data-slide-to="2" className=""></li>
			</ol>

			<div className="carousel-inner">
			  <div className="item">
				<img src="/images/houses/Modern-house-in-Auckland-New-Zealand.jpg" alt="Los Angeles" styles="width:100%;" />
			  </div>

			  <div className="item active">
				<img src="/images/houses/Rothesay-Bay-Residence.jpg" alt="Chicago" styles="width:100%;"/>
			  </div>

			  <div className="item">
				<img src="/images/houses/Dicas-Para-Construir-Casas-Modernas-e-Baratas.png" alt="New york" styles="width:100%;" />
			  </div>
			</div>

			
			<a className="left carousel-control" href="#myCarousel" data-slide="prev">
			  <span className="glyphicon glyphicon-chevron-left"></span>
			  <span className="sr-only">Previous</span>
			</a>
			<a className="right carousel-control" href="#myCarousel" data-slide="next">
			  <span className="glyphicon glyphicon-chevron-right"></span>
			  <span className="sr-only">Next</span>
			</a>
		  </div>
               
            </div>
            <div className="col-md-3">
                <div className="col-md-12 section-title">
                   <br/> <h4>Características</h4>
                </div> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse, excepturi, sint ut et numquam reiciendis nulla in deserunt quaerat provident obcaecati reprehenderit iusto ab neque corporis id temporibus architecto quia adipisci?</p>
            <ul>
			<li>Curabitur in ligula at diam posuere fermentum at tincidunt tortor.</li>
			<li>Maecenas id diam at enim varius gravida convallis a magna.</li>
			<li>Fusce sed odio eu nulla finibus convallis.</li>
			<br/>
			<li>Fusce at nunc et diam eleifend cursus.</li>
			<li>Duis vel augue iaculis, congue libero vitae, faucibus urna.</li>
 
           </ul>             
               
            </div>
            <div className="col-md-3">
                 <div className="col-md-12 section-title">
                   <br/> <h4>Fale agora com o anunciante</h4>
                   <form role="form">
    				<div className="form-group">
						<input type="text" className="form-control" id="name" name="name" placeholder="Nome" required=""/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="email" name="email" placeholder="Email" required=""/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="mobile" name="mobile" placeholder="Telefone" required=""/>
					</div>
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="message" placeholder="Mensagem" maxlength="140" rows="7"></textarea>
                        <span className="help-block"><p id="characterLeft" className="help-block ">você tem 140 caracteres</p></span>                    
                    </div>
            
					<button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Enviar mensagem</button>
					</form>
                </div>     
                    
               
            </div>
            <br/>
            <br/>
            <div className="content-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 section-title">
                  <br/>
            <br/>
                    <h2>Sugestões</h2>
                </div>
            </div> 
            <div className="row">
                <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
						<img src="/images/houses/home-for-sale-in-whiterocks-ut-102516-hero.jpg" alt=""/>
                        </div> 
                        <div className="product-content">
                            <h5><a href="#">Casa na montanha</a></h5>
                            <span className="tagline">Por: Eduardo Carlos</span>
                            
                        </div> 
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
                            <img src="/images/houses/rustic-modern-house-190217-1156-01-800x533.jpg" alt=""/>
                        </div> 
                        <div className="product-content">
                            <h5><a href="#">Casa Moderna Rústica</a></h5>
                            <span className="tagline">Por: Luana Santana</span>
                            
                        </div> 
                    </div> 
                </div>
                <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
						<img src="/images/houses/shipping-container-homes.jpg" alt=""/>
                        </div>
                        <div className="product-content">
                            <h5><a href="#">Casa Metalica</a></h5>
                            <span className="tagline">Por: Pedro Lucas</span>
                            
                        </div>
                    </div> 
                </div>
                <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
                            <img src="/images/houses/Small_House_On_The_Beach_by_VaSLab_Architecture_on_world_of_architecture_01.jpg" alt=""/>
                        </div> 
                        <div className="product-content">
                            <h5><a href="#">Casa na Praia</a></h5>
                            <span className="tagline">Por: Vitor Nogueira</span>
                            
                        </div> 
                    </div> 
                </div> 
               
                 <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
                            <img src="/images/houses/timthumb.jpg" alt=""/>
                        </div> 
                        <div className="product-content">
                            <h5><a href="#">Loft na paulista</a></h5>
                            <span className="tagline">Por: Giovana Rubio</span>
                            
                        </div> 
                    </div> 
                </div> 
                 <div className="col-md-2 col-sm-6">
                    <div className="product-item-vote">
                        <div className="product-thumb">
                            <img src="/images/houses/apartamento-sumare1430.jpg" alt=""/>
                        </div>
                        <div className="product-content">
                            <h5><a href="#">Apartamento na zona sul</a></h5>
                            <span className="tagline">Por: Paulo Roberto</span>
                            
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
    <Footer/>
    	</div>

    );
  }
}

export default Product;