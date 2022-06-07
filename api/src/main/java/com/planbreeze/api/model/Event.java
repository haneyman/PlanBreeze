package com.planbreeze.api.model;

import java.util.Date;
//@Entity ?????
public class Event {
    private int id;
    private Date date;
    private String description;
    private String blob;
    private String location;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBlob() {
        return blob;
    }

    public void setBlob(String blob) {
        this.blob = blob;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", blob='" + blob + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
