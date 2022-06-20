import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Event } from "../types/Event";
import dateFormat from "dateformat";

const card = (event: Event) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {event.description}
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <EventDate date={event.event_date} />
        </Typography>
        {/* <Typography variant="body2">
          some other text.
          <br />
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Add To Calendar</Button>
      </CardActions>
    </React.Fragment>
  );
};

export default function EventCard(props: any) {
  const event: Event = props.event as Event;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(event)}</Card>
    </Box>
  );
}

function EventDate(props: any) {
  const date = props.date;
  if (date === undefined) return <p>?</p>;
  else {
    const dateObject = new Date(date);
    const dateLine = dateFormat(dateObject, "dddd, mmmm dS, yyyy");
    const timeLine = dateFormat(dateObject, "h:MM:ss TT");
    return (
      <React.Fragment>
        {dateLine} <br />
        {timeLine}
      </React.Fragment>
    );
  }
}
