package com.dormbuddy.repository;

import com.dormbuddy.entity.RoomPost;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RoomPostRepository extends JpaRepository<RoomPost, Long> {
    Optional<List<RoomPost>> findAllBy();
    //find all posts sorted by rent in descending order
    @Query("SELECT r FROM RoomPost r ORDER BY r.rent DESC")
    Optional<List<RoomPost>> findAllByRentDesc();

    Optional<List<RoomPost>> findAllByUserEmail(String email);


    Optional<List<RoomPost>> findByPostIdHash(String postIdHash);
}
