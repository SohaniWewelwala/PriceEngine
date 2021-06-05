package com.assessment.engine.controller;

import com.assessment.engine.dto.Price;
import com.assessment.engine.dto.PriceAll;
import com.assessment.engine.model.Product;
import com.assessment.engine.model.TotalProductPrice;
import com.assessment.engine.service.CalculatePriceService;
import com.assessment.engine.service.PriceEngineService;
import com.assessment.engine.util.ApiConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created By Sohani on 6/5/2021
 */

@RestController
@RequestMapping(ApiConstants.API_ROOT)
public class PriceEngineController {

    @Autowired
    PriceEngineService priceEngineService;

    @Autowired
    CalculatePriceService calculatePriceService;

    @GetMapping(value = ApiConstants.GET_ALL_PRODUCTS)
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> list = priceEngineService.getAllProducts();
        return new ResponseEntity<List<Product>>(list, new HttpHeaders(), HttpStatus.OK);
    }

    @GetMapping(value = ApiConstants.GET_SINGLE_PRODUCT)
    public ResponseEntity<Product> getSingleProduct(@PathVariable("id") Long id){
        Product entity = priceEngineService.getSingleProduct(id);
        return new ResponseEntity<Product>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value = ApiConstants.UPDATE_PRODUCT)
    public ResponseEntity<Product> UpdateProduct(@RequestBody Product products) {
        Product updateProduct = priceEngineService.UpdateProduct(products);
        return new ResponseEntity<Product>(updateProduct, new HttpHeaders(), HttpStatus.OK);
    }

    @GetMapping(value = ApiConstants.CALCULATE_SINGLE_PRODUCT)
    public ResponseEntity<Price> calculateSingleProduct(@PathVariable("productId") Long productId, @PathVariable("amount") Integer amount) {
        Product product = priceEngineService.getSingleProduct(productId);
        Price dto = new Price();
        if(product != null) {
            dto.setPrice(calculatePriceService.calculateProductPrice(product, amount));
        }
        return new ResponseEntity<Price>(dto, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value = ApiConstants.CALCULATE_ALL_PRICE)
    public ResponseEntity<Price> calculateTotalPrice(@RequestBody ArrayList<PriceAll> productList) {
        List<TotalProductPrice> products = new ArrayList<TotalProductPrice>();
            for(PriceAll product: productList) {
            Product productsAvailable = priceEngineService.getSingleProduct(product.getProductId());
            if(productsAvailable != null) {
                TotalProductPrice productPrice = new TotalProductPrice();
                productPrice.setProducts(productsAvailable);
                productPrice.setAmount(product.getPrice());
                products.add(productPrice);
            }
        }
        Price price = new Price();
        price.setPrice(calculatePriceService.calculateTotalPrice(products));
        return new ResponseEntity<Price>(price, new HttpHeaders(), HttpStatus.OK);
    }

}
