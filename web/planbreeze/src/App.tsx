import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import EventDialog from "./components/EventDialog";
import Fab from "@mui/material/Fab";
import ApplicationBar from "./components/AppBar";
import { Event } from "./types/Event";
import EventCard from "./components/EventCard";
// import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [eventDialogOpen, setEventDialogOpen] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<Event[]>();
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const apiUrl = "http://localhost/events/";

  React.useEffect(() => {
    setLoggedIn(true);
    if (loggedIn) {
      loadData();
    }
  }, [loggedIn]);

  const loadData = () => {
    const testData: Event[] = [
      { description: "desc 1", date: "date 1", blob: undefined },
      { description: "desc 2", date: "date 2", blob: undefined },
    ];
    setEvents(testData);
    console.log("events loaded", events);
  };

  const openEventDialog = () => {
    setEventDialogOpen(true);
  };

  const closeEventDialog = (event: Event) => {
    // save Event
    if (events && event) {
      const curEvents = [...events];
      curEvents.push(event);
      setEvents(curEvents);
    }
    setEventDialogOpen(false);
  };

  const login = () => {
    // login goes here
    loadData();
  };

  return (
    <div>
      <ApplicationBar />
      {/* <header>
        <h2>PlanBreeze</h2>
      </header> */}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <div className="eventsBox">
        {/* <div className="eventBox"> */}
        {events?.map((event: Event, index: number) => (
          <EventCard event={event}/>
        ))}
        <div className="add-button">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => openEventDialog()}
          >
            Add
            {/* <AddIcon /> */}
          </Fab>
        </div>
        {/* </div> */}
      </div>
      <div className="iframeBox">
        <iframe
          title="iframe1"
          src="https://calendar.google.com/calendar/embed?src=mancalledhaney%40gmail.com&ctz=America%2FLos_Angeles"
          width="800"
          height="600"
          scrolling="no"
        ></iframe>
      </div>

      {/* <div className="toolbar">{renderToolbar()}</div> */}

      <EventDialog
        eventDialogOpen={eventDialogOpen}
        handleClose={closeEventDialog}
      />
    </div>
  );
};

function renderToolbar() {
  return (
    <div>
      <Button variant="contained">Add Event</Button>
    </div>
  );
}

export default App;
