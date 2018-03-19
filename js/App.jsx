import React, { Component } from 'react';
import Header from './containers/Header';
import Body from './containers/Body';
import Footer from './containers/Footer';

export default class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}