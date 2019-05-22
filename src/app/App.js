import React from 'react';

import preload from './locations.json';
// Searches the data.
import withSearch from './withSearch';
// Manages the data.
import LocationCard from './LocationCard';

import {validateString} from './utilities';

const App = props => {

	const {searchTerm} = props;
	const searchResult = preload.data
		.filter(location => {
			if (!validateString(searchTerm)) {
				return false;
			}

			const name = `${location.name} ${location.zone} ${location.region}`;

			const index = name
				.toLowerCase()
				.indexOf(searchTerm.toLowerCase());

			return (index !== -1);
		})
		.map(location => {
			return <LocationCard key={location.id} {...location}/>;
		});

	return (
		<div className="main">
			<h4>Preferred Locations</h4>

			<div>
				{searchResult}
			</div>
		</div>
	);
};

export default withSearch(App);
