import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spiner = () => {
    return (
        <div>
            <Spinner className="text-center text-danger" animation="grow" />
        </div>
    );
};

export default Spiner;