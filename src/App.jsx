// src/App.jsx

import React from 'react';
import ProfileSection from './components/ProfileSection';
import InfoSection from './components/InfoSection';

function App() {
    return (
        <div className="main-container">
            <ProfileSection />
            <InfoSection />
        </div>
    );
}

export default App;