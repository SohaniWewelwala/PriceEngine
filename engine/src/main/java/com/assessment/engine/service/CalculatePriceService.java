package com.assessment.engine.service;

import com.assessment.engine.model.Product;
import com.assessment.engine.model.TotalProductPrice;

import java.util.List;

public interface CalculatePriceService {

    Double calculateProductPrice(Product products, Integer amount);

    Double calculateTotalPrice(List<TotalProductPrice> list);

    Double calculateSinglePrice(double priceOfCarton, int noOfUnitsInCarton);
}
