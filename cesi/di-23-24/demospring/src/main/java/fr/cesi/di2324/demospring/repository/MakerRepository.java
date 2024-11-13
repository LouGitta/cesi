package fr.cesi.di2324.demospring.repository;

import fr.cesi.di2324.demospring.domain.Maker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface MakerRepository extends JpaRepository<Maker, Integer> {
}
