import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { dracula } from '@uiw/codemirror-theme-dracula';
import NavbarComponent2 from "./NavbarComponent2";
import IngresarPreguntaService from "../services/IngresarPreguntaService";


export default function IngresarPreguntaComponent(props) {
  const initialState = {
    pregunta: "",
    codigo: "", // Valor inicial del código
    respuesta: "",
    dificultad: ""
  };

  const [input, setInput] = useState(initialState);

  const changePreguntaHandler = event => {
    setInput({ ...input, pregunta: event.target.value });
    console.log(input.pregunta);
  };

  const changeCodigoHandler = useCallback((value) => {
    setInput({ ...input, codigo: value });
    console.log(value);
  }, [input]);

  const changeRespuestaHandler = event => {
    setInput({ ...input, respuesta: event.target.value });
    console.log(input.respuesta);
  };

  const changeDificultadHandler = event => {
    setInput({ ...input, dificultad: event.target.value });
    console.log(input.dificultad);
  };

  const agregarPregunta = e => {
    e.preventDefault();
    swal({
      title: "¿Estás seguro de que deseas agregar esta pregunta?",
      text: "",
      icon: "warning",
      buttons: ["Cancelar", "Agregar"],
      dangerMode: true
    }).then(respuesta => {
      if (respuesta) {
        swal("Pregunta agregada correctamente!", { icon: "success", timer: "3000" });
        let pregunta = { pregunta: input.pregunta, codigo: input.codigo, respuesta: input.respuesta, dificultad: input.dificultad };
        console.log(input.pregunta)
        console.log(input.codigo)
        console.log(input.respuesta)
        console.log(input.dificultad)
        console.log("pregunta => " + JSON.stringify(pregunta));
        IngresarPreguntaService.ingresarPregunta(pregunta).then(
          (res) => {
          }
        );
      } else {
        swal({ text: "Pregunta no agregada.", icon: "error" });
      }
    });
  };

  return (
    <Styles>
      <NavbarComponent2 />

      <div className="home">
        <div className="mainclass">
          <div className="form1">
            <h1 className="text-center header-title"><b>Agregar Nueva Pregunta</b></h1>
            <div className="formcontainer">
              <hr />
              <div className="container">
                <Form>
                  <Form.Group className="mb-3" controlId="pregunta">
                    <Form.Label className="form-label">Ingresa aquí el enunciado de tu pregunta</Form.Label>
                    <Form.Control
                      type="pregunta"
                      placeholder="Ejemplo: ¿Qué imprime por pantalla el siguiente código?"
                      value={input.pregunta}
                      onChange={changePreguntaHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="codigo">
                    <Form.Label className="form-label">Código de la pregunta</Form.Label>
                    <CodeMirror
                      text={input.codigo}
                      height="300px"
                      width="600px"
                      theme={dracula}
                      extensions={[python()]}
                      align = "left"
                      onChange={(value, viewUpdate) => changeCodigoHandler(value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="respuesta">
                    <Form.Label className="form-label">Respuesta de la pregunta</Form.Label>
                    <Form.Control
                      type="respuesta"
                      placeholder="Ingresa la respuesta a la pregunta"
                      value={input.respuesta}
                      onChange={changeRespuestaHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="dificultad">
                    <Form.Label className="form-label">Dificultad de la pregunta</Form.Label>
                    <Form.Control
                      as="select"
                      value={input.dificultad}
                      onChange={changeDificultadHandler}
                    >
                      <option value="" disabled>Selecciona la dificultad de tu pregunta</option>
                      <option value="Fácil">Fácil</option>
                      <option value="Intermedia">Intermedia</option>
                      <option value="Difícil">Difícil</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
              <Button className="boton" onClick={agregarPregunta}>Agregar Pregunta</Button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

const Styles = styled.div`
  height: 100vh;

  .home {
    background-color: #1F618D;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
  }

  .form1 {
    margin-top: 85px;
  }

  .header-title {
    color: #ffffff;
    font-size: 40px;
  }

  .form-label {
    color: #ffffff;
    font-size: 28px;
  }

`;
