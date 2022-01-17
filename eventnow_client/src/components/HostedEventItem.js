import { Button, Paper } from '@material-ui/core';
import { useState } from 'react';
import EditCard from './EditCard';

const HostedEventItem = ({ eventItem, handleDelete, handleRefetch }) => {
	const [edit, setEdit] = useState(false);

	const eventInstance = eventItem.event;
	console.log(eventInstance);

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
					<h2>{eventInstance.event_name}</h2>
					<h3>{eventInstance.category}</h3>
					<p>{eventInstance.description}</p>
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
							onClick={() => {
								handleDelete(eventInstance);
							}}
						>
							Delete
						</Button>
					</div>
				</Paper>
			) : (
				<EditCard
					handleRefetch={handleRefetch}
					event={eventInstance}
					handleEdit={handleEdit}
				/>
			)}
		</div>
	);
};

export default HostedEventItem;
