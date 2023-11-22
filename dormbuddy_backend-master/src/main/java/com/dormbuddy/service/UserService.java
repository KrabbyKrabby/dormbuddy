package com.dormbuddy.service;

import com.dormbuddy.entity.User;
import com.dormbuddy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User signup(User user) {
        User toRet = userRepository.findByEmail(user.getEmail());
        if (toRet != null) {
            return new User(-1L,"null","null","null","null");
        }
        userRepository.save(user);
        return user;
    }

    public User login(User user) {
        User failed = new User(-1L,"null","null","null","null");

        User toRet = userRepository.findByEmail(user.getEmail());
        if (toRet == null) {
            return failed;
        }
        if (!toRet.getPassword().equals(user.getPassword())) {
            return failed;
        }
//        userRepository.save(toRet);
        return toRet;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
