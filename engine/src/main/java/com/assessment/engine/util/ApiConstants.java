package com.assessment.engine.util;

/**
 * Created By Sohani on 6/5/2021
 */
public class ApiConstants {

    public static final String API_ROOT = "/products";

    public static final String CONSUME_TYPE_JSON = "application/json";

    public static final String GET_ALL_PRODUCTS = "/get-all-products";
    public static final String GET_SINGLE_PRODUCT = "/get-products/{id}";
    public static final String UPDATE_PRODUCT = "/update-products";
    public static final String CALCULATE_SINGLE_PRODUCT = "/calculate_product/single/{productId}/{amount}";
    public static final String CALCULATE_ALL_PRICE = "/calculate_price/all";
}
