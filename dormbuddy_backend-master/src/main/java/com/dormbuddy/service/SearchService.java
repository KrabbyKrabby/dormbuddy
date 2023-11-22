package com.dormbuddy.service;

import com.dormbuddy.entity.RoomPost;
import com.dormbuddy.entity.SearchEntity;
import com.dormbuddy.repository.RoomPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SearchService {
    @Autowired
    private RoomPostRepository roomPostRepository;

    public List<RoomPost> search(SearchEntity searchEntity) {
        String location = searchEntity.getLocation().toLowerCase().trim();
        int rent = searchEntity.getRent();
        int roomArea = searchEntity.getRoomArea();
        boolean toilet = searchEntity.getToiletAttached();
        boolean kitchen = searchEntity.getKitchenAvailable();
        Optional<List<RoomPost>> allPosts = roomPostRepository.findAllBy();

        if (allPosts.isEmpty()) {
            System.out.println("Get Post Returned NULL");
            return null;
        }


        List<RoomPost> toReturn = new ArrayList<>();

        for (RoomPost post : allPosts.get()) {
            String street = post.getAddress().getStreet().toLowerCase().trim();
            String city = post.getAddress().getCity().toLowerCase().trim();
            String house = post.getAddress().getHouse().toLowerCase().trim();


            if (street.contains(location) || city.contains(location) || house.contains(location)) {
                if (post.getRent() <= rent) {
                    if (post.getDimension().getArea() >= roomArea) {
                        if(kitchen && !post.getKitchenAvailable())continue;
                        if(toilet && !post.getToiletAttached())continue;
                        toReturn.add(post);
                    }
                }
            }
        }
        return toReturn;
    }


}
