import React from 'react';
import {useLocation} from 'react-router-dom';

// import Home from './Home';
    const Child = (props) => {
        const location=useLocation();
        const data=location.state?.data;
        return(
        <>
            <h1>{data ? data.email:"no data"}</h1>
            <h1>{data ? data.name:"no data"}</h1>
        </>
        );
    }
export default Child;