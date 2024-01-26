import React,{Component as cagate} from 'react';



class PruebaRemake extends cagate {
  constructor(props){
    super(props);
    this.state = {
      acum: 0,
      mostrar:[],
      categoriaFiltro:"Procesadores",
      productosFiltrados:[],
      productosGanacias:[],
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
    this.setState({mostrar:[],productosFiltrados:[]})
  }

  categorias =() =>{
    const productoCategoria = this.state.productos.filter((producto) => producto.categoria == this.state.categoriaFiltro)

    this.setState({productosFiltrados:productoCategoria})
  }

   ganancia = () => { 
      for (let i = 0; i < this.state.productos.length; i++) { 
      this.state.acum += this.state.productos[i].precio; 
    }
    this.setState({acum:productosGanacias})
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

      {this.state.productosFiltrados.map((producto,i)=>(
         <div>
           <li key={i}>{producto.nombre}</li>
           <p key={i}>{producto.categoria}</p>
           <p key={i}>{producto.precio}</p>
           <br></br>
         </div>
         ))}

    {this.state.productosGanacias.map((producto,i)=>(
         <div>
           <h1 key={i}>EL total de ganacias es de: {producto.precio}</h1>
           <br></br>
         </div>
         ))}
        </ul>
        <button onClick={this.listado}>Mostrar</button>
        <button onClick={this.resetear}>Dejar de mostrar</button>
        <button onClick={this.categorias}>categoria</button>
        <button onClick={this.ganancia}>Ganacia estimada</button>
      </div>
    );
  }
};

export default PruebaRemake;