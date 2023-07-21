package cl.usach.mingeso.preguntaservice.repository;

import cl.usach.mingeso.preguntaservice.entity.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer> {

    ArrayList<PreguntaEntity> findByDificultad(String dificultad);

}
