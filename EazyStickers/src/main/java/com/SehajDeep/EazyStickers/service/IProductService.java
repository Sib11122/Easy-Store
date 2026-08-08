package com.SehajDeep.EazyStickers.service;

import com.SehajDeep.EazyStickers.dto.ProductDto;
import com.SehajDeep.EazyStickers.entity.Product;

import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts();
}
