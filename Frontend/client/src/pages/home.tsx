import React from 'react';

import DarkModeButton from '../components/dark_mode_button';

import '../css/main.css';

export default function Login() {
  return (
      <React.Fragment>
            <DarkModeButton />
            <h1 className="center">
                Hello
            </h1>
      </React.Fragment>      
  );
}
