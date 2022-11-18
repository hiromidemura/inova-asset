package com.inovaasset.indicafundos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inovaasset.indicafundos.entities.Fundos;

public interface FundosRepository extends JpaRepository<Fundos, Long> {

	List<Fundos> findByPerfil(Long perfil);

}
