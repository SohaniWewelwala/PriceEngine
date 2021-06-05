package com.assessment.engine.model;

import javax.persistence.*;

/**
 * Created By Sohani on 6/5/2021
 */

@Entity
@Table(name = "Products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "carton_units", nullable = false)
    private Integer noOfUnitsInCarton;

    @Column(name = "carton_price", nullable = false)
    private Double priceOfCarton;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getNoOfUnitsInCarton() {
        return noOfUnitsInCarton;
    }

    public void setNoOfUnitsInCarton(Integer noOfUnitsInCarton) {
        this.noOfUnitsInCarton = noOfUnitsInCarton;
    }

    public Double getPriceOfCarton() {
        return priceOfCarton;
    }

    public void setPriceOfCarton(Double priceOfCarton) {
        this.priceOfCarton = priceOfCarton;
    }
}
