import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";

class PruebaFacilComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/pregunta/random-por-dificultad/Fácil")
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data }));
  }

  render() {
    return (
      <HomeStyle>
        <Navbar />

        <div className="text-center">
          <h1 className="asd">
            <b>
              <u>Prueba: Modo Básico </u>
            </b>
          </h1>
          {this.state.datas.map((data, index) => (
            <div key={data.id}>
              <Preguntas
                id={index + 1}
                pregunta={data.pregunta}
                code={data.codigo}
                resp={data.respuesta}
              />
            </div>
          ))}
        </div>
      </HomeStyle>
    );
  }
}

export default PruebaFacilComponent;

const HomeStyle = styled.nav`
  .text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fdfefe;
  }

  .asd {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`;
