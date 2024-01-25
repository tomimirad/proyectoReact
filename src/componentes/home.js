import React,{Component} from 'react';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre : props.nombre,
      edad : props.edad
    }
  }


//    // componentDidMount: se llama después de que el componente es insertado en el DOM
//  componentDidMount() {
//   console.log('ComponentDidMount: El componente ha sido montado en el DOM');
// }

// // componentDidUpdate: se llama después de que el componente se actualiza (por cambios en el estado o las props)
// componentDidUpdate(prevProps, prevState) {
//   console.log('ComponentDidUpdate: El componente ha sido actualizado');
// }

// // componentWillUnmount: se llama justo antes de que el componente sea eliminado del DOM
// componentWillUnmount() {
//   console.log('ComponentWillUnmount: El componente se va a desmontar');
// }
  render(){

    return (
      <div>
        <h1>Hola, soy {this.state.nombre}.</h1>
        <p>Tengo {this.state.edad} años.</p>
      </div>
    );
  }
};

export default Home;