import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Root = () => {
    return (
        <div id="root">
            <h1 className="title">gkdlt</h1>
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById("root"));
