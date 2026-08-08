package com.SehajDeep.EazyStickers.controller;

import com.SehajDeep.EazyStickers.dto.ProductDto;
import com.SehajDeep.EazyStickers.entity.Product;
import com.SehajDeep.EazyStickers.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    @Autowired
    private final IProductService iProductService;
    @GetMapping
    public List<ProductDto> getProducts() {
        List<ProductDto> productList=iProductService.getProducts();
        return productList;
    }
}