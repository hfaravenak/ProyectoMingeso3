package cl.usach.mingeso.preguntaservice.service;

import cl.usach.mingeso.preguntaservice.entity.PreguntaEntity;
import cl.usach.mingeso.preguntaservice.repository.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service
public class PreguntaService {
    @Autowired
    PreguntaRepository preguntaRepository;

    public ArrayList<PreguntaEntity> obtenerPreguntas() { return (ArrayList<PreguntaEntity>) preguntaRepository.findAll(); }

    public ArrayList<PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad) { return preguntaRepository.findByDificultad(dificultad); }

    public PreguntaEntity guardarPregunta(PreguntaEntity preguntaEntity) { PreguntaEntity nuevaPregunta = preguntaRepository.save(preguntaEntity); return nuevaPregunta; }

    public ArrayList<PreguntaEntity> obtener4PreguntasAleatoriasPorDificultad(String dificultad) {
        ArrayList<PreguntaEntity> preguntasPorDificultad = preguntaRepository.findByDificultad(dificultad);

        if (preguntasPorDificultad.size() <= 4) {
            return preguntasPorDificultad; // Si hay 4 o menos preguntas con la dificultad especificada, devolver todas.
        }

        ArrayList<PreguntaEntity> preguntasAleatorias = new ArrayList<>();
        Random random = new Random();

        // Generar 4 índices aleatorios distintos para seleccionar las preguntas por dificultad.
        ArrayList<Integer> indicesAleatorios = new ArrayList<>();
        while (indicesAleatorios.size() < 4) {
            int indiceAleatorio = random.nextInt(preguntasPorDificultad.size());
            if (!indicesAleatorios.contains(indiceAleatorio)) {
                indicesAleatorios.add(indiceAleatorio);
            }
        }

        // Agregar las preguntas seleccionadas a la lista de preguntas aleatorias por dificultad.
        for (int indice : indicesAleatorios) {
            preguntasAleatorias.add(preguntasPorDificultad.get(indice));
        }

        return preguntasAleatorias;
    }



}
