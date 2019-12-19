package com.douglas.testecedro.dao;

import java.util.List;

import com.douglas.testecedro.models.Menu;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "menus", path = "menus")
@CrossOrigin(origins = "*")
public interface MenuRepository extends CrudRepository<Menu, Long> {
}