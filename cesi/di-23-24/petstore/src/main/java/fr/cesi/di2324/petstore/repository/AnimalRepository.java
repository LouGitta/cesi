package fr.cesi.di2324.petstore.repository;

import fr.cesi.di2324.petstore.domain.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "animals")
public interface AnimalRepository extends JpaRepository<Animal, Integer> {
}
