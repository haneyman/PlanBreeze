package com.planbreeze.api.services;

import com.planbreeze.api.model.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class EventService {
    public List<Event> getEvents() {
        //TODO: gets a list of events for user
        List<Event> events = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            Event newEvent = new Event();
            newEvent.setDescription("event " + i + " description is this here text which could get lengthy");
            String newDate = "06/" + Integer.toString(i + 10) + "/2020 6:00 PM";
            Date date = new Date(newDate);
            newEvent.setDate(date);
            events.add(newEvent);
        }
        return events;
    }

    public Event getEvent(Long id) {
        //TODO: gets an event by id
        return new Event();
    }

    public Event addEvent(Event inEvent) {
        //TODO: persist new event
        Event newEvent = new Event();
        return newEvent;
    }

    public Event updateEvent(Event event) {
        //TODO: persist updated event
        return event;
    }
}
