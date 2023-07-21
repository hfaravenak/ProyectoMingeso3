package cl.usach.mingeso.preguntaservice.service;

import cl.usach.mingeso.preguntaservice.entity.PreguntaEntity;
import cl.usach.mingeso.preguntaservice.repository.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class PreguntaService {
    @Autowired
    PreguntaRepository preguntaRepository;

    public ArrayList<PreguntaEntity> obtenerPreguntas() { return (ArrayList<PreguntaEntity>) preguntaRepository.findAll(); }

    public ArrayList<PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad) { return preguntaRepository.findByDificultad(dificultad);
    }



}
