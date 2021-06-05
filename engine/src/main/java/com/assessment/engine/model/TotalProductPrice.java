package com.assessment.engine.model;

import lombok.Data;
import lombok.ToString;

/**
 * Created By Sohani on 6/5/2021
 */

@Data
@ToString
public class TotalProductPrice {

    private Product products;
    private Integer amount;
}
