package fr.cesi.di2324.petstore.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "STORE")
public class PetStore implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String managerName;

//    @ManyToMany
//    @JoinColumn(name="PRODUCT_ID")
//    private List<Product> products;

    @OneToOne
    @JoinColumn(name="ADDRESS_ID")
    private Address address;

    @OneToMany
    @JoinColumn(name = "ANIMAL_ID")
    private List<Animal> animals;
}

