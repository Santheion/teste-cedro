package com.douglas.testecedro.models;

import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.springframework.data.rest.core.annotation.RestResource;

@Entity
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @NotBlank(message = "Nome é obrigatório")
  private String name;

  @OneToMany(mappedBy = "restaurant")
  @RestResource(path = "menus", rel="menus")
  private Set<Menu> menus;

  public Long getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Long.parseLong(id);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Set<Menu> getMenus() {
    return menus;
  }

  public void setMenus(Set<Menu> menus) {
    this.menus = menus;
  }
}