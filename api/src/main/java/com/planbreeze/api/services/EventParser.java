package com.planbreeze.api.services;

import com.planbreeze.api.model.Event;

import java.sql.Array;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EventParser {
    private static final String[] monthsFull = new String[]{"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

    public static Event parseBlob(String blob) {
        Event event = new Event();
        event.setDate(extractDate(blob));
        event.setDescription(scrubDescription(blob));
        event.setId((int) Math.random());
        return event;
    }

    public static String scrubDescription(String blob) {
        String result = blob.trim();
        result = removeString("Add to calendar", blob);
        return result.trim();
    }

    private static String removeString(String pattern, String blob) {
        return blob.replaceAll(pattern, "");
    }

    public static Date extractDate(String blob) {
        String dateStr = "";
        for (String month : monthsFull) {
            int posMonth = blob.indexOf(month + " ");
            if (posMonth >= 0) {
                int posYear = 0;
                Pattern pattern = Pattern.compile("20[2-9][1-9]");
                Matcher matcher = pattern.matcher(blob);
                if (matcher.find()) {
                    posYear = matcher.start();
                }
                if (posYear >= 0) {
                    dateStr = blob.substring(posMonth, posYear + 4);
                }
                break;
            }
        }
        // find the time
        int posAmPm = blob.indexOf(" AM");
        int approxStart = 0;
        String ampm = "";
        if (posAmPm >= 0) {
            ampm = "AM";
            approxStart = posAmPm - 10;
        } else {
            posAmPm = blob.indexOf("PM");
            if (posAmPm >= 0) {
                ampm = "PM";
                approxStart = posAmPm - 10;
            }
        }

        String timeStr = "";
        int posTime = blob.indexOf(":", approxStart);
        if (posTime >= 0) {
            timeStr = blob.substring(posTime - 2, posAmPm).trim();
        }
        String dateTimeStr = dateStr + " " + timeStr + " " + ampm;
        System.out.println("dateTimeStr: " + dateTimeStr);

        if (dateStr == null) {
            return null;
        } else {
            Date date = new Date(dateTimeStr);
            return date;
        }
    }
}

//public enum AMPM {
//    AM, PM
//}