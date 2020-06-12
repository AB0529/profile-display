import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button, Alignment} from '@blueprintjs/core';


import DarkModeButton from '../components/dark_mode_button';

export default function nav() {
  const title = 'Gamer Hideout';

  return (
    <Navbar className="nav-color">
        <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>{title}</Navbar.Heading>
          <Navbar.Divider />
          <Link to={`/`} className="link"> <Button className="bp3-minimal" icon="home" text="Home" /> </Link> 
          {/* <Link to={`/stuff`}> <Button className="bp3-minimal" icon="document" text="Files" /> </Link>  */}
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Link to={`/login`} className="link"> <Button className="bp3-minimal" icon="user" text="Login" /> </Link> 
          <Link to={`/register`} className="link"> <Button className="bp3-minimal" icon="id-number" text="Register" /> </Link> 
          <DarkModeButton />
        </Navbar.Group>
    </Navbar>
  );
}
