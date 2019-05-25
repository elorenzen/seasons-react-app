import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Things rendered OK :)</div>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)