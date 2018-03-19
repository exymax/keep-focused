import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div className='menu-wrapper'>
                <ul className='menu'>
                    <li>Timers</li>
                    <li>Users</li>
                    <li>My account</li>
                </ul>
            </div>
        );
    }
}