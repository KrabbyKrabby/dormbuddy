package com.dormbuddy.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class RoomPost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "post_id")
    private long id;
    private String postIdHash;
    private String userEmail;
    private String userContact; //phone number
    private String title; // initial description
    private String description; //detailed description
    private String keyFeatures;
    private String mapLink;
    private int vacancy; //amount of slots left (1/2/3 people etc.)
    private int capacity; //max capacity of the room
    private int windowCount;
    private int rent; // rent paid by each person in that room (not the entire room)
    private String prefGender; //0 is male , 1 is female (it's not a spectrum)
    private boolean toiletAttached;
    private boolean kitchenAvailable;

    @ManyToOne(targetEntity = Dimension.class, cascade = CascadeType.ALL)
    @JoinColumn(name="dimension_fk",referencedColumnName = "dimension_id")
    Dimension dimension;

    @ManyToOne(targetEntity = Address.class,cascade = CascadeType.ALL)
    @JoinColumn(name="address_fk",referencedColumnName = "address_id")
    Address address;


    @ManyToMany(targetEntity = Image.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "image_fk", referencedColumnName = "")
    List<Image> imageList;

    public boolean getToiletAttached() {
        return toiletAttached;
    }

    public void setToiletAttached(boolean toiletAttached) {
        this.toiletAttached = toiletAttached;
    }

    public boolean getKitchenAvailable() {
        return kitchenAvailable;
    }

    public void setKitchenAvailable(boolean kitchenAvailable) {
        this.kitchenAvailable = kitchenAvailable;
    }

}
