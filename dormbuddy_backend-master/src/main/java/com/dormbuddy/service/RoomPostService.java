package com.dormbuddy.service;


import com.dormbuddy.entity.RoomPost;
import com.dormbuddy.repository.RoomPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomPostService {
    @Autowired
    private RoomPostRepository roomPostRepository;

    public RoomPost addRoomPost(RoomPost roomPost) {
        return roomPostRepository.save(roomPost);
    }

    public Optional<List<RoomPost>> getAllRoomPosts() {
        return roomPostRepository.findAllBy();
    }

    public Optional<List<RoomPost>> deleteRoomPost(String postIdHas) {
        System.out.println("delete in service: " + postIdHas);
        Optional<List<RoomPost>> toDelete = roomPostRepository.findByPostIdHash(postIdHas);
        if(toDelete.isEmpty()) return Optional.empty();
        roomPostRepository.deleteAll(toDelete.get());
        return toDelete;
    }

    public Optional<List<RoomPost>> getFeaturedRoomPosts() {
        Optional<List<RoomPost>> allPostsByRent = roomPostRepository.findAllByRentDesc();
        //select the top 6 posts
        if (allPostsByRent.isEmpty()) return Optional.empty();

        if (allPostsByRent.get().size() < 6) return allPostsByRent;

        return Optional.of(allPostsByRent.get().subList(0, 6));
    }

    public Optional<List<RoomPost>> getAllRoomPostsByEmail(String email) {
        return roomPostRepository.findAllByUserEmail(email);
    }
}
