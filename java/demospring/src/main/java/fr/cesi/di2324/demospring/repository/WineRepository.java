package fr.cesi.di2324.demospring.repository;

import fr.cesi.di2324.demospring.domain.Wine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource(path = "vins", collectionResourceRel = "vins")
public interface WineRepository extends JpaRepository<Wine, Integer> {
    // pas case sensitive
    @RestResource(path = "recherche-par-nom")
    List<Wine> findByNameContains(@Param("value") String name);
    // identiques
    @RestResource(path = "by-name/{name}")
    List<Wine> findByNameContaining(@PathVariable String name);
    List<Wine> findByName(String name);

}
