package cl.usach.mingeso.preguntaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PreguntaServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PreguntaServiceApplication.class, args);
    }

}
