import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../styles/Navbar.style';
import AllEventsContainer from './AllEventsContainer';
import EventCreateForm from './EventCreateForm';
import MyEventsContainer from './MyEventsContainer';

const Home = ({ currentUser }) => {
	const [createMode, setCreateMode] = useState(false);
	const [showEvents, setShowEvents] = useState(false);

	// const [newData, setData] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get('/me')
	// 		.then((resp) => {
	// 			console.log(resp.data);
	// 			// setData(resp.data);
	// 			name = resp.data.username;
	// 		})
	// 		.catch((error) => {
	// 			console.log('error', error);
	// 		});
	// }, []);

	// const name = newData.username;
	const handleCreateMode = () => {
		setCreateMode(!createMode);
	};

	return (
		<div>
			<h1 className="company_name">
				Welcome to EventsNow, {currentUser.username}!
			</h1>
			<Button
				onClick={() => {
					setShowEvents(!showEvents);
				}}
			>
				What's happening?
			</Button>
			{showEvents ? (
				<AllEventsContainer currentUser={currentUser} />
			) : null}
			<Button onClick={handleCreateMode}>Create Event?</Button>
			{createMode ? <EventCreateForm /> : null}
			{/* RENDER ALL EVENTS */}
			<MyEventsContainer />
			{/* BUTTON THAT RENDERS MY EVENTS */}
			{/* INSIDE OF MYEVENTS COMPONENT, BUTTON TO RENDER EVENT FORM, ENABLING EVENT CREATION */}
		</div>
	);
};

export default Home;
