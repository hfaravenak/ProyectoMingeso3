package cl.usach.mingeso.preguntaservice.controller;

import cl.usach.mingeso.preguntaservice.entity.PreguntaEntity;
import cl.usach.mingeso.preguntaservice.service.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pregunta")
public class PreguntaController {
    @Autowired
    PreguntaService preguntaService;

    @GetMapping("/listar-preguntas")
    public ResponseEntity<ArrayList<PreguntaEntity>> obtenerProveedores(){
        ArrayList<PreguntaEntity> preguntas = preguntaService.obtenerPreguntas();
        if(preguntas.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/por-dificultad/{dificultad}")
    public ResponseEntity<ArrayList<PreguntaEntity>> getByDificultad(@PathVariable("dificultad") String dificultad){
        ArrayList<PreguntaEntity> preguntas = preguntaService.obtenerPreguntasPorDificultad(dificultad);
        return ResponseEntity.ok(preguntas);
    }
}
