import { Button, Paper } from '@material-ui/core';
import { useState } from 'react';
import EditCard from './EditCard';

const HostedEventItem = ({
	handleDlete,
	eventItem,
	handleRSVP,
	currentUser,
	handleRefetch,
}) => {
	const [edit, setEdit] = useState(false);

	const event = eventItem.event;

	const handleDelete = () => {
		fetch(`/events/${event.id}`, {
			method: 'DELETE',
		})
			.then((r) => r.json())
			.then(handleRefetch());
	};

	const handleEdit = () => {
		setEdit(!edit);
	};
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
			{edit === false ? (
				<Paper elevation={10} style={paperStyle}>
					<h2>{event.event_name}</h2>
					<h3>{event.category}</h3>
					<p>{event.description}</p>
					<p>{event.date}</p>
					<p>{event.address}</p>
					<p>{event.city}</p>
					<p>{event.state}</p>
					<p>{event.zipcode}</p>
					<div>
						<Button
							variant="contained"
							style={btnstyle}
							onClick={handleEdit}
						>
							Edit
						</Button>
						<Button
							variant="contained"
							style={btnstyle}
							onClick={() => handleDelete(eventItem)}
						>
							Delete
						</Button>
					</div>
				</Paper>
			) : (
				<EditCard
					handleRefetch={handleRefetch}
					event={event}
					handleEdit={handleEdit}
				/>
			)}
		</div>
	);
};

export default HostedEventItem;
