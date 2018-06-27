import React, { Component } from 'react'; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      localization: "",
      option: "",
      typeHouse: "",
	  minPrice: "",
	  maxPrice: "",
	  bedRoom: "", 
	  suits: "",
	  garage: "",
	  minArea: "",
	  maxArea: "",
	  tags: "",
	  withAdress: "",
	  cod: ""
		
    };
		

   this.onChange = (evento) => {
     const state = Object.assign({}, this.state);
     const campo = evento.target.name;
     state[campo] = evento.target.value;
     this.setState(state);
   };
   
  }
  render() {
        console.log(this.state.option);
	    	const isEnabled = this.state.typeHouse || this.state.option || this.state.localization;
      	console.log(isEnabled)
    return (
      
    <div>
	<Navbar />
	<br/>
    <br/>
    <br/>
   <div className="search">
   		<div className="col-md-9 teste float-search">
   		<form>
   			<div className="col-md-4">
			<p>O que você precisa?</p>
			<div className="btn-group" role="group">
			  <label className="btn input-lg btn-lg">
				<input type="radio" name="option" value="buy" onChange={this.onChange} checked={this.state.option === "buy"}/> Comprar
			  </label>
			  <label className="btn input-lg btn-lg">
				<input type="radio" name="option" value="rent" onChange={this.onChange} checked={this.state.option === "rent"}/> Alugar
			  </label>
			  <label className="btn input-lg btn-lg">
				<input type="radio" name="option" value="sell" onChange={this.onChange} checked={this.state.option === "sell"}/> Vender
			  </label>
			</div>
		
		</div>
  		<div className="col-md-4">
			<p>Qual tipo?</p>
			<select name="typeHouse" onChange={this.onChange} value={this.state.typeHouse} className="form-control input-lg">
			<option value="">Selecione uma opção</option>
    		<option value="1">Da hora</option>
			</select>
			
			</div>
			<div className="col-md-4">
			<p>Onde?</p>
			<input type="text" className="form-control input-lg" name="nome" value={this.state.localization} onChange={this.onChange} placeholder="Digite o bairro, cidade ou região" name="localization"/>
		</div>
  		<div className="col-md-12">
  		<br/>
  	
	
			<div className="row">
				<div className="col-md-3">
				<p align="center">Faixa de preço</p>
					<div className="col-md-6">
						<input type="text" className="form-control form-control-sm"  value={this.state.minPrice} onChange={this.onChange} name="minPrice" placeholder="mínimo" /> 
					</div>
					<div className="col-md-6">
						<input type="text" className="form-control form-control-sm"  value={this.state.maxPrice} onChange={this.onChange} name="maxPrice" placeholder="máximo" />
					</div>
				</div>
				<div className="col-md-2">
					<p align="center">Quantos quartos</p>
					<select className="form-control form-control-sm" name="bedRoom" onChange={this.onChange} value={this.state.bedRoom}>
						<option value="">Escolha uma opção</option>
<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4 ou mais</option>
					</select>
				</div>
				<div className="col-md-2">
					<p align="center">Quantas suítes</p>
					<select className="form-control form-control-sm" name="suits" onChange={this.onChange} value={this.state.suits}>
						<option value="">Escolha uma opção</option>
<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4 ou mais</option>
					</select>
				</div>
				<div className="col-md-2">
					<p align="center">Vagas</p>
					<select className="form-control form-control-sm" name="garage" onChange={this.onChange} value={this.state.garage}>
						<option value="">Escolha uma opção</option>
<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4 ou mais</option>
					</select>
				</div>
				<div className="col-md-3">
					<p align="center">Área</p>
					<div className="col-md-6">
						<input type="text" className="form-control form-control-sm" name="minArea" onChange={this.onChange} value={this.state.minArea} placeholder="mínimo" /> 
					</div>
					<div className="col-md-6">
						<input type="text" className="form-control form-control-sm" name="maxArea" onChange={this.onChange} value={this.state.maxArea} placeholder="máximo" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5">
				<p>O que você busca em um imóvel?</p>
				<input className="form-control form-control-sm" type="text" placeholder="Ex: rua, psicina, churrasqueira." />
				</div>
				<div className="col-md-3">
				<p>Exibir apenas anúncios:</p>
				<input className="form-check-input" type="checkbox" name="withAdress" value="adress" onChange={this.onChange} checked={this.state.withAdress === "adress"} />
				  <label className="form-check-label">
					Com endereço
				  </label>
					
				</div>
				<div className="col-md-4">
					<p>Código do imóvel</p>
					<input type="text" className="form-control form-control-lg" name="cod" value={this.state.cod} onChange={this.onChange} placeholder="Digite o código (ex:IM000000)" />
				</div>
			</div>
	
		  <br/>
		</div>
  			<div className="col-md-8">
  				<p>Resultados..</p>
  			</div>
  			<div className="col-md-2">
  				<p><a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Busca avançada <span className="arrow"></span></a></p>
  				
  			</div>
  			<div className="col-md-2">
  			<button className="btn btn-lg btn-primary" disabled={!isEnabled} name="submit"  value="Buscar" type="submit">Buscar</button>
  				
  			</div>
  			
  		
  		</form>
   		</div>
   </div> 
			<Footer />
			</div>
			
			
	

    );
  }
}

export default Search;
