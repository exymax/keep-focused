import React, { Component } from 'react';
import Logo from '../components/Header/Logo';
import Search from '../components/Header/Search';
import Menu from '../components/Header/Menu';

export default class Header extends Component {
    render() {
        return (
            <div className='container header'>
                <Logo/>
                <Search/>
                <Menu/>
            </div>
        );
    }
}