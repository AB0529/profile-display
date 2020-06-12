import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button, Alignment} from '@blueprintjs/core';

export default function nav() {
  return (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Link to={`/`} className="bp3-minimal"> <Button className="bp3-minimal" icon="home" text="Home" /> </Link> 
            <Link to={`/stuff`} className="bp3-minimal"> <Button className="bp3-minimal" icon="document" text="Files" /> </Link> 

            <div className="right">
              <Link to={`/login`} className="bp3-minimal"> <Button className="bp3-minimal" icon="user" text="Login"/> </Link> 
              <Link to={`/register`} className="bp3-minimal"> <Button className="bp3-minimal" icon="id-number" text="Register"/> </Link> 
            </div>
        </Navbar.Group>
    </Navbar>
  );
}
