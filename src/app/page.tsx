import React from 'react';
import Banner from './components/Banner';
import Library from './components/home-page/Library';

const HomePage = () => {
    return (
        <div>
            <main>
                <Banner/>
                <Library/>
            </main>
        </div>
    );
};

export default HomePage;