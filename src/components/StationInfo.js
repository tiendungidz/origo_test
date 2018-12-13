import React, { Component } from 'react';


/*
    Takes in the prop 'info'.
    Displays it in as a cell.

    Prop should be an array containing:
    - in service (bool)
    - title (string)
    - subtitle (string)
    - number of locks (int)
    - available locks (int)
    - available bikes (int)
*/
class StationInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
        };
	}

	componentDidMount() {
        this.assembleFromProps();
    }
    
    assembleFromProps(){
        var in_service;
        if(this.props.info.in_service === true){
            in_service = "Tilgjengelig";
        }
        else {
            in_service = "Ute av drift";
        }

        this.setState({
            in_service: "Status: " + in_service,
            name: this.props.info.title + ", " + this.props.info.subtitle,            
            number_of_locks: this.props.info.number_of_locks,
            available_locks: "Låser: " + this.props.info.availability.locks,
            available_bikes: "Sykler: " + this.props.info.availability.bikes
        })
    }

	render() {
    	return (
        	<div className="StationInfoWrapper">
            	<p className="Bread">{this.state.name}</p>
            	<p className="Bread">{this.state.in_service}</p>
                <p className="Bread">{this.state.available_bikes}</p>
                <p className="Bread">{this.state.available_locks + " av " + this.state.number_of_locks}</p>
        	</div>
      	);
  	}
}

export default StationInfo;