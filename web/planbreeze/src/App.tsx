import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EventDialog from "./EventDialog";
import Fab from "@mui/material/Fab";
// import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [eventDialogOpen, setEventDialogOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  // const openDialog = React.useRef(null);

  const openTheDialog = () => {
    setEventDialogOpen(true);
  }
  const closeEventDialog = () => {
    setEventDialogOpen(false);
  };
  
  return (
    <div>
      <header>
        <h2>PlanBreeze</h2><p>open: {eventDialogOpen ? "true" : "false"}</p>
      </header>
      
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <div className="eventsBox">
        {/* <div className="eventBox"> */}
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          {BasicCard("Some fun event", "6/30/2022")}
        </Box>
        <div className="add-button">
          <Fab color="primary" aria-label="add" onClick={() => openTheDialog()}>
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

      <div className="toolbar">{renderToolbar()}</div>

      <EventDialog eventDialogOpen={eventDialogOpen} handleClose={closeEventDialog}/>
    </div>
  );
}

function renderToolbar() {
  return (
    <div>
      <Button variant="contained">Add Event</Button>
    </div>
  );
}

function BasicCard(description: string, date: string) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <p>{description}</p>
        <p>{date}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Calendar</Button>
      </CardActions>
    </Card>
  );
}

export default App;
