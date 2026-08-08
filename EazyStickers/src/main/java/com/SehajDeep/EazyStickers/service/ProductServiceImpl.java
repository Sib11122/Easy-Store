package com.SehajDeep.EazyStickers.service;

import com.SehajDeep.EazyStickers.dto.ProductDto;
import com.SehajDeep.EazyStickers.entity.Product;
import com.SehajDeep.EazyStickers.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService{

    private final ProductRepository productRepository;
    @Override
    public List<ProductDto> getProducts(){
        return productRepository.findAll().stream().map(this::transformToDto).collect(Collectors.toList());
    }
    private ProductDto transformToDto(Product product){
        ProductDto productDto=new ProductDto();
        BeanUtils.copyProperties(product,productDto);
        return productDto;
    }
}
