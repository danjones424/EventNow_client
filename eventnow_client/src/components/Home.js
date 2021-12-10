import {useState, useEffect} from 'react';
import { Button } from '../styles/Navbar.style';
import AllEventsContainer from './AllEventsContainer';
import EventCreateForm from './EventCreateForm';
import HostedEvents from './HostedEvents';
import MyEventsContainer from './MyEventsContainer';

const Home = () => {
	const [createMode, setCreateMode] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [showMyEvents, setShowMyEvents] = useState(false);
	const [showHostedEvents, setShowHostedEvents] = useState(false);
	const [currentUser, setCurrentUser] = useState({});

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
	useEffect(() => {
		fetch('/me')
			.then((r) => r.json())
			.then((user) => {
					setCurrentUser(user);
			})
			}, []);


	const eventCreatedFunction = () => {
		setCreateMode(false)
	};
	console.log(currentUser)
	return (
		<div>
			<h1 className="company_name">
				Welcome to EventsNow, {currentUser.username}!
			</h1>
			<Button onClick={() => 
			{setShowEvents(true) 
			setShowMyEvents(false)
			setShowHostedEvents(false)
			setCreateMode(false)}}

					>What's happening?</Button>
			<Button onClick={() => 
			{setShowEvents(false) 
			setShowMyEvents(false)
			setShowHostedEvents(false)
			setCreateMode(true)}}>Create Event?</Button>
			<Button
				onClick={() => {
					setShowMyEvents(true)
					setShowHostedEvents(false)
					setShowEvents(false)
					setCreateMode(false)
				}}
			>
				My Events
			</Button>
			<Button
				onClick={() => {
					setShowHostedEvents(true)
					setShowMyEvents(false)
					setShowEvents(false)
					setCreateMode(false)
				}}
			>
				Hosted Events
			</Button>
			{createMode ? (
				<EventCreateForm eventCreatedFunction={eventCreatedFunction} />
			) : null}
			{/* <Button
				onClick={() => {
					setShowEvents(!showEvents)
				}}
			>
				What's happening?
			</Button> */}
			{showEvents ? (
				<AllEventsContainer currentUser={currentUser} />
			) : null}
			{/* RENDER ALL EVENTS */}
			{/* BUTTON THAT RENDERS MY EVENTS */}

			
			{showMyEvents ? (
				<MyEventsContainer key={10} currentUser={currentUser} />
			) : null}
			{showHostedEvents ? (
				<HostedEvents currentUser={currentUser} />
			) : null}
			{/* INSIDE OF MYEVENTS COMPONENT, BUTTON TO RENDER EVENT FORM, ENABLING EVENT CREATION */}
		</div>
	);
};

export default Home;
