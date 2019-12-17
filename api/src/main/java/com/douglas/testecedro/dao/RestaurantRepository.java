package com.douglas.testecedro.dao;

import com.douglas.testecedro.models.Restaurant;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.repository.query.Param;

@RepositoryRestResource(collectionResourceRel = "restaurants", path = "restaurants")
@CrossOrigin(origins = "*")
public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
    List<Restaurant> findByName(@Param("name") String name);
}