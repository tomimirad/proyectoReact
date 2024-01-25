import React,{Component as cagate} from 'react';



class PruebaRemake extends cagate {
  constructor(props){
    super(props);
    this.state = {
      mostrar:[],
      productos : [
        {
          nombre: "Tarjeta Gráfica GTX 1080",
          categoria: "Tarjetas Gráficas",
          precio: 699,
        },
        {
          nombre: "Procesador Intel Core i7-9700K",
          categoria: "Procesadores",
          precio: 399,
        },
        {
          nombre: "Memoria RAM Corsair Vengeance LPX 16GB",
          categoria: "Memorias RAM",
          precio: 89,
        },
        {
          nombre: "Disco Duro SSD Samsung 1TB",
          categoria: "Almacenamiento",
          precio: 129,
        },
        {
          nombre: "Placa Base ASUS ROG Strix Z390-E",
          categoria: "Placas Base",
          precio: 249,
        },
      ]
      
    }
  }
 
 
 
 
 
  listado=()=> {
    this.setState({mostrar: [...this.state.productos]}) 
  }

  resetear =()=>{
    this.setState({mostrar:[]})
  }
    
    render(){
      return (
        <div>
        <ul>
         {this.state.mostrar.map((producto,i)=>(
         <div>
           <li key={i}>{producto.nombre}</li>
           <p key={i}>{producto.categoria}</p>
           <p key={i}>{producto.precio}</p>
           <br></br>
         </div>
         ))}
        </ul>
        <button onClick={this.listado}>Mostrar</button>
        <button onClick={this.resetear}>Dejar de mostrar</button>
      </div>
    );
  }
};

export default PruebaRemake;