package com.douglas.testecedro.dao;

import com.douglas.testecedro.models.Menu;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.repository.query.Param;

@RepositoryRestResource(collectionResourceRel = "menus", path = "menus")
@CrossOrigin(origins = "*")
public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findByName(@Param("name") String name);
}