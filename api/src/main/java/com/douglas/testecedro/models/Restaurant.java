package com.douglas.testecedro.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

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
}