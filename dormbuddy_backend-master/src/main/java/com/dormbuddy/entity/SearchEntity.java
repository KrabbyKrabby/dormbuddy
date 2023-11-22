package com.dormbuddy.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SearchEntity {
    private String location;
    private int rent;
    private int roomArea;
    private boolean toiletAttached;
    private boolean kitchenAvailable;


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
