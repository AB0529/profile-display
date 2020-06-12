import React from 'react';
import { Button, Card, Elevation, FormGroup, InputGroup } from '@blueprintjs/core';
import "../css/main.css"
import "../css/login.css"

import DarkModeButton from '../components/dark_mode_button';

export default function Login() {
  return (
    <div className="LoginOuter">
      <DarkModeButton />



        <div className="LoginInner">
        <Card className="LoginCard"  interactive={true} elevation={Elevation.TWO}>
          <h2 className="LoginTitle"> Login Page </h2>
              
            <FormGroup 
              helperText="Helper text with details..."
              label=""
              labelFor="text-input"
              labelInfo="(required)"
              >
              Username
              <InputGroup id="text-input" placeholder="Placeholder text" />
              Password
              <InputGroup type="password" id="text-input" placeholder="Placeholder text" />
            </FormGroup>   
            
            <Button>Submit</Button>
        </Card>
         
        </div>
    </div>
  );
}
