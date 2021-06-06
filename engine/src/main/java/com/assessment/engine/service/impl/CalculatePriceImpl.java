package com.assessment.engine.service.impl;

import com.assessment.engine.model.Product;
import com.assessment.engine.model.TotalProductPrice;
import com.assessment.engine.service.CalculatePriceService;
import com.assessment.engine.util.Constants;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created By Sohani on 6/5/2021
 */
@Service
public class CalculatePriceImpl implements CalculatePriceService {

    @Override
    public Double calculateProductPrice(Product product, double amount) {
        Double totalPrice = 0.0;
        try {
            double cartonAmount = amount / product.getNoOfUnitsInCarton();
            double remainingAmount = amount % product.getNoOfUnitsInCarton();
            Double cartonPrice = cartonAmount * product.getPriceOfCarton();
            Double singleUnitPrice = remainingAmount * calculateSinglePrice(product.getPriceOfCarton(), product.getNoOfUnitsInCarton());
            totalPrice = cartonPrice + singleUnitPrice;
            if(cartonAmount >= Constants.MIN_CARTON_TO_DISCOUNT) {
                Double discountAmount = (product.getPriceOfCarton() * Constants.DISCOUNT_PRECENTAGE);
                totalPrice = totalPrice - discountAmount;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return totalPrice;
    }

    @Override
    public Double calculateTotalPrice(List<TotalProductPrice> list) {
        Double totalPrice = 0.0;
        for(TotalProductPrice purchasedProduct: list) {
            totalPrice = totalPrice + this.calculateProductPrice(purchasedProduct.getProducts(), purchasedProduct.getAmount());
        }
        return totalPrice;
    }

    @Override
    public Double calculateSinglePrice(double priceOfCarton, int noOfUnitsInCarton) {
        return (priceOfCarton / noOfUnitsInCarton) + (priceOfCarton / noOfUnitsInCarton * Constants.INCREASED_PERCENTAGE);
    }
}
