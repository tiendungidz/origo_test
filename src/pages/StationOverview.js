import React, { Component } from 'react';
import StationList from '../components/StationList';

const client_identifier = '6bcc9cb44d45d009ac4e48fc8589e4c1'; //Change value to your client identifier available at https://developer.oslobysykkel.no/clients

/*
    - Fetches 2 datasets of stations.
    - When both datasets are finished fetching, then combine them.
    - Display the result as multiple lists.

    Each list contains x amounts of stations, depending on configurations.
*/
class StationOverview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stations: [],
            splitStations: [],
            topMessage: "Laster ...",
            topSubtitle: ""
        };
    }

    componentDidMount() {
        //Note that the endpoint(s) points to the express.js http proxy. Please refer to the README for more regarding the backend.
        this.tramLayRa(
            'http://localhost:33300/api/v1/stations',
            'http://localhost:33300/api/v1/stations/availability',
             client_identifier,
             "id"
        )

    }

    /*
        Fetches 2 datasets (stations) from an api and combines them by key.
        When finished, it will also split the dataset into multiple datasets.
    */
    tramLayRa(endpoint1, endpoint2, clientIdentifier, key){
        var _this = this;
        Promise.all([
            this.apiYeuCau(endpoint1, clientIdentifier),
            this.apiYeuCau(endpoint2, clientIdentifier)
        ])
            .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
            .then(([dataset1, dataset2]) =>
                
                this.setState({splitStations: 
                    this.chiaChoChucks(
                        this.gopData(dataset2.stations, dataset1.stations, key), 25
                    )
                })
            )
            .catch(function(e) {
                console.log(e);
                _this.setState({topMessage: e.toString()}); //Show error on webpage
            });
    }
    
    apiYeuCau(endpoint, clientIdentifier){
        var config = {
            method: 'get',
            headers: {
                'Client-Identifier': clientIdentifier
            },
            responseType: 'json'
        }

        return new Promise((resolve, reject) => {
            return fetch(endpoint, config).then(response => {
                if (response.ok) {
                    resolve(response)
                } else {
                    if(response.status === 404){
                        this.setState({topSubtitle: "There might be a problem with the API endpoint."})
                    } else if (response.status === 401){
                        this.setState({topSubtitle: "Please check the 'Client Identifier' key or contact the administrator."})
                    }

                    reject(new Error(response.status + " " + response.statusText))
                }
            }, error => {
                reject(new Error(error.message))
            })
        })
    }

    gopData(dataset1, dataset2, key) {
        var index = [];
        var result = [];

        function chiaTheoCot (d1, d2) {
            return {
                id: (d1 !== undefined) ? d1.id : null,
                in_service: (d2 !== undefined) ? d2.in_service : null,
                title: (d2 !== undefined) ? d2.title : null,
                subtitle: (d2 !== undefined) ? d2.subtitle : null,
                number_of_locks: (d2 !== undefined) ? d2.number_of_locks : null,
                availability: (d1 !== undefined) ? d1.availability : null
            };
        }

        for (var i = 0; i < dataset1.length; i++) {
            var row = dataset1[i];
            index[row[key]] = row;
        }
        for (var k = 0; k < dataset2.length; k++) {
            var y = dataset2[k];
            var x = index[y[key]];
            result.push(chiaTheoCot(x, y));
        }

        return result;
    }

    /*
        Splits a dataset into multiple datasets containing x elements each.
        When displaying a large list, it is best to display it in chunks.
        Returns an array containing split datasets.

        O(n) time complexity.

        dataset: The dataset you want to split.
        splitSize: How big each dataset should be. The last set will contain less if there is not enough elements remaining.
    */
    chiaChoChucks(dataset, splitSize){
        var split = [];
        for (var i = 0; i < dataset.length; i++) {
            var last = split[split.length - 1];

            if (!last || last.length === splitSize) split.push([dataset[i]]);
            else last.push(dataset[i]);
        }

        return split;
    }


    hienDsTram(dataset){
        if(dataset != null){
            var stations = [];
            for (var i = 0; i < dataset.length; i++) {
                stations.push(
                    <div className='' key={i}>
                        <StationList dataset={dataset[i]}/>
                    </div>
                );
            }

            return stations;
        }

        return null;
    }

    example(type1, type2) {
        
    }

    render() {
        return (
            <div className="StationWrapper">
                <p className="Title">Cac tram tai Oslo</p>
                <p className="Bread">{this.state.splitStations.length ? "" : this.state.topMessage }</p>
                <p className="Bread">{this.state.topSubtitle }</p>

                {this.hienDsTram(this.state.splitStations)}
            </div>
        );
    }
}

export default StationOverview;
