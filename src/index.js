import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// App class component is 'extended' using React.Component to access its built-in methods
class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    // === Lifecycle Methods ===
    componentDidMount() {
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

        console.log("Component successfully rendered to screen");
    }

    componentDidUpdate() {
        console.log("Component updated successfully");
    }

    // Render required for every React component
    render() {
        //Displays error message when
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        // Displays latitude
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        // Displays problem loading
        return <Spinner />
    };
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)