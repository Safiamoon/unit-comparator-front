import React, {Component} from 'react';
import logo from '../../images/logo-supermovies.png';

class Logo extends Component {
    render = () => {
        return(
            <a className="logo-item item col-s-2 logo--link" href="/">
                <img
                    className="logo"
                    src={logo}
                    alt="logo superMovies"
                />
            </a>
        );
    }
}

export default Logo;