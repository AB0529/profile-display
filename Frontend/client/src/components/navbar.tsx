import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button, Alignment} from '@blueprintjs/core';


import DarkModeButton from '../components/dark_mode_button';

export default function nav() {
  return (
    <Navbar className="nav-color">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Link to={`/`}> <Button className="bp3-minimal" icon="home" text="Home" /> </Link> 
            <Link to={`/stuff`}> <Button className="bp3-minimal" icon="document" text="Files" /> </Link> 

            <div className="right">
              <Link to={`/login`}> <Button className="bp3-minimal" icon="user" text="Login"/> </Link> 
              <Link to={`/register`}> <Button className="bp3-minimal" icon="id-number" text="Register"/> </Link> 
              <DarkModeButton />
            </div>
        </Navbar.Group>
    </Navbar>
  );
}
