package com.planbreeze.api.services;

import com.planbreeze.api.model.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {
    public List<Event> getEvents() {
        //TODO: gets a list of events for user
        Event newEvent = new Event();
        Event newEvent2 = new Event();
        List<Event> events = new ArrayList<>();
        events.add(newEvent);
        events.add(newEvent2);
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
