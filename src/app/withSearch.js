import React from 'react';

// This function takes a component...
function withSearch(WrappedComponent) {
	// ...and returns another component.
	return class extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				searchTerm: '',
			};
		}

		handleSearch = event => {
			this.setState({
				searchTerm: event.target.value.toString()
			});
		};

		render() {
			return (
				<div className="wrapper">
					<div className="form-group">
						<label htmlFor="inputSearch">Search Field</label>
						<input type="text" className="form-control" id="inputSearch" placeholder="Search" onChange={this.handleSearch} value={this.state.searchTerm}/>
					</div>

					<WrappedComponent searchTerm={this.state.searchTerm}/>
				</div>
			);
		}
	}
}

export default withSearch;
