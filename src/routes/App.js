
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Inicio from '../pages/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from '../layouts/Navegacion';
import Crearitem from '../pages/Crearitem';

function App() {
  return (
    <BrowserRouter>
    <Navegacion/>
     <Routes>
      <Route path='/'element = {<Inicio/>}/>
      <Route path='/crearitem'element = {<Crearitem/>}/>
     </Routes>
    </BrowserRouter>
 
  );
}

export default App;
