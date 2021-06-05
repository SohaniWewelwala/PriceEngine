package com.assessment.engine.dao;

import com.assessment.engine.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceEngineDao extends JpaRepository<Product, Long> {
}
