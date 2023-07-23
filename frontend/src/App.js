import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruebaFacilComponent from './components/PruebaFacilComponent';
import PruebaIntermedioComponent from './components/PruebaIntermedioComponent';
import PruebaDificilComponent from './components/PruebaDificilComponent';
import HomeComponent from './components/HomeComponent';
import ResultadosComponent from './components/ResultadosComponent';
import IngresarPreguntaComponent from './components/IngresarPreguntaComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/prueba-facil" element={<PruebaFacilComponent />} />
          <Route path="/prueba-intermedio" element={<PruebaIntermedioComponent />} />
          <Route path="/prueba-dificil" element={<PruebaDificilComponent />} />
          <Route path="/resultados" element={<ResultadosComponent/>} />
          <Route path="/ingresar-pregunta" element={<IngresarPreguntaComponent/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
