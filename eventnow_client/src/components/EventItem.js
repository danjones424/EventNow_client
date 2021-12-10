import { Button, Paper } from '@material-ui/core';


const EventItem = ({ eventItem, handleRSVP, currentUser, handleBail }) => {
	// const [bailButton, setBailButton] = useState(true);

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

	const event = eventItem.event;

	console.log(eventItem);

	// console.log(currentUser);
	// const bailOrRSVP = () => {
	// 	if (eventItem.user_id === currentUser) {
	// 		setBailButton(false);
	// 	} else {
	// 		setBailButton(true);
	// 	}
	// };

	return (
		<div>
			<Paper elevation={10} style={paperStyle}>
				<h2>{event.event_name}</h2>
				<h3>{event.category}</h3>
				<p>{event.description}</p>
				{eventItem.user_id === currentUser ? (
					<Button
						variant="contained"
						style={btnstyle}
						onClick={() => handleBail(eventItem)}
					>
						Bail
					</Button>
				) : (
					<Button
						variant="contained"
						style={btnstyle}
						onClick={() => handleRSVP(eventItem)}
					>
						RSVP
					</Button>
				)}
			</Paper>
		</div>
	);
};

export default EventItem;
