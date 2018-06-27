import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Side from '../components/specific_layout/sidebar_result';

class Result extends Component {
     render() {
    return (
      
    <div>
	<Navbar />
	<div className="container-fluid">
     <div className="col-md-12">
					<br/> 
            		<br/>
					<br/> 
            		<br/>
            		<br/>
            		<br/>
		<center>
			<input type="text" name="search" className="input" placeholder="Busque por endereço, bairro, cidade ou CEP" />
		</center>
            		<br/> 
            		<br/>
            		<br/>
            	</div>
     	<Side />
     	<div className="col-md-10">
            	
        <div className="col-md-8">
        <div className="row">
        <div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
		<div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
        
       </div>
       <div className="row">
        <div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
		<div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
        
       </div>
       
       <div className="row">
        <div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
		<div className="col-xs-18 col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt=""/>
              <div className="caption">
                <h4>R$ 150.000</h4>
                <p>320 metros² construidos | 3 quartos</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                
            </div>
          </div>
        </div>
        
       </div>
       
       
       
       
       
       
        <div className="col-md-12">
            	<center>
             		 <ul className="pagination">
						<li className="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li><a href="#">Próximo</a></li>
					  </ul>
           			
            	</center>
             	</div>
        
             	</div>
             	<div className="col-md-4">
             		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227489.53160789853!2d-49.66889882781186!3d-27.01360550168164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfb216aba8e0f9%3A0xaeceb530d012ee8d!2sIbirama+-+SC%2C+89140-000!5e0!3m2!1spt-BR!2sbr!4v1524259744074" className="map" height="800" frameborder="0" allowfullscreen=""></iframe>
             	</div>
             </div>
             </div>
			<Footer />
			</div>
			
			

    );
  }
}

export default Result;