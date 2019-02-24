import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper'; 
class App extends Component {
  state={
    resultado:'',
    datos: {}
  }

  cotizarSeguro=(datos)=>{
    const {marca,plan,year}=datos;

    //Agregar una base de 2000
    let resultado=2000;

    //Obtener la diferencia de años, y 
    const diferencia=obtenerDiferenciaAnio(year);


    //Por cada año restarle el 3% al valor del seguro
      resultado-=((diferencia*3)*resultado)/100

      console.log(resultado)
    //Americano=15%, Asiatcio=5% y Europeo=30%

    resultado= calcularMarca(marca)*resultado;
    console.log(resultado)
    
    //el plan del auto, el basico incrementa el valor un 20% y cobertura completa el 50%
    let incrementoPlan=obtenerPlan(plan)
    
    //Dependiendo del plan, incrementar
    resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
    
    //Crear objeto para el resumen
    const datosAuto={
      marca,
      plan,
      year
    }


    //ya tenemos el costo
    this.setState({
      resultado,
      datos:datosAuto
    })
  }




  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
            
          />
          <Resultado resultado={this.state.resultado}/>
        </div>
        
      </div>
    );
  }
}

export default App;
