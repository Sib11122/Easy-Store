package com.SehajDeep.EazyStickers.repository;

import com.SehajDeep.EazyStickers.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
