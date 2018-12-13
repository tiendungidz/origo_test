import React, { Component } from 'react';
import StationInfo from './StationInfo';


/*
	Takes in a station dataset (prop) and displays it in a list of StationsInfo's.
    - Does not have a limit.
    - For performance purposes, you should filter and/or limit the dataset beforehand.
*/
class StationList extends Component {
    constructor(props) {
    super(props);
    	this.state = { 
        	stations: null
    	};
	}

	componentDidMount() {
		this.setState({
			stations: this.props.dataset
		})
	}

	renderStations(dataset){
		if(dataset != null){
            var stations = [];
            for (var i = 0; i < dataset.length; i++) {
                stations.push(
                    <div className='' key={i}>
                        <StationInfo info={dataset[i]}/>
                    </div>
                );
            }

            return stations;
        }
	}

	render() {
    	return (
        	<div className="StationListWrapper">
            	<div className="Divider"/>
				{this.renderStations(this.state.stations)}
        	</div>
      	);
  	}
}

export default StationList;