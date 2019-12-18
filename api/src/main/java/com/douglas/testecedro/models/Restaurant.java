package com.douglas.testecedro.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @OneToMany(mappedBy = "restaurant")
  private List<Menu> menus;

  @NotBlank(message = "Nome é obrigatório")
  private String name;

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

  public List<Menu> getMenu() {
    return menus;
  }

  public void setMenu(List<Menu> menus) {
    this.menus = menus;
  }
}