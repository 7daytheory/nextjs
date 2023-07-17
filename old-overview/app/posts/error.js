"use client" //Error components must be client side components

//Automatically runs when an error is shown

import { useEffect } from 'react';

const Error = ({error, reset}) => {

    useEffect(() => {
        // log the error to an error reporting service
        console.log(error);
    }, [error]);

return (
    <div>
        <h2>Something went wrong!</h2>
        <button
            onClick={
                () => reset()
            }
            >Try Again</button>
    </div>
    );
}

export default Error;