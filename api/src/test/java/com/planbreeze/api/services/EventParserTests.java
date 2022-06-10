package com.planbreeze.api.services;

import com.planbreeze.api.model.Event;
import org.junit.jupiter.api.Test;

import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class EventParserTests {
        final String test1 = "Comedy Night at The Greenery !!\n" +
                "Walnut Creek - Hiking, Biking, Happy Hour\n" +
                "Wednesday, June 8, 2022 \n" +
                "7:00 PM America/Los_Angeles\n" +
                "The Greenery Restaurant & Sports Bar \n" +
                "1551 Marchbanks Dr\n" +
                "Walnut Creek, CA 94598\n" +
                " Add to calendar\t\n" +
                "Add to calendar\n";
        final String test2 = "Comedy Night at The Greenery !!\n" +
                "Walnut Creek - Hiking, Biking, Happy Hour\n" +
                "Wednesday, June 8, 2022 \n" +
                "10:00 AM America/Los_Angeles\n" +
                "Add to calendar\n";

        @Test
        public void testMeetupBlob() throws Exception {
            Event result = EventParser.parseBlob(test1);
            System.out.println("Parsed blob: " + result);
            assertThat(result.getDate()).isEqualTo(new Date("June 8, 2022 7:00 PM"));
        }

        @Test
        public void test2MeetupBlobHH() throws Exception {
            Event result = EventParser.parseBlob(test2);
            System.out.println("Parsed blob: " + result);
            assertThat(result.getDate()).isEqualTo(new Date("June 8, 2022 10:00 AM"));
        }
        @Test
        public void test3() throws Exception {
//            Event result = EventParser.parseBlob(test2);
            StringBuilder sb = new StringBuilder();
            String[] lines = test1.split("\\n");

            System.out.println("lines: " + lines.length);
//            assertThat(result.getDate()).isEqualTo(new Date("June 8, 2022 10:00 AM"));
        }

}
