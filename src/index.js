import React from 'react';
import ReactDOM from 'react-dom';


// App class component is 'extended' using React.Component to access its built-in methods
class App extends React.Component {
    // First function run in any class-based component
    constructor(props) {
        // Allows use of React.Component methods after new constructor function overrides original React.Component
        super(props);

        // Set state for new object with empty, unknown value
        this.state = {lat: null};
    }

    // Render required for every React component
    render() {
        // Use Geolocation API to determine user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return (
            <div>Latitude: {this.state.lat} </div>
        )
    };
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)