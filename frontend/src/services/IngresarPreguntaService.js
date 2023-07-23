import axios from "axios";

class IngresarPreguntaService {
    
    ingresarPregunta(pregunta){
        return axios.post(`http://localhost:8080/pregunta/agregar-pregunta`, pregunta);
    }
}

export default new IngresarPreguntaService();