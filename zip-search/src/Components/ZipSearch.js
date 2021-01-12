import React, {Component} from 'react';
import axios from 'axios';
import "./zipCode.css";

class ZipCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            data: [],
        };
    }


    handleChange = (event) => {

        this.setState({
            zip: event.target.value
        });
    }

    componentDidMount = () => {
        axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
            .then(response => {
                const newData = response.data;
                this.setState({data: newData});
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate = (prevProps, prevState) => {

        if(prevState.zip !== this.state.zip) {

            this.componentDidMount();
        }

    }

    render() {
        return (
            <>
                <form >
                    Enter a Zip Code <br/>
                    <input type="text" name="zip" onChange={this.handleChange}/>
                </form>
                {this.state.data.map(data =>
                    <div key={data.RecordNumber} className="zip">
                        <ZipCodeCard city={data.City} state={data.State}
                        latitude={data.Lat} longitude={data.Long}
                        population={data.EstimatedPopulation} wages={data.TotalWages}/>
                    </div>
                )}
            </>
        );
    }
};

class ZipCodeCard extends Component {

    render() {
        return(
            <div className="zipCard">
                <ul>
                    <h3> {this.props.city}, {this.props.state}</h3>
                    <li> State: {this.props.state} </li>
                    <li> Location: ({this.props.latitude}, {this.props.longitude}) </li>
                    <li> Population (estimated): {this.props.population} </li>
                    <li> Total Wages: {this.props.wages} </li>
                </ul>
            </div>
        );
    }
};

export default ZipCode;