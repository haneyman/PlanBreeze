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
        Event newEvent = new Event();
        newEvent.setDescription("event 1 description is this");
        newEvent.setDate(new Date("06/10/2020 6:00 PM"));
        Event newEvent2 = new Event();
        newEvent2.setDescription("event 2 description is this");
        newEvent2.setDate(new Date("06/11/2020 6:00 PM"));
        Event newEvent3 = new Event();
        newEvent3.setDescription("event 3 description is this");
        newEvent3.setDate(new Date("06/12/2020 6:00 PM"));
        List<Event> events = new ArrayList<>();
        events.add(newEvent);
        events.add(newEvent2);
        events.add(newEvent3);
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
