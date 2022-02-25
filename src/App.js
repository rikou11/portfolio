import React from 'react';
import './App.css';

import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => {
    return (
        <div>
            <Home />
            <Project />
            <Resume />
            <Contact />
        </div>
    )
}

export default App