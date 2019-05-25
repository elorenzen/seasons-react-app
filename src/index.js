import React from 'react';
import ReactDOM from 'react-dom';


// App class component is 'extended' using React.Component to access its built-in methods
class App extends React.Component {
    // First function run in any class-based component
    constructor(props) {
        // Allows use of React.Component methods after new constructor function overrides original React.Component
        super(props);

        // Set state for new object with empty, unknown value
        this.state = {lat: null, errorMessage: ''};

        // Use Geolocation API to determine user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // setState() takes this.state and assigns it value of latitude
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({errorMessage: err.message });
            }
        );
    }

    // Render required for every React component
    render() {
        //Displays error message when
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        // Displays latitude
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        // Displays problem loading
        return <div>Loading</div>
    };
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)