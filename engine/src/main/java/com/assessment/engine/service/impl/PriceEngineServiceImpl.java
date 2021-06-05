package com.assessment.engine.service.impl;

import com.assessment.engine.dao.PriceEngineDao;
import com.assessment.engine.model.Product;
import com.assessment.engine.model.TotalProductPrice;
import com.assessment.engine.service.PriceEngineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Created By Sohani on 6/5/2021
 */

@Service
public class PriceEngineServiceImpl implements PriceEngineService {

    @Autowired
    PriceEngineDao priceEngineDao;

    @Override
    public List<Product> getAllProducts() {
        List<Product> productList = priceEngineDao.findAll();
        if(productList.size() > 0) {
            return productList;
        } else {
            return new ArrayList<Product>();
        }
    }

    @Override
    public Product getSingleProduct(Long id) {
        Optional<Product> product = priceEngineDao.findById(id);
        return product.get();
    }

    @Override
    public Product UpdateProduct(Product product) {
        if(product.getId()!=null)  {
            Optional<Product> productAvailable = priceEngineDao.findById(product.getId());
            if(productAvailable.isPresent()) {
                Product newproduct = productAvailable.get();
                newproduct.setNoOfUnitsInCarton(product.getNoOfUnitsInCarton());
                newproduct.setPriceOfCarton(product.getPriceOfCarton());
                newproduct.setProductName(product.getProductName());
                newproduct = priceEngineDao.save(newproduct);
                return newproduct;
            } else {
                product = priceEngineDao.save(product);
                return product;
            }
        } else {
            product = priceEngineDao.save(product);
            return product;
        }
    }
}
