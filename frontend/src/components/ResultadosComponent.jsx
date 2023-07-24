import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/prueba-facil";
  }
  const ComenzarIntermedio = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/prueba-intermedio";
  }
  const ComenzarDificil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/prueba-dificil";
  }
  const redirigirAIngresarPregunta = () => {
    window.location.href = "/ingresar-pregunta";
  }
  const redirigirAlMenuPrincipal = () => {
    window.location.href = "/";
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [segundos, setSegundos] = useState(
    localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
  );

  const [minutos, setMinutos] = useState(
    localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
  );

  const [horas, setHoras] = useState(
    localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
  );

  return (
    <>
      <GlobalStyle />
      <HomeStyle>
        <br></br>
        <div className="resultados">
          <h1>
            <b>
              <u>Tu calificación es: {puntaje}.0/ 7.0</u>
            </b>
          </h1>
          <h1>Tu tiempo fue de:</h1>
          <h1>
            <b>
              {horas} horas, {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>Excelente! Has respondido todas las preguntas correctamente.</h1>
          ) : (
            <h1>¡Sigue intentándolo! Recuerda que programar conlleva mucha práctica. ¡No te rindas!</h1>
          )}
        </div>
        <br></br>
        <div className="texto-resultados">
          <h1>
            <b>
              ¿Qué sigue ahora? Inténtalo de nuevo en modo Básico, cambia de modo o
              si tienes alguna pregunta, agrégala al sitema.
            </b>
          </h1>
        </div>
        <div className="facil">
          <h2>
            <b>Modo Básico</b>
          </h2>
          <h3>
          Para aquellos que están dando sus primeros pasos en Python.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="medio">
          <h2>
            <b>Modo Intermedio</b>
          </h2>
          <h3>
          Especialmente para aquellos estudiantes que ya han realizado sus primeros programas en Python.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarIntermedio}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="dificil">
          <h2>
            <b>Modo Avanzado</b>
          </h2>
          <h3>
            Para los más experimentados en Python que buscan un mayor desafio.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarDificil}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agrega tu pregunta</b>
          </h2>
          <h3>
            ¿Tienes una pregunta? Agrégala al sistema así mas personas y programadores pueden beneficiarse y mejorar su apreindizaje de Python.
          </h3>
          <button type="button" class="btn btn-primary" onClick={redirigirAIngresarPregunta}>
            Acceder
          </button>
        </div>
        <br></br>
        <div className="menu-principal">
          <h2>
            <b>Vuelve al menú principal</b>
          </h2>
          <h3>
            Devuélvete al inicio de la aplicación.
          </h3>
          <button type="button" class="btn btn-primary" onClick={redirigirAlMenuPrincipal}>
            Voler al menú
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #1F618D;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;

}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
.menu-principal{
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FDFEFE;
  background-color: #1F618D;
  border-radius: 25px;
  padding: 20px;
  width: 60%;
  margin: auto;
  border: 5px solid #FDFEFE;
}
.texto-resultados{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    width: 80%;
    margin: auto;
    padding: 20px;

`;
