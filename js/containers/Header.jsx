import React, { Component } from 'react';
import Logo from '../components/Header/Logo';
import Menu from '../components/Header/Menu';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Logo/>
                <Menu/>
            </div>
        );
    }
}