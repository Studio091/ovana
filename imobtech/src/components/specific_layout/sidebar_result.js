import React, { Component } from 'react'; 


class Sidebar_result extends Component {
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
	  optional: []
		
    };
		

   this.onChange = (evento) => {
     const state = Object.assign({}, this.state);
     const campo = evento.target.name;
     state[campo] = evento.target.value;
     this.setState(state);
   };
   
  }
	
	

    render() {
		
        return (
	
	<div>
			<div className="col-md-2">
     		<h3>Casa de praia</h3>
     		<p>233.009 resultados</p>
     		<h4>ORGANIZAR OS ANÚNCIOS</h4>
     		<p>
     		<select className="form-control"><option>Mais relevante</option></select>
     		</p>
     		<h4>LOCALIZAÇÃO</h4>
     		<p>
     			<a href="#">São Paulo (123.127)</a> <br/>
     			<a href="#">Santa Catarina (258.987)</a> <br/>
     			<a href="#">Rio de Janeiro (423.200)</a> <br/>
     			<a href="#">Distrito Federal (50.980)</a> <br/>
     			<a href="#">Paraná (40.980)</a> <br/>
     			<a href="#">Rio Grande do Sul (123.477)</a> <br/>
     			<a href="#">Ver todos</a>
     		</p>
			<h4>CARACTERÍSTICAS</h4>
     		<select className="form-control">
			<option>Localização</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4 ou mais</option>
				</select> 
				<br/>
     		<select name="typeHouse" onChange={this.onChange} value={this.state.typeHouse} className="form-control">
			<option>Tipo</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4 ou mais</option>
				</select>
				<br/>
     		<select name="bedRoom" onChange={this.onChange} value={this.state.bedRoom} className="form-control">
				<option>Cômodos</option>
			
			<option value="1">1</option>
			<option value="2">2</option>		
			<option value="3">3</option>
			<option value="4">4 ou mais</option>
				</select>	
				<br/>
     		<select
			className="form-control">
				<option>Banheiros</option>
				</select>	
			<br/>
     		
     		<h4>PREÇO</h4>
     		<input className="form-control" type="text" value={this.state.minPrice} onChange={this.onChange} name="minPrice" placeholder="Minímo" />
     		<br/>
     		<input className="form-control" type="text" value={this.state.maxPrice} onChange={this.onChange} name="maxPrice" placeholder="Maxímo" />
     		<h4>OPCIONAIS</h4>
     		<p>
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Ar condionado</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Vista para o mar</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Vista para montanha</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Mobiliado</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Sistema de segurança</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Piscina</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Televisão por satélite</label>
					    
					    <label>
					      <input type="checkbox" name="optional" onChange={this.onChange} checked={this.state.opcional === "opcional"}  value="option" />
					      Garagem / Estacionamento</label>
					    
				      </p>
     	</div>
	
	</div>
			
			
		);
    }
}
export default Sidebar_result;