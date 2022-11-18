package com.inovaasset.indicafundos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inovaasset.indicafundos.entities.Fundos;
import com.inovaasset.indicafundos.repositories.FundosRepository;

@RestController
@RequestMapping(value ="api/fundos")
public class FundosController {

	@Autowired
	private FundosRepository repository;
	
	@GetMapping
	public List<Fundos> findAll() {
		List<Fundos> result = repository.findAll();
		return result;
	}
	
	@GetMapping(value = "/{perfil}")
	public List<Fundos> findByPerfil(@PathVariable Long perfil) {
		List<Fundos> result = repository.findByPerfil(perfil);
		return result;
	}
}
