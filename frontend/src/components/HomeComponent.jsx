import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";


export default function HomeComponent() {
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-facil";
    
  };



  return (
    <HomeContainer>
      <Header>
        <AnimatedHeader>
          <span>¡</span>Code Mastering<span>!</span>
        </AnimatedHeader>
        <HeaderText>
          ¡Aprende, mejora y mantente al día con tus códigos en Python!
        </HeaderText>
      </Header>
      <Levels>
        <LevelCard>
          <h2>Modo Básico</h2>
          <p>Ideal para aquellos que están dando sus primeros pasos en Python.</p>
          <StartButton onClick={ComenzarFacil}>Comenzar</StartButton>
        </LevelCard>
        <LevelCard>
          <h2>Modo Intermedio</h2>
          <p>Este modo está hecho especialmente para aquellos estudiantes que ya han realizado sus primeros programas en Python.</p>
          <StartButton>Comenzar</StartButton>
        </LevelCard>
        <LevelCard>
          <h2>Modo Avanzado</h2>
          <p>El modo para los experimentados en la programación con Python.</p>
          <StartButton>Comenzar</StartButton>
        </LevelCard>
      </Levels>
      <NewChallenge>
        <h2>Agrega tu pregunta</h2>
        <p>¿Te gustaría que tu pregunta apareciera en nuestra aplicación? Accede a esta opción para agregar una nueva pregunta.</p>
        <Link to="/ingresar-pregunta">
        <StartButton>Acceder</StartButton>
        </Link>
      </NewChallenge>
    </HomeContainer>
  );
}

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #1F618D; /* Fondo azul */
  height: 100vh; /* Ajustar el alto del contenedor al 100% del viewport */
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const AnimatedHeader = styled.h1`
  font-size: 3rem;
  color: #fff; /* Color de texto blanco */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Sombra suave detrás del texto */
  padding: 10px; /* Espaciado interno para separar el texto del fondo */
  border-radius: 8px; /* Bordes redondeados */
  background-color: #1F618D; /* Fondo azul */
  margin-bottom: 20px;
  text-align: center;
  animation: ${animation} 2s infinite;

  span {
    display: inline-block;
  }

  span:first-child {
    animation-delay: 0.5s;
  }

  span:last-child {
    animation-delay: 1s;
  }
`;

const HeaderText = styled.h3`
  font-size: 1.6rem; /* Tamaño de fuente más grande */
  color: #fff; /* Texto en color blanco para resaltar en el fondo azul */

  /* Estilos adicionales para mejorar la legibilidad */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Sombra suave detrás del texto */
  padding: 10px; /* Espaciado interno para separar el texto del fondo */
  border-radius: 8px; /* Bordes redondeados */
  background-color: #1F618D; /* Fondo azul */

  /* Ajustar el margen para separar el header del contenido siguiente */
  margin-bottom: 20px;
`;

const Levels = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LevelCard = styled.div`
  max-width: 350px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 15px;
  flex: 1;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
`;

const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #1F618D;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #154F71;
  }
`;

const NewChallenge = styled.div`
  max-width: 350px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 30px;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
`;
