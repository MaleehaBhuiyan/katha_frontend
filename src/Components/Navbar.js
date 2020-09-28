import React from 'react'
import { NavLink } from 'react-router-dom';

const kathaLogo = require('../images/kathaLogo.png')
const userIcon = require('../images/userIcon.png')
const heartIcon = require('../images/heartIcon.png')
const shoppingCartIcon = require('../images/shoppingCartIcon.png')

class Navbar extends React.Component {
  render() {
    return (
        <div>
            <nav id="navbar" class="">
            <div class="nav-wrapper">
            
                <div class="logo">

                {/* <a href="#home"><i class="fa fa-angellist"></i><img src={kathaLogo} width="125" /></a> */}
                </div>

            
                <ul id="menu">
                <li><NavLink to="/home" exact><img src={kathaLogo} width="125" /></NavLink></li>
                <li><NavLink to="/favorites" exact><img src={heartIcon} width="50" /></NavLink></li>
                <li><NavLink to="/shoppingcart" exact><img src={shoppingCartIcon} width="50" /></NavLink></li>
                <li><NavLink to="/account" exact><img src={userIcon} width="50" /></NavLink></li>
                </ul>
            </div>
            </nav>

        </div>
    )
  }
}

export default Navbar;