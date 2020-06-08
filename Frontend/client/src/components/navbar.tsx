import React from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import Login from '../pages/login';
import Home from '../pages/home';
import Error from '../pages/error';

export default function nav() {
  return (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
    </Navbar>
  );
}
