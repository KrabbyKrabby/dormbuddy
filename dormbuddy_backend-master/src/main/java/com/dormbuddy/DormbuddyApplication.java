package com.dormbuddy;

import com.dormbuddy.entity.Address;
import com.dormbuddy.entity.Dimension;
import com.dormbuddy.entity.Image;
import com.dormbuddy.entity.RoomPost;
import com.dormbuddy.repository.RoomPostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class})
@RestController
public class DormbuddyApplication {
    public static void main(String[] args) {
        SpringApplication.run(DormbuddyApplication.class, args);
    }

//    @Bean
    CommandLineRunner run(RoomPostRepository roomPostRepository) {
        return args -> {
            roomPostRepository.save(
                    new RoomPost(
                            1,
                            "97k2340932804",
                            "hello@gmail.com",
                            "017923820",
                            "title1",
                            "description1",
                            "keyFeatures1",
                            "googleMapLink1",
                            12,
                            121,
                            2,
                            100,
                            "male",
                            false,
                            false,
                            new Dimension(1121,12,28),
                            new Address(55,"street","city","state"),
                            List.of(new Image(1,"imagePath1"))
                    ));

        };
    }


    @GetMapping("/test_main")
    public String testMain() {
        return "get main page";
    }
}
