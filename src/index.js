import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // Use Geolocation API to determine user's current location
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return (
        <div>Things rendered OK :)</div>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)