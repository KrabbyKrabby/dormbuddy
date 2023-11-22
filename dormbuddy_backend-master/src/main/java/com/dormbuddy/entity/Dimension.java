package com.dormbuddy.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Dimension {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dimension_id")
    private long id;


    //length and width are in feet
    private int width;
    private int length;
    public int getArea(){
        return width*length;
    }
}
