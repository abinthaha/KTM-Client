import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Home from '../../assets/images/sidebar/home.png';
import Bike from '../../assets/images/sidebar/bike.png';
import Biker from '../../assets/images/sidebar/biker.png';
import Table from '../../assets/images/sidebar/table.png';

import './index.scss';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavActive: false,
            navItems: [
                {
                    id: 2,
                    linkTo: '/',
                    name: 'Home',
                    icon: Home
                },  {
                    id: 3,
                    linkTo: '/biker-data',
                    name: 'Biker',
                    icon: Biker
                },  {
                    id: 4,
                    linkTo: '/bike-data',
                    name: 'Bike',
                    icon: Bike
                },  {
                    id: 5,
                    linkTo: '/table-data',
                    name: 'Table',
                    icon: Table
                }
            ]
        }
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(item) {
        if (item) {
            this.props.history.push(item.linkTo);
        } else {
            this.setState({
                ...this.state,
                isNavActive: !this.state.isNavActive
            })
        }
    }

    render() {
        return (
            <header>
                <ul className={'nav-wrapper ' + (this.state.isNavActive ? 'active' : '')}>
                    <li id="nav-icon" onClick={ev => this.handleNavClick(false)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    {
                        this.state.navItems.map(navItem => {
                            return (
                                <li
                                    key={navItem.id}
                                    className='nav-item ' onClick={ev => this.handleNavClick(navItem)}>
                                   <span className='name'>{navItem.name}</span>
                                   <span className='icon' style ={ { backgroundImage: "url("+ navItem.icon +")" } }></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);