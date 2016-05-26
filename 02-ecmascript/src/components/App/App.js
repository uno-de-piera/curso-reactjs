import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class App extends React.Component
{
    render()
    {
        return (
            <div>
                <Header />
                <h1>Super APP!</h1>
                <Footer />
            </div>
        );
    }
}