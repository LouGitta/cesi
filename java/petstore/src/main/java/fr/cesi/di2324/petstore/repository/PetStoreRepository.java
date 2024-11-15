package fr.cesi.di2324.petstore.repository;

import fr.cesi.di2324.petstore.domain.PetStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "stores")
public interface PetStoreRepository extends JpaRepository<PetStore, Integer> {
}
