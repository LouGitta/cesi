package fr.cesi.di2324.petstore.repository;

import fr.cesi.di2324.petstore.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "addresses")
public interface AddressRepository extends JpaRepository<Address, Integer> {
}
