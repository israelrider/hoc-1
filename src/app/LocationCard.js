import React from 'react';

class LocationCard extends React.Component {

	render() {
		const {name, zone, region} = this.props;

		return (
			<div>
				<p>
					{name}
				</p>

				<p>
					{zone}
				</p>

				<p>
					{region}
				</p>
			</div>
		);
	}
}

export default LocationCard;
