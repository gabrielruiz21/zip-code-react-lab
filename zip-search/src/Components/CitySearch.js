import React, {Component} from 'react';
import axios from 'axios';
import "./zipCode.css";

class CitySearch extends Component {

    constructor(props) 
        {super(props);
        this.state = {
            city: '',
            data: [],
        };
    }

    handleChange = (event) => {

        this.setState({
            city: event.target.value
        });
    }

    componentDidMount = () => {
        let newCity = this.state.city.toUpperCase()
        axios.get(`http://ctp-zip-api.herokuapp.com/city/${newCity}`)
            .then(response => {
                const newData = response.data;
                this.setState({data: newData});
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate = (prevProps, prevState) => {

        if(prevState.city !== this.state.city) {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div>
                <form>
                    Enter a city name <br/>
                    <input type="text" name="city" onChange={this.handleChange}/>
                </form>
                {this.state.data.map(data =>                
                    <div className="zip">
                        <CityCodeCard zipcode={data} />
                    </div>
                )}
            </div>
        );
    }
};

class CityCodeCard extends Component {

    render() {
        return(
            <div className="zipCard">
                <ul>
                    <li> ZipCode: {this.props.zipcode} </li>
                </ul>
            </div>
        );
    }
};

export default CitySearch;