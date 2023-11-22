package com.dormbuddy.controller;

import com.dormbuddy.entity.RoomPost;
import com.dormbuddy.service.RoomPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/roomPost")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomPostController {
    @Autowired
    private RoomPostService roomPostService;
    @PostMapping("add")
    public ResponseEntity<?> addRoomPost(
            @RequestBody RoomPost roomPost
            ) {
        RoomPost toRet = roomPostService.addRoomPost(roomPost);
        return ResponseEntity.ok(roomPostService.addRoomPost(toRet));
    }
    @GetMapping("getAll")
    public ResponseEntity<?> getAllRoomPosts() {
        return ResponseEntity.ok(roomPostService.getAllRoomPosts());
    }
    @GetMapping("getFeatured")
    public ResponseEntity<?> getFeaturedRoomPosts() {
        return ResponseEntity.ok(roomPostService.getFeaturedRoomPosts());
    }
    //get all posts by email
    @GetMapping("getByEmail/{email}")
    public ResponseEntity<?> getAllRoomPostsByEmail(@PathVariable String email) {
        return ResponseEntity.ok(roomPostService.getAllRoomPostsByEmail(email));
    }

    @DeleteMapping("delete")
    public ResponseEntity<?> deleteRoomPost(@RequestParam String postIdHash) {
        System.out.println("deleteRoomPost: " + postIdHash);
        return ResponseEntity.ok(roomPostService.deleteRoomPost(postIdHash));
    }

}
