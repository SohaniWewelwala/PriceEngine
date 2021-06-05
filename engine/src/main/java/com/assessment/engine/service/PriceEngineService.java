package com.assessment.engine.service;

import com.assessment.engine.model.Product;
import com.assessment.engine.model.TotalProductPrice;

import java.util.List;

public interface PriceEngineService {

    List<Product> getAllProducts();

    Product getSingleProduct(Long id);

    Product UpdateProduct(Product products);
}
