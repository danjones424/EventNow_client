import React, {useState} from 'react'
import { Paper, TextField, Grid,  Button } from '@material-ui/core';


const EditCard = ({handleEdit, event, handleRefetch}) => {
console.log(event.id)
  const handleSubmit = (e) => {
      e.preventDefault()
        fetch(`/events/${event.id}`,{
            method:"PATCH",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventForm)
        })
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp.data)
          handleRefetch()
          handleEdit()
        })
        .catch(error => {
          console.log("error", error);
  })}

  
        const [eventForm, setEventForm] = useState({
            event_name: '',
            category: '',
            description: ''
        });

        const handleForm = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setEventForm({ ...eventForm, [name]: value });
        };

        const paperStyle = {
            padding: 20,
            height: 'auto',
            width: '70vh',
            margin: '20px auto',
        };
        const btnstyle = {
            margin: '8px 0',
            color: '#34344A',
            backgroundColor: '#cc5a71',
        };

    return (
        <div>
            <Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Create Event</h2>
				</Grid>
				<TextField
					placeholder="Event Name"
					fullWidth
                    defaultValue={event.event_name}
					name="event_name"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<TextField
					placeholder="Category"
					fullWidth
                    defaultValue={event.category}
					name="category"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>

				<TextField
					placeholder="Description"
					fullWidth
					name="description"
                    defaultValue={event.description}
					type="text"
					onChange={handleForm}
					required
				></TextField>
                <Button style={btnstyle} onClick={handleSubmit}>Submit</Button>
                <Button style={btnstyle} onClick={handleEdit}>Cancel</Button>
                </Paper>
        </div>
    )
}

export default EditCard
