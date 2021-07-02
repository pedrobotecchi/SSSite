import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import MenuHeader from '../components/Menu/MenuHeader'


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleMenu : false,
        }
    }
    render() {
        return(
            <nav className='navigator__container'>
                <ProSidebar collapsed={this.state.toggleMenu} className='navigator' >
                    <SidebarHeader>
                        <MenuHeader toggleMenu={this.state.toggleMenu}></MenuHeader>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu popperArrow iconShape="square">
                            <MenuItem>A Igreja</MenuItem>
                            <SubMenu title="Missas">
                                <MenuItem>Horário das Missas</MenuItem>
                                <MenuItem>Teste</MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <p>HELLO</p>
                    </SidebarFooter>
            </ProSidebar>
            </nav>
        )
    }
}
