import './App.css';




import PruebaRemake from './componentes/pruebaRemake'
import Home from './componentes/home';
import Footer from './componentes/footer';

let nombre = "Juan";
let edad = "18"



function App() {
  return (
    <div>
      <Home nombre={nombre} edad={edad}/>
      <PruebaRemake/>      
      <Footer/>
    </div>
  );
}

export default App;
