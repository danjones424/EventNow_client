import { Button, Paper } from '@material-ui/core';

const EventItem = ({ eventItem, handleRSVP }) => {
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: '120vh',
		margin: '20px auto',
	};

	const btnstyle = {
		margin: '8px 0',
		color: '#34344A',
		backgroundColor: '#F0F757',
	};

	return (
		<div>
			<Paper elevation={10} style={paperStyle}>
				<h2>{eventItem.event_name}</h2>
				<h3>{eventItem.category}</h3>
				<p>{eventItem.description}</p>
				<Button
					variant="contained"
					style={btnstyle}
					onClick={() => handleRSVP(eventItem)}
				>
					RSVP
				</Button>
			</Paper>
		</div>
	);
};

export default EventItem;
