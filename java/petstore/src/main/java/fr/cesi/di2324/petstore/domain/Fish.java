package fr.cesi.di2324.petstore.domain;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class Fish extends Animal{

    @Enumerated(EnumType.STRING)
    private FishLivEnv livingEng;
}
