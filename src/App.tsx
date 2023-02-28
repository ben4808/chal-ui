import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CreateScreen from './components/CreateScreen/CreateScreen';
import SolveScreen from './components/SolveScreen/SolveScreen';
import { setUserId } from './lib/utils';

function App() {
    useEffect(() => {
        setUserId();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateScreen />}>
                    <Route path="solve/:id" element={<SolveScreen />} />
                    <Route path="*" element={<CreateScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
