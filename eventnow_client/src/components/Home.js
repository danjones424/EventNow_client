import axios from 'axios';
import { useEffect, useState } from 'react';
import AllEventsContainer from './AllEventsContainer';
import MyEventsContainer from './MyEventsContainer';

const Home = () => {
	// const [newData, setData] = useState([]);
	let name;
	useEffect(() => {
		axios
			.get('/me')
			.then((resp) => {
				console.log(resp.data);
				// setData(resp.data);
				name = resp.data.username;
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	// const name = newData.username;
	console.log(name);

	return (
		<div>
			<h1 className="company_name">Welcome to EventsNow, {name}</h1>

			{/* RENDER ALL EVENTS */}
			<AllEventsContainer />
			<MyEventsContainer />
			{/* BUTTON THAT RENDERS MY EVENTS */}
			{/* INSIDE OF MYEVENTS COMPONENT, BUTTON TO RENDER EVENT FORM, ENABLING EVENT CREATION */}
		</div>
	);
};

export default Home;
