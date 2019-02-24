import React, {Component} from 'react';

class Formulario extends Component{

    //refs son para leer los valores de los campos de un formulario. Se crea un ref por cada campo del <select></select>
    
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasico= React.createRef();
    planCompleto= React.createRef();

    cotizarSeguro=(e)=>{
        e.preventDefault();
        //leer el plan
        const plan=this.planBasico.current.checked?'basico':'completo';

        //obtener los datos
        // console.log(this.marcaRef.current.value)



        //crear el objeto
        const infoAuto={
            marca:this.marcaRef.current.value,
            year:this.yearRef.current.value,
            plan
        }
        // console.log(infoAuto)

        // enviarlo al componente principal
        this.props.cotizarSeguro(infoAuto)

        //resetear el formulario
        // e.currentTarget.reset(); opcional
    }
    render() {
        return (
            <form className="contenedor-formulario" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.planBasico}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.planCompleto}/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
};

export default Formulario;