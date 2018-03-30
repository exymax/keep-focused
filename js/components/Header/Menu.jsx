import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div className='menu-wrapper'>
                <ul className='menu'>
                    <li><a href='/timers'>Timers</a></li>
                    <li><a href='/users'>Users</a></li>
                    <li><a href='/account'>My account</a></li>
                </ul>
            </div>
        );
    }
}