import React from 'react';
import { Button, Icon, Card, Elevation, FormGroup, InputGroup } from '@blueprintjs/core';
import "../css/main.css"
import "../css/login.css"

import DarkModeButton from '../components/dark_mode_button';

export default function Login() {
  return (
    <div className="LoginOuter">
      <DarkModeButton />
        <div className="LoginInner">
          <Card className="LoginCard"  interactive={true} elevation={Elevation.TWO}>
            <h2 className="LoginTitle"> <Icon icon="log-in" /> Login Page </h2>
                
              <FormGroup 
                helperText=""
                label=""
                labelFor="text-input"
                labelInfo="(required)"
                ><Icon icon="user" /> Username
                <InputGroup id="text-input" className="pad-down" placeholder="Einstein42" />
                <Icon icon="lock" /> Password
                <InputGroup type="password" id="text-input" className="pad-down" placeholder="Password" />
              </FormGroup>   
              
              <Button>Submit</Button>
          </Card>
        </div>
    </div>
  );
}
