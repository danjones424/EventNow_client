import { Button, Paper } from '@material-ui/core';

const EventItem = ({ eventItem }) => {
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: '120vh',
		margin: '20px auto',
	};

	return (
		<div>
			<Paper elevation={10} style={paperStyle}>
				<h2>{eventItem.event_name}</h2>
				<h3>{eventItem.category}</h3>
				<p>{eventItem.description}</p>
				<Button>RSVP</Button>
			</Paper>
		</div>
	);
};

export default EventItem;
