import React from 'react';
import Logo from '../../../assets/images/name.jpg';
import './style.scss';

export default class MenuHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { toggleMenu } = this.props;
        return(
            <header className="menu-header"> 
                <img src={Logo} alt="logo" className="menu-header-avatar"/>
                {
                    !toggleMenu ? <p className="menu-header-text">Paróquia São Sebastião</p> : null
                }
            </header>
        )
    }
}
