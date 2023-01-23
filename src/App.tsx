import { useEffect, useRef, useState } from 'react';
import { discoverEntries, exploredQuery } from './api/api';
import './App.scss';
import { setUserId } from './lib/utils';

function App() {
    useEffect(() => {
        setUserId();
    }, []);

    return (
        <>
            <div />
        </>
    );
}

export default App;
