import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruebaComponent from './components/PruebaComponent';
import HomeComponent from './components/HomeComponent';
import ResultadosComponent from './components/ResultadosComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path="/prueba" element={<PruebaComponent />} />
//<Route path="/resultados" element={<ResultadosComponent/>} />
//<Route path="/ingresar-pregunta" element={<IngresarPreguntaComponent/>} />