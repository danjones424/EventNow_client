import { Button, Paper } from '@material-ui/core';

const AttendingEventItem = ({ handleBail, eventItem }) => {
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: '120vh',
		margin: '20px auto',
	};

	const btnstyle = {
		margin: '8px 0',
		color: 'white',
		backgroundColor: 'red',
	};

	const event = eventItem.event;
	return (
		<>
			{' '}
			<div>
				<Paper elevation={10} style={paperStyle}>
					<h2>{event.event_name}</h2>
					<h3>{event.category}</h3>
					<p>{event.description}</p>
					<Button
						variant="contained"
						style={btnstyle}
						onClick={() => handleBail(eventItem)}
					>
						Bail
					</Button>
				</Paper>
			</div>
			);
		</>
	);
};

export default AttendingEventItem;
