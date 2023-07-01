import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <div>
                <p>Contoh Link : <Link to="/home">Link</Link></p>
                

                {/* <Navigate to="/home" replace={true} /> */}
            </div>
        );
    }
}

export default Links;
