package fr.cesi.di2324.petstore.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "PRODUIT")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String code;
    private String label;
    private Double price;
    @Enumerated(EnumType.STRING)
    private ProdType type;

}
