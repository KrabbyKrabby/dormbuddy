package com.dormbuddy.repository;

import com.dormbuddy.entity.Dimension;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DimensionRepository extends JpaRepository<Dimension,Integer> {
}
