package com.planbreeze.api.controllers;

import java.util.Date;
import java.util.List;

import com.planbreeze.api.model.Event;
import com.planbreeze.api.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class EventsController {
    @Autowired
    EventService eventService;

    @GetMapping("/ping")
    public String ping(String name) {
        return "Events is alive " + new Date();
    }
  
    @GetMapping("/events/{id}")
    public Event getEvent(@PathVariable Long id) {
        Event event = eventService.getEvent(id);
        return event;
    }

    @GetMapping("/events")
    public List<Event> getEvents() {
        List<Event> events = eventService.getEvents();
        return events;
    }

    @PostMapping("/events")
    public Event addEvent(@RequestBody Event event) {
        Event newEvent = eventService.addEvent(event);
        return new Event();
    }

    @PutMapping("/events/{id}")
    public Event updateEvent(@RequestBody Event event, @PathVariable Long id) {
        //TODO
        return new Event();
    }
}