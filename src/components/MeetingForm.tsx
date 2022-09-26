import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AgendaContext } from "context/AgendaProvider";
import { Agenda, Meeting, Topic } from "types";

export default function MeetingForm() {
  const [meeting, setMeeting] = React.useState<string>("");
  const [topic, setTopic] = React.useState<string>("");
  const [meetingObj, setMeetingObj] = React.useState<Meeting | null>(null);
  const [topicObj, setTopicObj] = React.useState<Topic | null>(null);
  const [open, setOpen] = React.useState(false);
  const { agendaDetails, setAgendaDetails } = React.useContext(AgendaContext);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setMeeting("");
    setTopic("");
    setTopicObj(null);
    setMeetingObj(null);
    setTime("");
    setTitle("");
    setDescription("");

    setOpen(false);
  };

  const deleteTopic = () => {
    if (meetingObj && topicObj) {

      const m = agendaDetails.meetings.map((mt: Meeting) => ({
        ...mt,
        topics: mt.topics.filter((t: Topic) => t.title !== topicObj.title)
      }))

      setAgendaDetails({
        user: agendaDetails.user,
        meetings: m
      });
    }
    handleClose();
  }

  const submit = () => {
    if (title && time && description) {
      const newTopic: Topic = {
        id: Math.floor(Math.random() * 1000000),
        timeEstimate: parseInt(time),
        title,
        description,
        image: {
          src: "https://www.jazzhr.com/wp-content/uploads/2020/04/welcoming-new-hires.jpg",
          alt: "Welcome new hires on blackboard",
        }
      };

      if (meetingObj && topicObj) {
        for (let i = 0; i < meetingObj.topics.length; i++) {
          if (meetingObj.topics[i].title === topicObj.title) {
            meetingObj.topics[i] = newTopic;
            break;
          }
        }
      } else {
        meetingObj?.topics.push(newTopic);
      }

      const meetings = [ ...agendaDetails.meetings ];

      for (let i = 0; i < agendaDetails.meetings.length; i++) {
        if (agendaDetails.meetings[i].name === meetingObj?.name) {
          meetings[i] = meetingObj;
          break;
        }
      }
      setAgendaDetails({
        user: agendaDetails.user,
        meetings
      });
    }

    handleClose();
  };

  return (
    <div>
      <IconButton sx={{ mr: 4 }} onClick={handleClickOpen} color="inherit">
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle variant="h4">Modify Meetings</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Typography variant="h6">Select Meeting:</Typography>
            <Select
              labelId="select-label"
              id="select"
              value={meeting}
              placeholder="Meeting"
              onChange={(event: SelectChangeEvent) =>
                setMeeting(event.target.value as string)
              }
            >
              {Array.isArray(agendaDetails?.meetings) &&  agendaDetails?.meetings.map((m: Meeting) => {
                if (m.presenter === agendaDetails?.user.name) {
                  return (
                    <MenuItem
                      key={m.name}
                      value={m.name}
                      onClick={() => setMeetingObj(m)}
                    >
                      {m.name}
                    </MenuItem>
                  );
                }
              })}
            </Select>
            <Typography variant="subtitle2" mt={1}>
              Note: You are only able to select meetings in which you are the
              presenter
            </Typography>

            {meetingObj && (
              <>
                <Typography variant="h6" mt={2}>
                  Select Topic:
                </Typography>
                <Select
                  labelId="select-label"
                  id="select"
                  value={topic}
                  placeholder="Topic"
                  onChange={(event: SelectChangeEvent) =>
                    setTopic(event.target.value as string)
                  }
                >
                  {meetingObj.topics.map((t: Topic) => (
                    <MenuItem
                      key={t.title}
                      value={t.title}
                      onClick={() => setTopicObj(t)}
                    >
                      {t.title}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
            {meetingObj && (
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title"
                  fullWidth
                  variant="standard"
                  value={title}
                  onChange={(newValue) => setTitle(newValue.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="time"
                  label="Time Estimate (minutes)"
                  type="number"
                  fullWidth
                  variant="standard"
                  value={time}
                  onChange={(newValue) => setTime(newValue.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  fullWidth
                  variant="standard"
                  value={description}
                  onChange={(newValue) => setDescription(newValue.target.value)}
                />
              </>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deleteTopic}>Delete</Button>
          <Button onClick={submit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
